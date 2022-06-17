import axios from "axios";
import router from "./router.js";
import { Toast } from "vant";
import Vue from "vue";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  (config) => {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
    });

    let token = window.localStorage.getItem("user");
    token = token ? JSON.parse(window.localStorage.getItem("user")).token : "";
    config.headers = {
      token,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    Toast.clear();
    if (response.data.err == 2) {
      Toast({
        message: response.data.msg,
        duration: 1000,
        forbidClick: true,
      });

      router.replace({
        path: "/login",
        query: {
          redirect: router.currentRoute.fullPath,
        },
      });
    }

    return response;
  },
  (error) => {
    let { response } = error;
    console.log("error", response);
    if (response.data.err == 404 || response.status == 404) {
      Toast({
        message: "接口不存在",
        duration: 1000,
        forbidClick: true,
      });
    }
    return Promise.reject(error);
  }
);
Vue.prototype.$axios = axios;
