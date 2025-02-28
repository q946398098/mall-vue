<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleClick" :isActive="isActive"></hamburger>
<!--    <breadcrumb></breadcrumb>-->
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-menu>
</template>

<script setup>
import  hamburger from '@/components/Hamburger/index.vue'
import {useUserInfoStore} from "@/stores/user.js";
import {useLayoutStore} from "@/stores/layout.js";
import {ref} from "vue";
import router from "@/router";

const layoutStore = useLayoutStore();
const userStore  = useUserInfoStore();
const avatar = 'data: image/jpeg;base64,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';

const isActive = ref(layoutStore.sidebarStatus);

const logout = () => {
    router.push('/login');
    userStore.removeUserInfo();
    userStore.removeToken();
}

const toggleClick = function (){
  layoutStore.setSidebarStatus(!layoutStore.sidebarStatus)

  isActive.value = !isActive.value
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

