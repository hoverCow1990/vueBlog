<template>
  <section id='articleListPage'>
    <cow-header-filler></cow-header-filler>
    <div class="container articleList-container">
      <div class="articleList-main">
        <article-menu></article-menu>
        <side-menu></side-menu>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleMenu from './articleMenu/articleMenu'
import SideMenu from './sideMenu/sideMenu'

export default {
  components: {
    ArticleMenu,
    SideMenu
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
}
</style>
