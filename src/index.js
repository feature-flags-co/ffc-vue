import FfcPlugin from "./plugins";
import { FFCJsClient } from "ffc-js-client-sdk";

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  Vue.use(FfcPlugin, { FFCJsClient });
};

const initialize = function (options) {
  FFCJsClient.initialize(options.environmentSecret);
};

const initUserInfo = function (user) {
  FFCJsClient.initUserInfo(user);
};

export default {
  FfcPlugin,
  install,
  initialize,
  initUserInfo,
};
