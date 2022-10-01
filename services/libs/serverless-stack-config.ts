import { Config as _Config, type ConfigType } from '@serverless-stack/node/config'

/**
 * NOTE: 型補完を効かせるために、型を継承する形で定義する
 */
interface ServerlessStackConfigType extends ConfigType {
  TABLE_NAME: string | undefined
  API_URL: string | undefined
}

export const Config = _Config as ServerlessStackConfigType
