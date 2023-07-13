import { BeerSchema, newBeerSchema } from '1-domain/entities/Beer/Beer.schema'

import { registry } from '../registry'
import { createEntityPath } from '../utils/createEntityPath'
import { deleteEntityPath } from '../utils/deleteEntityPath'
import { getEntityPath } from '../utils/getEntityPath'
import { listEntitiesPath } from '../utils/listEntitiesPath'
import { updateEntityPath } from '../utils/updateEntityPath'

registry.registerPath(createEntityPath({ path: '/beers', nameModule: 'Beer' }))
registry.registerPath(
  deleteEntityPath({ path: '/beers/{id}', nameModule: 'Beer' }),
)
registry.registerPath(
  getEntityPath({ path: '/beers/{id}', nameModule: 'Beer' }),
)
registry.registerPath(listEntitiesPath({ path: '/beers', nameModule: 'Beer' }))
registry.registerPath(
  updateEntityPath({ path: '/beers/{id}', nameModule: 'Beer' }),
)
registry.register('Beer', BeerSchema.openapi('Beer'))
registry.register('NewBeer', newBeerSchema.openapi('NewBeer'))
