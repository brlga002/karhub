import { inject, injectable } from 'inversify'

import { ApplicationError } from '0-core/application/result/ApplicationError'
import { ApplicationResult } from '0-core/application/result/ApplicationResult'
import {
  InputUpdateUseCase,
  OutputUpdateUseCase,
  UpdateUseCase,
} from '0-core/application/useCases/UpdateUseCase'
import { left, right } from '0-core/domain/result/Either'
import { UpdateUserDto, UserDto } from '1-domain/entities/User/User'
import { UsersRepository } from '2-application/repositories/UsersRepository'
import { APPLICATION_TOKENS } from '2-application/tokens/applicationTokens'

@injectable()
export class UpdateUserUseCase implements UpdateUseCase<UpdateUserDto> {
  constructor(
    @inject(APPLICATION_TOKENS.UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(
    input: InputUpdateUseCase<UpdateUserDto>,
  ): OutputUpdateUseCase<UserDto> {
    const user = await this.usersRepository.getById(input.id)
    if (!user)
      return left(
        ApplicationError.notFound(`User with id '${input.id}' was not found.`),
      )

    user.props.name = input.name

    const result = await this.usersRepository.update(input.id, user)
    if (!result)
      return left(
        ApplicationError.internalServerError('Failed to update User.'),
      )

    return right(ApplicationResult.success<UserDto>(user))
  }
}
