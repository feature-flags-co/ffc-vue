import { FFCJsClient } from "ffc-js-client-sdk";

const FfcPlugin = {
  install: (app, options) => {
    FFCJsClient.initialize(
      options.environmentSecret,
      options.user,
      options.baseUrl
    );
    app.prototype.$FfcPlugins = FFCJsClient;
  },
};
export default FfcPlugin;
