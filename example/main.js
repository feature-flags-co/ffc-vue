import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FFCPlugin from "../src/plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(FFCPlugin, {
  environmentSecret: "",
  user: {
    userName: "test",
    email: "test@gmail.com",
    key: "test@gmail.com",
    country: "FR",
    customizeProperties: [
      {
        name: "",
        value: "",
      },
    ],
  },
  baseUrl: "https://api.feature-flags.co",
});
