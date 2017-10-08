<template>
  <div class='articleList-articleMenu'>
    <cow-article-plane :list='articleList'></cow-article-plane>
    <cow-page-tab :allListLength='allListLength' :singleListLength='singleListLength' @change='handlerRequestList'></cow-page-tab>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allListLength: 0,
      singleListLength: 5,
      typeId: '',
      articleList: []
    }
  },
  created () {
    this.getArticleList()
  },
  watch: {
    $route () {
      this.getArticleList()
    }
  },
  methods: {
    getArticleList () {
      let articleType = this.$route.params.type
      let types = articleType.split('_')
      let findType = types[types.length - 1]
      this.requestCategory().then(categoryList => {
        let category = categoryList.find(item => item.title.startsWith(findType))
        this.$data.typeId = category.id
        this.requestArticle(0)
      })
    },
    // 请求类目表 有过请求就直接返回结果不然则发送请求
    requestCategory () {
      return new Promise((resolve, reject) => {
        let categoryList = this.$Constent.categoryList
        if (categoryList) {
          resolve(categoryList)
        } else {
          this.$Http({
            url: this.$Constent.api.category.getList,
            method: 'GET'
          }).then(res => {
            resolve(res.body)
            this.$Constent.categoryList = res.body
          })
        }
      })
    },
    // 请求类目表
    requestArticle (st = 0) {
      let end = st + this.$data.singleListLength
      this.$Http({
        url: this.$Constent.api.article.getArtcleList,
        method: 'GET',
        params: {
          type: this.$data.typeId,
          st,
          end
        }
      }).then(res => {
        // {
        //   perviewer: 'http://www.web-jackiee.com/uploads/allimg/170228/1-1F22P2211U54-lp.jpg',
        //   mainTag: '展示页面',
        //   title: '联和利华天猫首页3稿',
        //   des: '联和利华天猫首页的3稿,不过最后又应...',
        //   time: '2016-11-15 02:32:00',
        //   id: '123',
        //   watch: 12,
        //   message: 2
        // }
        res = res.body
        this.$data.articleList = res.articleList
        this.$data.allListLength = res.allLength
      })
    },
    // 请求
    handlerRequestList (index) {
      console.log(index)
    }
  }
}
</script>

<style lang='less'>
.articleList-articleMenu {
  width: 8.6rem;
  float: left;
}

@media screen and (max-width: 435px){
  .articleList-articleMenu {
    width: 100%;
  }
}
</style>
