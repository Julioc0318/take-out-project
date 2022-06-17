<template>
  <div class="m-site">
    <LocationBar />
    <Swipe />
    <div class="divider"></div>
    <ShopList />
  </div>
</template>

<script>
import Swipe from "@/components/Swipe/Swipe.vue";
import LocationBar from "../../components/LocationBar/LocationBar.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
export default {
  name: "MSite",
  components: {
    LocationBar,
    Swipe,
    ShopList,
  },
};
</script>

<style scoped>
div.m-site {
  width: 100%;
  height: 617px;
  overflow: hidden;
}
div.m-site div.divider {
  height: 15px;
  background-color: rgb(245, 245, 245);
}
</style>
