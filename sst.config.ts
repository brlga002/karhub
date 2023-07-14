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

    app.addDefaultFunctionEnv({
      MONGO_URI: process.env.MONGO_URI!,
      JWT_APPLICATION_KEY: process.env.JWT_APPLICATION_KEY!,
      SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID!,
      SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET!,
    })

    app
      .stack(ApiGatewayStack)
      .stack(SwaggerStack)
      .stack(BeerStack)
      .stack(UserStack)
  },
} satisfies SSTConfig
