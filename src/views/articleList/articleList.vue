<template>
  <transition name="bounce">
    <section id='articleListPage'>
      <cow-header-filler></cow-header-filler>
      <div class="container articleList-container">
        <div class="article-sort">
          <ul class="sort-list clearfix">
            <li :class="sortType === 't' ? 'active' : ''" @click="changeSortType('t')"><i class="iconfont icon-shijian2"></i>按时间</li>
            <li :class="sortType === 'w' ? 'active' : ''" @click="changeSortType('w')"><i class="iconfont icon-dianpuxiangqingyedejiage"></i>按热度</li>
            <li :class="sortType === 's' ? 'active' : ''" @click="changeSortType('s')"><i class="iconfont icon-yanjing"></i>按观看数</li>
          </ul>
          <div class="sort-power" v-if="$Constent.isPc">
            <p>Font power by:</p>
            <img src="./images/vue.png" alt="">
            <img src="./images/es6.png" alt="">
            <img src="./images/webpack.png" alt="">
            <p>Back power by:</p>
            <img src="./images/react.png" alt="">
            <img src="./images/koa.png" alt="">
            <img src="./images/mongo.png" alt="">
          </div>
        </div>
        <div class="articleList-main">
          <article-menu :sortType='sortType' @categoryList="handlerGetCategoryList" @recommendList="handlerRecommendList"></article-menu>
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
      sortType: 't',
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
    // 切换排序顺序
    changeSortType (type) {
      this.$data.sortType = type
    },
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
#articleListPage {
  .articleList-container {
    padding-top: .5rem;
  }
  .articleList-main {
    overflow: hidden;
  }
  .article-sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #E0E0E0;
    .sort-list {
      li {
        padding: 4px 8px;
        margin-left: 10px;
        float: left;
        border-radius: 3px;
        color: #222;
        font-size: .14rem;
        .border();
        cursor: pointer;
        i {
          padding-right: 3px;
          color: #444;
        }
        &.active {
          background: #c33838;

          border: 1px solid darken(#c33838, 5%);
          color: #fff;
          i {
            color: #fff;
          }
        }
      }
    }
    .sort-power {
      display: flex;
      align-items: center;
      padding-left: 30px;
      padding-right: 10px;
      font-size: 12px;
      color: #999;
      p {
        padding-left: 12px;
      }
      img {
        padding-left: 12px;
      }
    }
  }
}

@media screen and (max-width: 435px){
  #header-filler {
    height: 68px;
  }
  #articleListPage .article-sort {
    .sort-power {
      display: none;
    }
    .sort-list li {
      padding-bottom: 5px;
      font-size: 12px;
    }
  }
  .articleList-main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
}
</style>
