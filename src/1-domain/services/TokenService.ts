import { Either } from '0-core/domain/result/Either'

export type InputSign = {
  userId: string
  name: string
}

export type OutputSing = {
  token: string
  name: string
}

export interface TokenService {
  sign: (data: InputSign) => Either<Error, OutputSing>
  verify: (token: string) => Either<Error, InputSign>
}
