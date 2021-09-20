import { PluginFunction } from "vue";

declare namespace FfcPlugin {
  type CustomizeProperties = Record<any, any>[]
  type EnvironmentSecret = string
  type BaseUrl = string
  type AppType = "Javascript"

  interface User {
    userName: string,
    email: string,
    country: string,
    key: string,
    customizeProperties: CustomizeProperties
  }

  interface VariationAsyncResult{
    displayOrder:number
    localId:number
    variationValue: string
  }

  type initUserInfo = (user: User) => void
  type initialize = (environmentSecret: EnvironmentSecret, user: User, baseUrl: BaseUrl, appType: AppType) => void
  type trackCustomEventAsync = (data: any) => Promise<boolean>
  type trackAsync = (data: any) => Promise<boolean>
  type track = (data: any) => boolean
  type getVariationPayloadStr = (featureFlagKey: string) => string
  type variationAsync = (featureFlagKey: string, defaultResult: boolean) => Promise<VariationAsyncResult>
  type variation = (featureFlagKey: string, defaultResult: boolean) => boolean
}

declare class FfcPlugin {
  static install: PluginFunction<never>;
  initUserInfo: FfcPlugin.initUserInfo;
  initialize: FfcPlugin.initialize;
  trackCustomEventAsync: FfcPlugin.trackCustomEventAsync;
  trackCustomEvent: FfcPlugin.trackCustomEventAsync;
  trackAsync: FfcPlugin.trackAsync;
  track: FfcPlugin.track;
  getVariationPayloadStr: FfcPlugin.getVariationPayloadStr;
  variationAsync: FfcPlugin.variationAsync;
  variation: FfcPlugin.variation;
}

declare module "vue/types/vue" {
  interface Vue {
    $FfcPlugin: FfcPlugin;
  }
}
export default FfcPlugin;
