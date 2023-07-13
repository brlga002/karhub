import { Beer, BeerDto } from '1-domain/entities/Beer/Beer'
import { BeersRepository } from '2-application/repositories/BeersRepository'
import { BeerMongooseModel } from '4-framework/repositories/beer/BeerMongooseModel'

import { MongooseRepository } from '../MongooseRepository'

export class BeerMongooseRepository
  extends MongooseRepository<Beer, BeerDto>
  implements BeersRepository
{
  constructor() {
    super(Beer, BeerMongooseModel)
  }
}
