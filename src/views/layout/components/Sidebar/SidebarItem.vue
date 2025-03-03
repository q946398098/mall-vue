<template>
    <template v-for="(route,index) in routes">

      <!-- 有子菜單 -->
      <template v-if="route.children && route.hidden === false && route.children.length > 0">
        <el-sub-menu  :index="index">

          <template #title> <!--插槽-->
            <el-icon>
              <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon"/>
            </el-icon>
            <span>{{ route.meta.title }}</span>
          </template>

          <template v-for="(child,child_index) in route.children">
            <template v-if="child.children && child.hidden === false && child.children.length > 0">
              <SidebarItem :routes="child.children"/>
            </template>
            <template v-if="child.path.startsWith('http')">
              <a :href="child.path" target="_blank">
                <el-menu-item :index="index +  '-' + child_index">
                  <el-icon>
                    <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                  </el-icon>
                  <span>{{ child.meta.title }}</span>
                </el-menu-item>
              </a>
            </template>
            <template v-if="!child.path.startsWith('http') && child.hidden === false">
              <router-link  :to="child.path">
                <el-menu-item :index="index +  '-' + child_index">
                  <el-icon>
                    <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"/>
                  </el-icon>
                  <span>{{ child.meta.title }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </template>

        </el-sub-menu>
      </template>

      <!-- 沒有子菜單 -->
      <template v-else-if="!route.hidden">
        <router-link :to="route.path">
          <el-menu-item :index="index">
            <el-icon>
              <svg-icon :icon-class="route.meta.icon"/>
            </el-icon>
            <span>{{ route.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </template>

    </template>
</template>

<script setup>

import {computed} from "vue";
import SidebarItem from './SidebarItem.vue'; // 确保递归组件的引入


const props = defineProps({
  routes: {
    type: Array
  },
  isNest: {
    type: Boolean,
    default: false
  }
})

computed(() => {
  console.log('routers',props.routes)
})

</script>



<style scoped>

</style>

