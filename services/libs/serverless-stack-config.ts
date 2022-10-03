import { Config as _Config } from '@serverless-stack/node/config'
// '@serverless-stack/resources' からも取れるけども、どちらが正しい？

/**
 * NOTE: stacks/Database.ts でのTABLE_NAMEに相当しているß？
 */
interface ServerlessStackConfigType {
  TABLE_NAME: string | undefined
  API_URL: string | undefined
}

export const Config = _Config as ServerlessStackConfigType
