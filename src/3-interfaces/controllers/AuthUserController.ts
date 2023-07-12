import { inject, injectable } from 'inversify'

import { left, right } from '0-core/domain/result/Either'
import {
  AuthUserRoutesController,
  InputAuthenticateUser,
  InputUpdateUserPassword,
  OutputAuthenticateUser,
  OutputUpdateUserPassword,
} from '1-domain/controllers/AuthUserRoutesController'
import { APPLICATION_TOKENS } from '2-application/tokens/applicationTokens'
import { AuthUserUseCase } from '2-application/useCases/auth/AuthUserUseCase'
import { UpdateUserPasswordUseCase } from '2-application/useCases/auth/UpdateUserPasswordUseCase'

@injectable()
export class AuthUserController implements AuthUserRoutesController {
  constructor(
    @inject(APPLICATION_TOKENS.AuthUserUseCase)
    private readonly authUserUseCase: AuthUserUseCase,
    @inject(APPLICATION_TOKENS.UpdateUserPasswordUseCase)
    private readonly updateUserPasswordUseCase: UpdateUserPasswordUseCase,
  ) {}

  async authenticateUser(input: InputAuthenticateUser): OutputAuthenticateUser {
    const result = await this.authUserUseCase.execute(input)
    if (result.isLeft()) return left(result.value)
    return right(result.value)
  }

  async updateUserPassword(
    input: InputUpdateUserPassword,
  ): OutputUpdateUserPassword {
    const result = await this.updateUserPasswordUseCase.execute(input)
    if (result.isLeft()) return left(result.value)
    return right(result.value)
  }
}
