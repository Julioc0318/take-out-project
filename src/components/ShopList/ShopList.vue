<template>
  <div class="shopList">
    <div class="tit">
      <i><van-icon name="wap-nav" /></i>
      <span>附近商家</span>
    </div>
    <Shop
      v-for="(shopDetail, index) in shopDetails"
      :key="index"
      :shopDetail="shopDetail"
      :index="index"
    />
  </div>
</template>

<script>
var Mock = require("mockjs");
var Random = Mock.Random;
import Shop from "./Shop.vue";
export default {
  mounted() {
    /* ###### BEGIN: axios 请求，输入当前经纬度信息，得到附近商铺信息 ###### */
    this.$axios
      .get(`api/shops`, {
        params: {
          longitude: this.$store.state.position.longitude,
          latitude: this.$store.state.position.latitude,
        },
      })
      .then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          let shopName = res.data.data[i].name;
          let sales = res.data.data[i].recent_order_num;
          let rank = res.data.data[i].rating;
          let fee = {
            min: res.data.data[i].float_minimum_order_amount,
            delivery: res.data.data[i].float_delivery_fee,
          };
          this.shopDetails.push({
            shopName,
            shopPicUrl: Random.dataImage("100x100"),
            sales,
            rank,
            fee,
          });
        }
      });
    /* ######  END : axios 请求，输入当前经纬度信息，得到附近商铺信息 ###### */
  },
  data() {
    return {
      position: { longitude: "", latitude: "" },
      shopDetails: [],
    };
  },
  components: {
    Shop,
  },
  /* ###### BEGIN: 全局数据总线，组件销毁前解绑方法 ###### */
  beforeDestory() {
    this.$bus.$off("sendPosition");
  },
  /* ######  END : 全局数据总线，组件销毁前解绑方法 ###### */
};
</script>

<style scoped>
div.shopList {
  overflow: scroll;
  height: 393px;
}
div.shopList div.tit {
  margin-top: 4px;
  height: 20px;
}
div.shopList div.tit i {
  margin: 2px 5px 0 12px;
  font-size: 18px;
  color: grey;
}
div.shopList div.tit span {
  font-size: 15px;
  color: grey;
}
</style>