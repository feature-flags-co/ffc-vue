const FfcPlugin = {
  install: (app, options) => {
    app.prototype.$FfcPlugin = options.FFCJsClient;
  },
};
export default FfcPlugin;
