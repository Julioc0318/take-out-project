import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router.js";
import "./assets/css/base.css";
import "lib-flexible";
import Vant from "vant";
import "vant/lib/index.css";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
