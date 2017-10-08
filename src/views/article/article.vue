<template>
  <section id='articlePage'>
    <cow-header-filler></cow-header-filler>
    <div class="article-wrapper">
      <div class="article-container container">
        <article-main :articleData='articleData' @postAttr='handlerSideNavAttr'></article-main>
        <article-side-nav :sideNavAttr='sideNavAttr'></article-side-nav>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleMain from './articleMain/articleMain'
import ArticleSideNav from './articleSideNav/articleSideNav'
import mixin from './minix'

export default {
  data () {
    return {
      sideNavAttr: []
    }
  },
  created () {
    this.requestArticle()
  },
  mixins: [mixin],
  components: {
    ArticleMain,
    ArticleSideNav
  },
  methods: {
    // 传递侧导航List数据
    handlerSideNavAttr (sideNavAttr) {
      this.$data.sideNavAttr = sideNavAttr
    },
    requestArticle () {
      let id = this.$route.params.id
      this.$Http({
        url: this.$Constent.api.article.getArtcle,
        method: 'GET',
        params: {
          id
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='less'>
#articlePage {
  .article-container {
    width: 12.32rem;
    padding-bottom: .5rem;
  }
}
.article-container {
  padding-top: .5rem;
  overflow: hidden;
}
@media screen and (max-width: 435px){
  #articlePage {
    .article-container {
      width: 100%;
    }
  }
}
</style>
