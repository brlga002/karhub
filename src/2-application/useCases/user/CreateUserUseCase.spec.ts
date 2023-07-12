import 'reflect-metadata'

import { UserEntity } from '1-domain/entities/User/User'
import { UsersRepository } from '2-application/repositories/UsersRepository'
import { UsersRepositoryInMemory } from '4-framework/repositories/in-memory/UsersRepositoryInMemory'

import { CreateUserUseCase } from './CreateUserUseCase'

const INPUT_CREATE_USER = {
  name: 'gabriel',
  password: '123456',
  email: 'gabriel@gmail.com',
}

describe('CreateUserUseCase', () => {
  it('should be able to create a new user', async () => {
    expect.assertions(10)
    const usersRepository: UsersRepository = new UsersRepositoryInMemory()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const resultUseCase = await createUserUseCase.execute(INPUT_CREATE_USER)

    expect(resultUseCase.isRight()).toBeTruthy()

    if (resultUseCase.isRight()) {
      expect(resultUseCase.value.successCode).toBe(201)
      expect(resultUseCase.value.content).toBeTruthy()
      const user = resultUseCase.value.content!
      expect(user).toHaveProperty('id')
      expect(user).toHaveProperty('createdAt')
      expect(user).toHaveProperty('createdBy')
      expect(user).toHaveProperty('updatedAt')
      expect(user).toHaveProperty('updatedBy')
      expect(user).toMatchObject({
        name: INPUT_CREATE_USER.name,
        email: INPUT_CREATE_USER.email,
      })
      expect(user).not.toHaveProperty('password')
    }
  })

  it('should throw an error when email is invalid', async () => {
    expect.assertions(2)
    const usersRepository: UsersRepository = new UsersRepositoryInMemory()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const resultUseCase = await createUserUseCase.execute({
      ...INPUT_CREATE_USER,
      email: 'invalid-email',
    })

    expect(resultUseCase.isLeft()).toBeTruthy()

    if (resultUseCase.isLeft()) expect(resultUseCase.value.errorCode).toBe(422)
  })

  it('should throw an error when email is in use', async () => {
    expect.assertions(3)
    const { value: exitedUser } = await UserEntity.create(INPUT_CREATE_USER)
    const usersRepository: UsersRepository = new UsersRepositoryInMemory([
      exitedUser as UserEntity,
    ])
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const resultUseCase = await createUserUseCase.execute(INPUT_CREATE_USER)

    expect(resultUseCase.isLeft()).toBeTruthy()

    if (resultUseCase.isLeft()) {
      expect(resultUseCase.value.errorCode).toBe(400)
      expect(resultUseCase.value.error).toBe(
        `The email: ${INPUT_CREATE_USER.email}  is already in use by another User.`,
      )
    }
  })
})
