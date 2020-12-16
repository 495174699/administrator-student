import Vue from 'vue'
import VueRouter from 'vue-router'

// @指的是src 不受当前文件路劲的影响
import Login from '@/views/login'
// import Login from '../views/login'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login
}]

const router = new VueRouter({
    routes
})

export default router