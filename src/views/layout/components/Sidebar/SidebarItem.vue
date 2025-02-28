<template>
    <template v-for="route in routes" :key="route.path">
      <!-- 菜单分组 -->
      <el-sub-menu v-if="route.children && route.hidden === false && route.children.length > 0" :index="route.path">
        <template #title> <!--插槽-->
          <el-icon>
            <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon"/>
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <template v-for="child in route.children" :key="child.path">
          <router-link v-if="child.hidden === false" :to="child.path">
            <el-menu-item :index="child.path">
              <el-icon>
                <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"/>
              </el-icon>
              <span>{{ child.meta.title }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-sub-menu>
      <!-- 单个菜单项 -->
      <el-menu-item v-else-if="!route.hidden" :index="route.path">
         <el-icon>
        <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon"/>
         </el-icon>
        <span>{{ route.meta.title }}</span>
      </el-menu-item>
    </template>
</template>

<script setup>

import {onBeforeMount, onMounted, ref} from "vue";


const props = defineProps({
  routes: {
    type: Array
  },
  isNest: {
    type: Boolean,
    default: false
  }
})

onBeforeMount(() => {
  console.log(props.routes)
})

</script>

<style scoped>

</style>

