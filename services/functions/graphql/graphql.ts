import { GraphQLHandler } from '@serverless-stack/node/graphql'
import { schema } from './schema'

export const handler = GraphQLHandler({
  schema,
})
