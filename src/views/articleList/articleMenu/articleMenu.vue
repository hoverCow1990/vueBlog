<template>
  <div class='articleList-articleMenu'>
    <cow-article-plane :list='articleList'></cow-article-plane>
    <cow-page-tab :allListLength='allListLength' :singleListLength='singleListLength' @change='index => requestArticle(index - 1)'></cow-page-tab>
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
        this.$data.articleList = res.articleList
        this.$data.allListLength = res.allLength
      })
    },
    // 请求搜索文章
    requestSearch (st = 0) {
      st = st * this.$data.singleListLength
      let keyWords = decodeURI(this.$route.query.q)
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
        this.$data.articleList = res.articleList
        this.$data.allListLength = res.allLength
        this.$emit('categoryList', {
          parTitle: 'search',
          list: ['页面', '实战', '实用', '特效', '对象', '数组', '游戏']
        })
      })
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
