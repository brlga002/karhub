import { SSTConfig } from 'sst'

import { ApiGatewayStack } from 'stacks/ApiGatewayStack'
import { BeerStack } from 'stacks/BeerStack'

import { UserStack } from './stacks/UserStack'

export default {
  config(_input) {
    return {
      name: 'karhub',
      region: 'us-east-1',
    }
  },
  stacks(app) {
    app.stack(ApiGatewayStack).stack(UserStack).stack(BeerStack)
  },
} satisfies SSTConfig
