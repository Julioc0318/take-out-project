<template>
  <div id="app">
    <router-view></router-view>
    <FootNav v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FootNav from "./components/FootNav/FootNav.vue";
import axios from "./plugins/axios";

export default {
  name: "App",
  components: {
    FootNav,
  },
};
</script>

<style>
</style>
