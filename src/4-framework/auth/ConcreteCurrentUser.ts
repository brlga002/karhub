import { injectable } from 'inversify'

import { CurrentUser } from '1-domain/auth/CurrentUser'

@injectable()
export class ConcreteCurrentUser implements CurrentUser {
  constructor(readonly userId: string) {}
}
