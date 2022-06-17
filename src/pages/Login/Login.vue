<template>
  <div class="login">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <p class="tit">硅谷外卖</p>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <p class="hint">
        温馨提示：未注册硅谷外卖账号的手机号，登陆时将自动注册，且代表已同意
        <span class="highLight">《用户服务协议》</span>
      </p>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <p class="aboutUs">关于我们</p>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      Toast("提交");
      console.log("submit", values);
    },
    onClickLeft() {
      Toast("返回");
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.tit {
  margin: 30px auto;
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  color: #1989fa;
}
.hint {
  font-size: 13px;
  text-align: center;
  margin: 25px 0 35px;
  padding: 0 10px;
  color: #9a97a6;
}
.aboutUs {
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: #9a97a6;
}
span.highLight {
  color: #1989fa;
}
</style>