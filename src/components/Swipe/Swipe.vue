<template>
  <div class="swipe">
    <van-swipe class="my-swipe" indicator-color="#027fe6">
      <van-swipe-item>
        <van-row>
          <van-col span="6">
            <img src="./images/1.jpg" />
            <p>甜品小吃</p>
          </van-col>
          <van-col span="6">
            <img src="./images/4.jpg" />
            <p>商超便利</p>
          </van-col>
          <van-col span="6">
            <img src="./images/13.jpg" />
            <p>日式美食</p>
          </van-col>
          <van-col span="6">
            <img src="./images/2.jpg" />
            <p>中餐简餐</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6">
            <img src="./images/12.jpg" />
            <p>新店特惠</p>
          </van-col>
          <van-col span="6">
            <img src="./images/3.jpg" />
            <p>医疗保健</p>
          </van-col>
          <van-col span="6">
            <img src="./images/6.jpg" />
            <p>预定早餐</p>
          </van-col>
          <van-col span="6">
            <img src="./images/5.jpg" />
            <p>下午茶</p>
          </van-col>
        </van-row>
      </van-swipe-item>
      <van-swipe-item>
        <van-row>
          <van-col span="6">
            <img src="./images/7.jpg" />
            <p>咖啡奶茶</p>
          </van-col>
          <van-col span="6">
            <img src="./images/8.jpg" />
            <p>西式美食</p>
          </van-col>
          <van-col span="6">
            <img src="./images/9.jpg" />
            <p>家常饭</p>
          </van-col>
          <van-col span="6">
            <img src="./images/10.jpg" />
            <p>川菜湘菜</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6">
            <img src="./images/11.jpg" />
            <p>滋补高汤</p>
          </van-col>
          <van-col span="6">
            <img src="./images/12.jpg" />
            <p>新店特惠</p>
          </van-col>
          <van-col span="6">
            <img src="./images/13.jpg" />
            <p>日式美食</p>
          </van-col>
          <van-col span="6">
            <img src="./images/14.jpg" />
            <p>新鲜水果</p>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    this.$axios.get("api/index_category").then((res) => {
      console.log(res);
    });
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  height: 175px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}

/* ===== BEGIN: 每个 .van-col 的样式 ===== */
.my-swipe .van-swipe-item .van-col {
  height: 82.5px;
  line-height: 0;
}
.my-swipe .van-swipe-item .van-col img {
  width: 60px;
}
.my-swipe .van-swipe-item .van-col p {
  color: grey;
  font-size: 9px;
  line-height: 15px;
}
/* ===== END: 每个 .van-col 的样式 ===== */
</style>