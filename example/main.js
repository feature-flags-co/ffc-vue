import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FFCPlugin from "../src/plugins";

// 初始化sdk，传入环境Secret Key和用户信息
FFCPlugin.initialize({
  environmentSecret:
    "YThmLWRmZjUtNCUyMDIxMDkxNzA3NTYyMV9fMl9fMjJfXzExNl9fZGVmYXVsdF82NTM3Mg==",
});

FFCPlugin.initialize({ environmentSecret: "" });

// 初始化用户信息，通常这一步会在登录后被调用
FFCPlugin.initUserInfo({
  userName: "sdk-sample-js-1252",
  email: "ts",
  key: "sdk-sample-js-1252",
  customizeProperties: [
    {
      name: "外放地址",
      value: "?from=zhihu&group=pm",
    },
  ],
});
Vue.use(FFCPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
