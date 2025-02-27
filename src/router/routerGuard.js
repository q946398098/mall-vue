/*路由守卫*/
import router from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {useUserInfoStore} from '@/stores/user.js';
import {getInfo} from '@/api/login.js'

const whiteList = ['/login'] // 不重定向白名单
console.log(router)
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
                    console.log(userInfo.userInfo);
                    userInfo.setUserInfo(res.data)
                })
                next()
            } else {
                next()
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