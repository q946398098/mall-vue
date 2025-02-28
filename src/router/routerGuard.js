/*路由守卫*/
import router from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {useUserInfoStore} from '@/stores/user.js';
import {getInfo} from '@/api/login.js'
import {constantRouterMap} from '@/router/index.js';

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {

    NProgress.start()
    const userInfo = useUserInfoStore();

    if (userInfo.token) {
        if (to.path === '/login') {
            next()
            NProgress.done()
        } else {
            if (userInfo?.userInfo?.roles?.length === 0) {
                getInfo().then(res => {
                    res.data.menus = ['dashboard','video','home','dashboard1','video1','home1']
                    userInfo.setUserInfo(res.data)
                    adjustRouter(['dashboard','video','home','dashboard1','video','home1']);
                })
                next()
            } else {
                adjustRouter(userInfo?.userInfo?.menus)
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
/**
 * 调整路由 , 删除没有权限的菜单
 * @param menus
 */
const adjustRouter = function (menus){
    constantRouterMap.forEach((item,k) => {
        if (menus.includes(item.name)){
            constantRouterMap[k].hidden = false;
        }else{
            constantRouterMap[k].hidden = true;
        }
        if (item.children && item.children.length > 0) {
            item.children.forEach((child,kk) => {
                if (menus.includes(child.name)){
                    constantRouterMap[k].children[kk].hidden = false;
                }else{
                    constantRouterMap[k].children[kk].hidden = true;
                }
            })
        }
    })
    console.log('--xx-',constantRouterMap)
}