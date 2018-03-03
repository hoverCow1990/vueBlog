<template>
  <div class='articleList-articleMenu'>
    <template v-if="$Constent.isPc">
      <cow-article-plane :list='articleList'></cow-article-plane>
      <cow-page-tab ref="pageTab" :allListLength='allListLength' :singleListLength='singleListLength' @change='index => requestArticle(index - 1)'></cow-page-tab>
    </template>
    <template v-else>
      <cow-infinite-scroller v-on:infinite='loadMoreData' ref='articleList'>
        <cow-article-plane :list='articleList' slot="list"></cow-article-plane>
      </cow-infinite-scroller>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allListLength: 0,
      singleListLength: 5,
      typeId: '',
      articleList: [],
      lastRoute: '',
      requestCount: 0
    }
  },
  created () {
    this.$data.lastRoute = this.$route.params.type
    this.getArticleList()
  },
  watch: {
    $route (route) {
      if (!route.fullPath.startsWith('/articleList')) return
      let type = route.params.type
      if (type === this.$data.lastRoute && type !== 'search') return
      this.$data.lastRoute = type
      if (this.$Constent.isPc) {
        this.$refs.pageTab.nowIndex = 0
      } else {
        this.$data.requestCount = 0
        this.$data.articleList = []
        this.$refs.articleList.reLiveData()
      }
      this.getArticleList()
    }
  },
  methods: {
    // 获取文章列表发起请求前的准备工作
    getArticleList () {
      let articleType = this.$route.params.type
      let types = articleType.split('_')
      let mainType = types[0]
      let findType = types[types.length - 1]
      if (findType === 'search') {
        this.requestSearch(0)
      } else {
        // 匹配对应的id
        this.requestCategory().then(({ categoryList }) => {
          let typeId = null
          let mainTypeId = null
          let parTitle = ''
          let subList = [] // 提供给侧边栏的相关子类
          for (let i = 0; i < categoryList.length; i++) {
            let nowTitle = categoryList[i].title
            if (nowTitle === mainType) mainTypeId = categoryList[i].id
            if (nowTitle === findType) {
              typeId = categoryList[i].id
              parTitle = nowTitle
              subList = categoryList[i].childrens
              break
            } else {
              let childrens = categoryList[i].childrens
              let isBreak = false
              for (let j = 0; j < childrens.length; j++) {
                if (childrens[j].title === findType) {
                  isBreak = true
                  typeId = childrens[j].id
                  parTitle = categoryList[i].title.replace(/\/.+/, '')
                  subList = categoryList[i].childrens
                  break
                }
              }
              if (isBreak) break
            }
          }
          this.$data.typeId = typeId
          this.requestArticle(0)
          this.requestRecommend(mainTypeId, mainType)
          this.$emit('categoryList', {
            parTitle,
            list: subList
          })
        })
      }
    },
    // 请求推荐文章
    requestRecommend (mainType) {
      this.$Http({
        url: this.$Constent.api.article.getSortArticleList,
        method: 'GET',
        params: {
          st: 0,
          end: 7,
          sortType: 'w',
          mainType
        }
      }).then(res => {
        res = res.body
        if (res.statue) {
          this.$emit('recommendList', {
            mainType,
            list: res.articleList
          })
        }
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
      st = st * this.$data.singleListLength
      let end = this.$data.singleListLength
      this.$Http({
        url: this.$Constent.api.article.getArtcleList,
        method: 'GET',
        params: {
          type: this.$data.typeId,
          st,
          end
        }
      }).then(res => {
        res = res.body
        this.$data.allListLength = res.allLength
        if (this.$Constent.isPc) {
          this.$data.articleList = res.articleList
        } else {
          this.$data.articleList = [...this.$data.articleList, ...res.articleList]
          if (st === 0 && res.articleList.length === 0) this.$refs.articleList.setNoData()
          if (res.hasNextPage) {
            this.$refs.articleList.finishLoad()
          } else {
            this.$refs.articleList.loadedDone()
          }
        }
      })
    },
    // 请求搜索文章
    requestSearch (st = 0) {
      st = st * this.$data.singleListLength
      let keyWords = encodeURIComponent(this.$route.query.q)
      let end = st + this.$data.singleListLength
      this.$Http({
        url: this.$Constent.api.article.searchArtcleList,
        params: {
          keyWords,
          st,
          end
        }
      }).then(res => {
        res = res.body
        if (!res.statue) return
        res.articleList.forEach(item => {
          item.description = this.transDom(item.description, keyWords)
          item.title = this.transDom(item.title, keyWords)
        })
        this.$data.articleList = res.articleList
        this.$data.allListLength = res.allLength
        this.$emit('categoryList', {
          parTitle: 'search',
          list: ['页面', '实战', '实用', '特效', '对象', '数组', '游戏']
        })
      })
    },
    // 用于手机端请求更多
    loadMoreData () {
      this.$data.requestCount++
      this.requestArticle(this.$data.requestCount)
    },
    transDom (text, keyWords) {
      return text
        .replace(/(<span class="reg-search">|<\/span>)/g, '')
        .replace(new RegExp(keyWords, 'gi'), `<span class="reg-search">${keyWords}</span>`)
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
