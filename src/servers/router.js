import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views/index'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Views.HomePageView
    }, {
      path: '/articleList/:type',
      component: Views.ArticleListView
    }, {
      path: '/article/:type/:id',
      component: Views.Article
    }, {
      path: '/article/:id',
      component: Views.Article
    }, {
      path: '/message',
      component: Views.Message
    }],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
