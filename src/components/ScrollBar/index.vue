<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll" >
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  console.log(top)
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
  .scroll-wrapper {
    position: absolute;
     width: 100%!important;
  }
}
</style>
