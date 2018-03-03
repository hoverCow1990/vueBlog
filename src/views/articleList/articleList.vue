<template>
  <transition name="bounce">
    <section id='articleListPage'>
      <cow-header-filler></cow-header-filler>
      <div class="container articleList-container">
        <div class="articleList-main">
          <article-menu @categoryList="handlerGetCategoryList" @recommendList="handlerRecommendList"></article-menu>
          <side-menu :subList='subList' :recommendList="recommendList"></side-menu>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import ArticleMenu from './articleMenu/articleMenu'
import SideMenu from './sideMenu/sideMenu'

export default {
  name: 'articleList',
  data () {
    return {
      subList: {
        parTitle: '',
        list: []
      },
      recommendList: {
        mainTitle: '',
        list: []
      }
    }
  },
  components: {
    ArticleMenu,
    SideMenu
  },
  methods: {
    // 文章页请求获取到分类列表
    handlerGetCategoryList (subList) {
      this.$data.subList = subList
    },
    // 文章页推荐列表
    handlerRecommendList (recommendList) {
      this.$data.recommendList = recommendList
    }
  }
}
</script>

<style lang='less'>
.articleList-container {
  padding-top: .5rem;
}
.articleList-main {
  overflow: hidden;
}
@media screen and (max-width: 435px){
  #header-filler {
    height: 68px;
  }
  .articleList-main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
}
</style>
