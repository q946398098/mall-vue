<template>
  <el-scrollbar :height="scrollbarHeight">
  <el-menu
      mode="vertical"
      :show-timeout="50"
      :collapse="isCollapse"
  >
      <sidebar-item :routes="routes"></sidebar-item>
   </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import {onMounted, onUnmounted, computed, ref} from "vue";
import {useLayoutStore} from "@/stores/layout.js";
import {useUserInfoStore} from "@/stores/user.js"

const userInfoStore = useUserInfoStore();

const layoutStore = useLayoutStore();


const scrollbarHeight = ref('100%'); // 初始值

const updateScrollbarHeight = () => {
  scrollbarHeight.value = `${window.innerHeight}px`;
};

onMounted(() => {
  window.addEventListener('resize', updateScrollbarHeight);
  updateScrollbarHeight(); // 初始化时设置高度
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScrollbarHeight);
});

const routes = computed(() => {
   return userInfoStore.userInfo.menus;
});

const isCollapse = computed(() => {
    return layoutStore.sidebarStatus;
})

</script>



