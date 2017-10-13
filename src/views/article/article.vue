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

export default {
  data () {
    return {
      sideNavAttr: [],
      articleData: {
        perviewerContext: '',
        context: '',
        time: '',
        watch: '',
        love: '',
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/170313/1-1F313043542922.jpg',
        praise: 0,
        preArticle: {
          name: 'es6笔记三[字符串扩展]',
          link: 'http://localhost:8080/#/article/Javascript_React/123'
        },
        nextArticle: {
          name: 'es6笔记四[正则表达]',
          link: 'http://localhost:8080/#/article/Javascript_React/122'
        }
      }
    }
  },
  created () {
    this.requestArticle()
  },
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
        let {perviewerContext, context, watch, love, time} = res.body
        this.$data.articleData.perviewerContext = perviewerContext
        this.$data.articleData.context = context
        this.$data.articleData.watch = watch
        this.$data.articleData.love = love
        this.$data.articleData.time = time
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
