<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="shop">外卖</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="cart">订单</van-tabbar-item>
      <van-tabbar-item icon="setting">我的</van-tabbar-item>
    </van-tabbar>
    <p style="display: none">{{ pathWatch }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(index) {
      if (index == 0 && this.$router.fullPath != "/msite")
        this.$router.push("./msite");
      else if (index == 1 && this.$router.fullPath != "/search")
        this.$router.push("./search");
      else if (index == 2 && this.$router.fullPath != "/order")
        this.$router.push("./order");
      else if (index == 3 && this.$router.fullPath != "/profile")
        this.$router.push("./profile");
    },
  },
  computed: {
    pathWatch() {
      if (this.$route.path.indexOf("/msite") != -1) {
        this.active = 0;
      } else if (this.$route.path.indexOf("/search") != -1) {
        this.active = 1;
      } else if (this.$route.path.indexOf("/order") != -1) {
        this.active = 2;
      } else {
        this.active = 3;
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>