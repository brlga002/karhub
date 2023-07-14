import { SSTConfig } from 'sst'

import { ApiGatewayStack } from 'stacks/ApiGatewayStack'
import { BeerStack } from 'stacks/BeerStack'
import { SwaggerStack } from 'stacks/SwaggerStack'

import { UserStack } from './stacks/UserStack'

export default {
  config(_input) {
    return {
      name: 'karhub',
      region: 'us-east-1',
    }
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs16.x',
    })

    app
      .stack(ApiGatewayStack)
      .stack(SwaggerStack)
      .stack(BeerStack)
      .stack(UserStack)
  },
} satisfies SSTConfig
