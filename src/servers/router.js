import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Views.homePageView
    }
  ]
})
