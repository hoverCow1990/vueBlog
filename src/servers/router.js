import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Views.homePageView
    }, {
      path: '/articleList/:type',
      component: Views.articleListView
    }
  ]
})
