import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件

// register globally
export function registerIcons(app) {
     app.component('svg-icon', SvgIcon);
     const svgModules = import.meta.glob('./svg/*.svg')
     for (const path in svgModules) {
         const name = path.split('/').pop().replace(/\.svg$/, '')
         console.log(name,path)
         app.component(name, () => svgModules[path]())
     }

}
