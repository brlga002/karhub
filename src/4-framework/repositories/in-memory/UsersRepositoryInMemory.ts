import {
  InputListRepository,
  OutputListRepository,
} from '0-core/application/repositories/Repository'
import { Entity } from '0-core/domain/entities/Entity'
import { UserDto, UserEntity } from '1-domain/entities/User/User'
import { UsersRepository } from '2-application/repositories/UsersRepository'

class UsersRepositoryInMemory implements UsersRepository {
  private users!: UserEntity[]

  constructor(users: UserEntity[] = []) {
    this.users = users
  }

  existedEmail(email: string): Promise<boolean> {
    const user = this.users.find((u) => u.props.email === email)
    return Promise.resolve(!!user)
  }

  findByEmail(email: string): Promise<UserEntity | null> {
    const user = this.users.find((u) => u.props.email === email)
    return Promise.resolve(user ?? null)
  }

  create(entity: UserEntity): Promise<void> {
    this.users.push(entity)
    return Promise.resolve()
  }

  delete(id: string): Promise<boolean> {
    const index = this.users.findIndex((u) => u.props.id === id)
    if (index !== -1) {
      this.users.splice(index, 1)
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

  exists(filter: Record<string, unknown>): Promise<boolean> {
    const foundUser = this.users.find((u) => {
      for (const key in filter) {
        if (u.props[key as unknown as keyof UserDto] !== filter[key]) {
          return false
        }
      }
      return true
    })
    return Promise.resolve(!!foundUser)
  }

  findOne(data: Record<string, unknown>): Promise<UserEntity | null> {
    const foundUser = this.users.find((u) => {
      for (const key in data) {
        if (u.props[key as unknown as keyof UserDto] !== data[key]) {
          return false
        }
      }
      return true
    })
    return Promise.resolve(foundUser ?? null)
  }

  getById(id: string): Promise<UserEntity | null> {
    const user = this.users.find((u) => u.props.id === id)
    return Promise.resolve(user ?? null)
  }

  list(input: InputListRepository): Promise<
    OutputListRepository<{
      id: string
      createdAt: string
      createdBy: string
      updatedAt: string | null
      updatedBy: string | null
      name: string
      email: string
      password: string
    }>
  > {
    let filteredUsers = this.users

    const total = filteredUsers.length

    const { offset = 0, limit = 10 } = input
    const startIndex = (offset - 1) * limit
    const endIndex = startIndex + limit
    filteredUsers = filteredUsers.slice(startIndex, endIndex)

    const output: OutputListRepository<{
      id: string
      createdAt: string
      createdBy: string
      updatedAt: string | null
      updatedBy: string | null
      name: string
      email: string
      password: string
    }> = {
      data: filteredUsers.map((u) => ({
        id: u.props.id,
        createdAt: u.props.createdAt,
        createdBy: u.props.createdBy,
        updatedAt: u.props.updatedAt,
        updatedBy: u.props.updatedBy,
        name: u.props.name,
        email: u.props.email,
        password: u.props.password,
      })),
      limit,
      offset,
      total,
    }

    return Promise.resolve(output)
  }

  async update(
    id: string,
    entity: Entity<unknown>,
  ): Promise<UserEntity | null> {
    const user = this.users.find((u) => u.props.id === id)

    if (user) {
      const updatedUser = await UserEntity.create({
        ...user.props,
        ...entity,
      })
      if (updatedUser.isLeft()) return Promise.resolve(null)

      return Promise.resolve(updatedUser.value)
    }

    return Promise.resolve(null)
  }
}

export { UsersRepositoryInMemory }
