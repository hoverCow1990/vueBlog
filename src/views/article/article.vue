<template>
  <section id='articlePage'>
    <cow-header-filler></cow-header-filler>
    <div class="article-wrapper" :class="articleData.articleColor === 1 ? 'day' : 'night'">
      <div class="article-container container">
        <article-main :articleData='articleData' @postAttr='handlerSideNavAttr' @changeLoveCollectStatue="changeLoveCollectStatue" @changeArticleColorType="changeArticleColorType"></article-main>
        <article-side-nav :sideNavAttr='sideNavAttr'></article-side-nav>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleMain from './articleMain/articleMain'
import ArticleSideNav from './articleSideNav/articleSideNav'

export default {
  name: 'article',
  data () {
    return {
      sideNavAttr: [],
      articleData: {
        title: '',
        perviewerContext: '',
        articleColor: 1,
        context: '<div class="article-loading"><i class="iconfont icon-icon-loading"></i></div>',
        time: '',
        watch: '',
        collect: 0,
        love: 0,
        perviewer: '',
        preArticle: {name: '', link: ''},
        nextArticle: {name: '', link: ''}
      }
    }
  },
  created () {
    this.requestArticle()
    this.$Events.loginData.$on(this, (isLogin, data) => {
      this.$data.isLogin = isLogin
      this.$data.articleData.articleColor = data.articleColor
      this.$data.articleData.isCanCollect = data.isCanCollect ? data.isCanCollect : 0
      this.$data.articleData.isCanlove = data.isCanlove ? data.isCanlove : 0
    }, 'article')
  },
  components: {
    ArticleMain,
    ArticleSideNav
  },
  watch: {
    '$route.query' () {
      console.log(111)
      this.requestArticle()
      this.$data.articleData.context = '<div class="article-loading"><i class="iconfont icon-icon-loading"></i></div>'
    }
  },
  methods: {
    changeArticleColorType (type) {
      this.$data.articleData.articleColor = type
    },
    // 点赞,收藏后的状态切换
    changeLoveCollectStatue (type, changeType, statue) {
      let count = statue === 2 ? 1 : -1
      this.$data.articleData[changeType] = this.$data.articleData[changeType] + count
      this.$data.articleData[type] = statue
    },
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
          id,
          cust: true
        }
      }).then(res => {
        if (res.body.statue) {
          let { id, perviewerContext, context, watch, love, collect, time, articleInner, isFirstWatch, isCanlove, isCanCollect, preArticle, nextArticle, articleColor = 1 } = res.body.article
          this.$data.articleData = Object.assign({}, this.$data.articleData, {
            title: articleInner.title,
            id,
            perviewerContext,
            context,
            watch,
            love: love,
            collect: collect,
            time,
            isCanCollect,
            isCanlove,
            articleColor,
            preArticle: preArticle ? {name: preArticle.articleInner.title, link: `/article/${preArticle.id}`} : null,
            nextArticle: nextArticle ? {name: nextArticle.articleInner.title, link: `/article/${nextArticle.id}`} : null
          })
          if (isFirstWatch) {
            this.$message({
              type: 'success',
              message: '首次观看,您获得15积分'
            })
          }
        } else {
          this.$message({
            type: 'err',
            message: '文章获取失败,请稍后再试'
          })
        }
      })
    }
  }
}
</script>

<style lang='less'>
#articlePage {
  &~#footer {
    margin-top: 0;
  }
  .article-container {
    width: 12.32rem;
    padding-bottom: .5rem;
  }
}
.article-wrapper {
  background-attachment: fixed;
  padding-bottom: .6rem;
  &.day {
    background-image: repeating-linear-gradient(-45deg, #f4f4f4 0, #f4f4f4 10px, #f1efef 10px, #f1efef 12px);
  }
  &.night {
    background-image: repeating-linear-gradient(-45deg, #111113 0, #111113 10px, #1e1e20 10px, #1e1e20 12px);
    border-bottom: 3px solid #696969;
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
