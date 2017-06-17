import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views/index'

Vue.use(Router)

export default new Router({
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
    }]
})
