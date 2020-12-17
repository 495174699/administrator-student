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
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/layout',
        // name: 'layout',
        component: Layout,
        // 路由嵌套
        children: [{
                path: '',
                name: 'home',
                component: Home
            },
            {
                path: '/article',
                name: 'article',
                component: article
            },
            {
                path: '/sucai',
                name: 'sucai',
                component: sucai
            },
            {
                path: '/commen',
                name: 'commen',
                component: commen
            },
            {
                path: '/public',
                name: 'public',
                component: publics
            },
            {
                path: '/profile',
                name: 'profile',
                component: profile
            },
            {
                path: '/content',
                name: 'content',
                component: content
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router