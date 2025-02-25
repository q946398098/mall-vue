<script setup>
import { ref, reactive, onMounted } from 'vue';
import { isvalidUsername } from '@/utils/validate';
import login_center_bg from '@/assets/images/login_center_bg.png';
// import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

// 使用reactive定义表单数据和验证规则
const loginForm = reactive({
  username: '',
  password: ''
});

const loginFormRef = ref('');



// 定义其他响应式数据
const loading = ref(false);
const pwdType = ref('password');
const dialogVisible = ref(false);
// const supportDialogVisible = ref(false); // 如果不需要可以删除

// 引入store和router
// const store = useStore();
const router = useRouter();

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

// 生命周期钩子
onMounted(() => {
  loginForm.username =  'admin';
  loginForm.password =  '';
});

// 方法
const showPwd = () => {
  pwdType.value = pwdType.value === 'password' ? '' : 'password';
};

const handleLogin = () => {
  // 这里需要使用Element Plus的表单验证方法，具体实现可能需要调整
  // 假设Element Plus的表单验证方法为validateForm
  // validateForm().then(valid => {
  //   if (valid) {
  //     // 登录逻辑
  //   }
  // });
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
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">mall-admin-web</h2>
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
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
          <span slot="prefix">
            <svg-icon icon-class="password" class="color-main"></svg-icon>
          </span>
            <span slot="suffix" @click="showPwd">
            <svg-icon icon-class="eye" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
          <el-button style="width: 45%" type="primary" @click.native.prevent="handleTry">
            获取体验账号
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="login_center_bg" class="login-center-layout">
    <el-dialog
      title="公众号二维码"
      :visible.sync="dialogVisible"
      :show-close="false"
      :center="true"
      width="30%">
      <div style="text-align: center">
        <span class="font-title-large"><span class="color-main font-extra-large">关注公众号</span>回复<span class="color-main font-extra-large">体验</span>获取体验账号</span>
        <br>
        <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg" width="160" height="160" style="margin-top: 10px">
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogConfirm">确定</el-button>
      </span>
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
