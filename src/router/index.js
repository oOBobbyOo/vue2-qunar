import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home')
    },
    {
      path: '/city/in',
      name: 'CityIn',
      component: () => import('@/views/city/in')
    },
    {
      path: '/city/out',
      name: 'CityOut',
      component: () => import('@/views/city/out')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/views/detail')
    }
  ],
  // 打开新页面从顶部开始显示
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
