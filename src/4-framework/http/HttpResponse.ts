import { ApplicationError } from '0-core/application/result/ApplicationError'
import { ApplicationResult } from '0-core/application/result/ApplicationResult'
import { Either } from '0-core/domain/result/Either'

export type ResponseHandler = {
  statusCode: number
  body: string
}

const headers = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export class HttpResponse {
  protected constructor(
    private resultUseCase: Either<ApplicationError, ApplicationResult>,
  ) {}

  static makeResponse(
    result: Either<ApplicationError, ApplicationResult>,
  ): ResponseHandler {
    return new HttpResponse(result).formatResponse()
  }

  static makeBadRequest(result: ApplicationError | Error) {
    if (result instanceof Error)
      return {
        statusCode: 400,
        body: JSON.stringify(result.message),
        ...headers,
      }

    return {
      statusCode: result.errorCode,
      body: JSON.stringify(result.error),
      ...headers,
    }
  }

  formatResponse(): ResponseHandler {
    if (this.resultUseCase.isLeft())
      return {
        statusCode: this.resultUseCase.value.errorCode,
        body: JSON.stringify(this.resultUseCase.value.error),
        ...headers,
      }

    return {
      statusCode: this.resultUseCase.value.successCode,
      body: JSON.stringify(this.resultUseCase.value.content),
      ...headers,
    }
  }
}
