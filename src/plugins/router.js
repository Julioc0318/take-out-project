import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import MSite from "../pages/MSite/MSite.vue";
import Search from "../pages/Search/Search.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Login from "../pages/Login/Login.vue";

let routes = [
  { path: "/msite", component: MSite, meta: { showFooter: true } },
  { path: "/", redirect: "/msite" },
  { path: "/search", component: Search, meta: { showFooter: true } },
  { path: "/order", component: Order, meta: { showFooter: true } },
  { path: "/profile", component: Profile, meta: { showFooter: true } },
  { path: "/login", component: Login },
];

let router = new VueRouter({
  mode: "history",
  routes, // 路由配置
});

export default router;
