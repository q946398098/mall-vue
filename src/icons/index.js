import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件
import 'virtual:svg-icons-register'

// register globally
export function registerIcons(app) {
     app.component('svg-icon', SvgIcon);
}
