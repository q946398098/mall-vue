<script setup>
import {computed, defineProps, onMounted, onBeforeMount} from 'vue';

// 定义props
const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
});

// 计算属性
const iconName = computed(() => `#icon-${props.iconClass}`);
const svgClass = computed(() => `svg-icon ${props.className || ''}`);




</script>



<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="iconName" ></use>
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.18em;
  fill: currentColor;
  overflow: hidden;
}
</style>
