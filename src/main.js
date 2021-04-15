import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js";

Vue.config.productionTip = false;

let data = {
  backgrounds: mock,
  favorites: []
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
