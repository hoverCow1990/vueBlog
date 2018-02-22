import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Views.HomePageView
    }, {
      path: '/articleList/:type',
      component: Views.ArticleListView
    }, {
      path: '/article(/.+)?/:id',
      component: Views.Article
    }, {
      path: '/game',
      component: Views.Game
    }, {
      path: '/game/:id',
      component: Views.Game
    }, {
      path: '/message',
      component: Views.Message
    }, {
      path: '/admin',
      component: Views.Admin
    }, {
      path: '/others',
      component: Views.Admin
    }],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
