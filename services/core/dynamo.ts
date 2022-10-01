import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { EntityConfiguration } from 'electrodb'
import { Config } from '../libs/serverless-stack-config'

export * as Dynamo from './dynamo'

export const Client = new DynamoDBClient({})

export const Configuration: EntityConfiguration = {
  table: Config.TABLE_NAME,
  client: Client,
}
