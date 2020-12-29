/**
 * 项目启动入口
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载全局样式文件
import './style/index.less'
//引入Element的组件库&加载Element的样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 注册Element
Vue.use(ElementUI)
Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

/**
 * 创建vue根实列
 * 把router配置到根里面
 * 通过 render 方法把 App根组件渲染到 #app 入口节点
 */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')