import { NewUserDto, UserEntity } from '1-domain/entities/User/User'

export async function makeUser(
  props?: Record<string, unknown>,
): Promise<UserEntity> {
  const result = await UserEntity.create({
    name: 'gabriel',
    password: '123456',
    email: 'gabriel@gmail.com',
    ...props,
  } as NewUserDto)

  if (result.isLeft()) throw new Error('Failed to create user')

  return result.value as UserEntity
}
