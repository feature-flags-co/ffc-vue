import FfcPlugin from "./plugins";

const install = function (Vue, options) {
  // 判断是否安装
  if (install.installed) return;
  Vue.use(FfcPlugin, options);
};

export default {
  FfcPlugin,
  install,
};
