<template>
  <div>
    <div class="locationBar">
      <van-cell :title="location">
        <template #icon>
          <van-icon
            name="location-o"
            class="location"
            v-on:click="searchLocation"
          />
        </template>
        <template #right-icon>
          <router-link to="/login">登录&nbsp;|&nbsp;注册</router-link>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  mounted() {
    /* ###### BEGIN: axios 请求，输入当前经纬度信息，得到具体地址名称 ###### */
    this.$axios
      .get(
        `api/position/${this.$store.state.position.longitude},${this.$store.state.position.latitude}`
      )
      .then((res) => {
        this.location = res.data.data.name;
      });
    /* ######  END : axios 请求，输入当前经纬度信息，得到具体地址名称 ###### */
  },
  data() {
    return {
      location: "",
    };
  },
  methods: {
    searchLocation() {
      this.locationStyle = "hide";
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
.van-cell {
  background-color: #027fe6;
  color: #fff;
}
.van-cell a {
  color: #fff;
  cursor: pointer;
}
.van-cell .van-icon {
  width: 24px;
  height: 24px;
  font-size: 24px;
  cursor: pointer;
}
.van-cell__title span {
  font-size: 14px;
  position: absolute;
  left: 42px;
}
</style>