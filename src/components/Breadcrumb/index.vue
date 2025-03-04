<template>
  <el-breadcrumb class="app-breadcrumb" :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{path:item.path}" v-for="(item,key) in levelList" :key="key">
                 {{item.title}}
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import {useRoute} from "vue-router";
import { ArrowRight } from '@element-plus/icons-vue'
import {computed, onMounted, ref} from "vue";

const route = useRoute()


const levelList = computed(()=>{
  const matchedRoutes = route.matched.filter((record) => record.meta && record.meta.title);
  return matchedRoutes.map((record) => ({
    path: record.path,
    title: record.meta.title,
  }));
})
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
