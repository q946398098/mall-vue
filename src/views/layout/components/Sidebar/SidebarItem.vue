<template>
  <template v-for="(route, index) in routes" :key="index">
    <!-- 有子菜单 -->
    <el-sub-menu v-if="route.children && route.is_menu === true && route.fl_permission == 'Y' && route.children.filter(item=>item.is_menu===true).length > 0" :index="indexPrefix + index ">
      <template #title>
        <el-icon>
          <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon" />
        </el-icon>
        <span>{{ route.meta.title }}</span>
      </template>
      <sidebar-item :routes="route.children" :index-prefix="index + '-'"/>
    </el-sub-menu>

    <!-- 没有子菜单 -->
    <template v-else-if="route.is_menu && route.fl_permission == 'Y'">
      <router-link v-if="!route.path.startsWith('http')" :to="route.path">
        <el-menu-item :index="indexPrefix + index">
          <el-icon>
            <svg-icon :icon-class="route.meta.icon" />
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </el-menu-item>
      </router-link>
      <a v-else-if="route.fl_permission == 'Y'" :href="route.path" target="_blank">
        <el-menu-item :index="indexPrefix + index">
          <el-icon>
            <svg-icon :icon-class="route.meta.icon" />
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </el-menu-item>
      </a>
    </template>
  </template>
</template>

<script setup>
import {computed, defineProps, onMounted} from 'vue';
import SidebarItem from './SidebarItem.vue'; // 确保递归组件的引入

const props = defineProps({
  routes: {
    type: Array,
    required: true
  },
  indexPrefix: {
    type: String,
    default: ''
  }
});

</script>

<style scoped>
/* 你的样式 */
</style>
