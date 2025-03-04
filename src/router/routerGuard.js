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
            console.log('---')
            if (userInfo?.userInfo?.roles?.length === 0) {
                getInfo().then(res => {
                    res.data.menus = ['home','dashboard','teacher','router','pinia'];
                    adjustRouter(res.data.menus,constantRouterMap);
                    res.data.menus = constantRouterMap;//一次性的
                    userInfo.setUserInfo(res.data)
                })
                next()
            } else {
                constantRouterMap.values = userInfo.userInfo.menus;
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
const adjustRouter = function (menus, constantRouterMap) {
    // 递归处理路由
    function processRoutes(routes) {
        routes.forEach(route => {
            // 获取当前路由的名称
            if (menus.includes(route.name)) {
                route.fl_permission = 'Y';
            } else {
                route.fl_permission = 'N';
            }

            // 如果有子路由，递归处理
            if (route.children && route.children.length > 0) {
                processRoutes(route.children);
            }
        });
    }
    // 调用递归函数处理所有路由
    processRoutes(constantRouterMap);
}