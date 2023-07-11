import { ApplicationResult } from '0-core/application/result/ApplicationResult'
import { Either } from '0-core/domain/result/Either'

import { BaseUseCase } from './BaseUseCase'
import { ApplicationError } from '../result/ApplicationError'

export type ListResult<T> = {
  data: T[]
  offset: number
  limit: number
  total: number
}

export type OutputListUseCase<T> = Promise<
  Either<ApplicationError, ApplicationResult<ListResult<T>>>
>

export type InputListUseCase = {
  // numeric offset of the first element on a page. See pagination section.
  offset?: number
  // client suggested limit to restrict the number of entries on a page. See pagination section.
  limit?: number
}

export type ListUseCase<T> = BaseUseCase<InputListUseCase, OutputListUseCase<T>>
