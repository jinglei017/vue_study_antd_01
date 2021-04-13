<template>
  <div class="login-container">
    <h2 class="login-title">我的登陆页面</h2>
    <a-form ref="form" class="login-form">
      <h2 class="title">用户登录 LOGIN</h2>
      <a-form-item>
        <a-input v-model="loginInfo.username">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password v-model="loginInfo.password">
          <a-icon slot="prefix" type="unlock" />
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button class="submit" type="primary" @click="login">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import "@/assets/css/login.css";
import { loginMsg } from "@/api/user";
export default {
  data() {
    return {
      loginInfo: {
        username: "admin",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      let res = await loginMsg({
        username: this.loginInfo.username,
        password: this.loginInfo.password,
      });
      if (res.data.success) {
        this.$ms("登录成功！", 1, () => {
          this.$router.push("/");
        });
      } else {
        this.$mw("用户名或密码错误！", 2);
      }
    },
  },
};
</script>
<style scoped>
</style>