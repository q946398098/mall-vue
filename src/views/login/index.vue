<script setup>
import {ref, reactive, onMounted, onBeforeMount} from 'vue';
import { isvalidUsername } from '@/utils/validate';
import {login} from "@/api/login.js";
import {useUserInfoStore} from "@/stores/user.js";
import router from "@/router";

var userStore = useUserInfoStore();

onBeforeMount(() => {
  // 挂载时获取用户信息
})

// 使用reactive定义表单数据和验证规则
const loginForm = reactive({
  username: '',
  password: ''
});
const loginFormRef = ref();
// 定义其他响应式数据
const loading = ref(false);
const pwdType = ref('password');
const dialogVisible = ref(false);
// 引入store和router

// 验证函数
const validateUsername = (rule, value, callback) => {
  if (!isvalidUsername(value)) {
    callback(new Error('请输入正确的用户名'));
  } else {
    callback();
  }
};

const validatePass = (rule, value, callback) => {
  if (value.length < 3) {
    callback(new Error('密码不能小于3位'));
  } else {
    callback();
  }
};

const loginRules = reactive({
  username: [{required: true, trigger: 'blur', validator: validateUsername}],
  password: [{required: true, trigger: 'blur', validator: validatePass}]
});

// 生命周期钩子
onMounted(() => {
  loginForm.username =  'admin';
  loginForm.password =  '';
});

// 方法
const showPwd = () => {
  pwdType.value = pwdType.value === 'password' ? 'text' : 'password';
};

const handleLogin = (loginFormRef) => {
  loginFormRef.validate((valid, fields) => {
    if (valid) {
      login(loginForm.username,loginForm.password).then(res => {
        if (res.code === 200){
          userStore.setToken(res.data.token);
          router.push('/');
        }
      })
    }
  })
};

const handleTry = () => {
  dialogVisible.value = true;
};

const dialogConfirm = () => {
  dialogVisible.value = false;
  setSupport(true);
};

const dialogCancel = () => {
  dialogVisible.value = false;
  setSupport(false);
};

</script>

<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               ref="loginFormRef"
               :rules="loginRules"
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">x</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
            <template #prefix>
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :show-password="true"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
          <template #prefix>
            <svg-icon icon-class="password" class="color-main"></svg-icon>
          </template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click="handleLogin(loginFormRef)">
            登录
          </el-button>
          <el-button style="width: 45%" type="primary" @click="handleTry">
            获取体验账号
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
<!--    <img :src="login_center_bg" class="login-center-layout">-->
    <el-dialog
      v-model="dialogVisible"
      title="公众号二维码"
      :show-close="true"
      :center="true"
      width="30%">
      <div style="text-align: center">
        <span class="font-title-large"><span class="color-main font-extra-large">关注公众号</span>回复<span class="color-main font-extra-large">体验</span>获取体验账号</span>
        <br>
        <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg" width="160" height="160" style="margin-top: 10px">
      </div>
      <template #footer>
          <span class="dialog-footer">
              <el-button type="primary" @click="dialogConfirm">确定</el-button>
         </span>
      </template>
    </el-dialog>
  </div>
</template>


<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
