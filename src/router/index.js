import Vue from 'vue'
import VueRouter from 'vue-router'

// @指的是src 不受当前文件路劲的影响
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
// import Login from '../views/login'
import article from '@/views/all/article'
import sucai from '@/views/all/sucai'
import commen from '@/views/all/commen'
import publics from '@/views/all/public'
import profile from '@/views/all/profile'
import content from '@/views/all/content'

// import { component } from 'vue/types/umd'
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/login',
        meta: {
            // title: '注册'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '注册'
        }
    },
    {
        path: '/layout',
        // name: 'layout',
        component: Layout,
        meta: {
            title: '首页'
        },
        // 路由嵌套
        children: [{
                path: '',
                name: 'home',
                component: Home,
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/article',
                name: 'article',
                component: article,
                meta: {
                    title: '发布文章'
                }
            },
            {
                path: '/sucai',
                name: 'sucai',
                component: sucai,
                meta: {
                    title: '素材管理'
                }
            },
            {
                path: '/commen',
                name: 'commen',
                component: commen,
                meta: {
                    title: '评论管理'
                }
            },
            {
                path: '/public',
                name: 'public',
                component: publics,
                meta: {
                    title: '注册'
                }
            },
            {
                path: '/profile',
                name: 'profile',
                component: profile,
                meta: {
                    title: '个人中心'
                }
            },
            {
                path: '/content',
                name: 'content',
                component: content,
                meta: {
                    title: '内容管理'
                }
            }
        ]
    }
]

const router = new VueRouter({
        routes
    })
    // 全局导航守卫(前置钩子)
router.beforeEach((to, from, next) => {

        document.title = to.matched[0].meta.title
        next()
            // console.log(22);
    })
    // 后置钩子
router.afterEach((to, from) => {
    // console.log(11);
    // console.log(from);
    // console.log(to);
})
export default router