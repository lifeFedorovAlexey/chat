import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store";
import Loading from "./components/lib/loading";
import CenterContainer from "./components/lib/center-container";
import router from "./router";
Vue.config.productionTip = false;
Vue.component("loading", Loading);
Vue.component("center-container", CenterContainer);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
