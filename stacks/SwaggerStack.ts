import { StackContext, StaticSite } from 'sst/constructs'

export function SwaggerStack({ stack }: StackContext) {
  const site = new StaticSite(stack, 'SwaggerStack', {
    path: 'src/4-framework/openapi/swagger',
  })

  stack.addOutputs({
    SiteUrl: site.url,
  })
}
