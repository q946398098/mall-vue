<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import { Navbar, Sidebar, AppMain } from './components'
import {computed} from "vue";
import {useLayoutStore} from "@/stores/layout.js";
const layoutStore = useLayoutStore()
const classObj = computed(() => {
  return {
    hideSidebar: layoutStore.sidebarStatus,
    mobile: layoutStore.device === 'mobile',
    withoutAnimation: layoutStore.withoutAnimation,
  }
})



</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
