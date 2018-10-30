import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // 定义路由
  routes: [
    {
      // 路径
      path: '/',
      // 组件名
      name: 'HelloWorld',

      component: HelloWorld
    }
  ]
})
