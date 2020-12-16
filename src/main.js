/**
 * 项目启动入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './style/index.less'

Vue.config.productionTip = false
    /**
     * 创建vue根实列
     * 把router配置到根里面
     * 通过 render 方法把 App根组件渲染到 #app 入口节点
     */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')