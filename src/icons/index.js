import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件

// register globally
export function registerIcons(app) {
     app.component('svg-icon', SvgIcon);

}
