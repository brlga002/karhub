import 'reflect-metadata'

import { AuthUserUseCase } from '2-application/useCases/auth/AuthUserUseCase'
import { CreateUserUseCase } from '2-application/useCases/user/CreateUserUseCase'
import { DeleteUserUseCase } from '2-application/useCases/user/DeleteUserUseCase'
import { GetUserUseCase } from '2-application/useCases/user/GetUserUseCase'
import { ListUsersUseCase } from '2-application/useCases/user/ListUsersUseCase'
import { UpdateUserUseCase } from '2-application/useCases/user/UpdateUserUseCase'
import { UserMongooseRepository } from '4-framework/repositories/user/UserMongooseRepository'
import { JwtTokenService } from '4-framework/services/JwtTokenService'
import { AuthUserController } from 'src/3-interfaces/controllers/AuthUserController'
import { UserController } from 'src/3-interfaces/controllers/UserController'
import { INTERFACE_TOKENS } from 'src/3-interfaces/tokens/interfaceTokens'

import { container } from '../container'

container
  .bind(INTERFACE_TOKENS.UsersRepository)
  .toConstantValue(new UserMongooseRepository())
container.bind(INTERFACE_TOKENS.GetUserUseCase).to(GetUserUseCase)
container.bind(INTERFACE_TOKENS.ListUsersUseCase).to(ListUsersUseCase)
container.bind(INTERFACE_TOKENS.UpdateUserUseCase).to(UpdateUserUseCase)
container.bind(INTERFACE_TOKENS.DeleteUserUseCase).to(DeleteUserUseCase)
container.bind(INTERFACE_TOKENS.CreateUserUseCase).to(CreateUserUseCase)
container.bind(INTERFACE_TOKENS.UserController).to(UserController)
//
container.bind(INTERFACE_TOKENS.AuthUserUseCase).to(AuthUserUseCase)
container.bind(INTERFACE_TOKENS.AuthUserController).to(AuthUserController)
container.bind(INTERFACE_TOKENS.TokenService).to(JwtTokenService)
