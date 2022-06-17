import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const actions = {};
const mutations = {};
const state = {
  position: { longitude: "40.10038", latitude: "116.36867" },
};
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
