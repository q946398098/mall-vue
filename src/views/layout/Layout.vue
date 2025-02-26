<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
<!--      <navbar></navbar>-->
<!--      <app-main></app-main>-->
    </div>
  </div>
</template>

<script setup>
import { Navbar, Sidebar, AppMain } from './components'
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
