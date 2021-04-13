import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import UserList from '@/views/User/UserList'
import Login from '@/views/User/Login'
import WorkList from '@/views/Work/WorkList'
import Error404 from '@/views/Error'
import _ from '@/plugin/loading.js'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'layout',
            component: Layout,
            children: [{
                    path: '',
                    name: 'home',
                    component: Home,
                    meta: {
                        title: "数据驾驶舱"
                    }
                },
                {
                    path: 'userlist',
                    name: 'userlist',
                    component: UserList,
                    meta: {
                        title: "员工列表",
                        module: "员工管理"
                    }
                },
                {
                    path: 'worklist',
                    name: 'worklist',
                    component: WorkList,
                    meta: {
                        title: "工单列表",
                        module: "业务管理"
                    }
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: "登录"
            }
        },
        {
            path: '*',
            name: 'error',
            component: Error404
        }
    ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = "小垃圾管理系统" + "-" + to.meta.title;
    setTimeout(() => {
        next()
    }, 300);
})

router.afterEach((to, from) => {
    NProgress.done();
})


export default router;