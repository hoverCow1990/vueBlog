<template>
  <div class="articleList-sideMenu">
    <cow-side-nav title='相关子类' className="sub" :navList='navSubList' :activeClass="navActiveClass"></cow-side-nav>
    <cow-side-nav title='老牛推荐' className="mes"  :navList='navRecommendList'></cow-side-nav>
  </div>
</template>
<script>

export default {
  data () {
    return {
      navActiveClass: '',
      navSubList: []
    }
  },
  props: {
    subList: Object,
    recommendList: Object
  },
  watch: {
    // 因为同时要更新navActiveClass 所以写在watch中
    subList () {
      let { list, parTitle } = this.$props.subList
      let params = this.$route.params
      let navSubList = []
      let activeClass = ''

      if (parTitle === 'search') {
        activeClass = this.$route.fullPath.match(/\?q=(.+)$/)[1]
        navSubList = list.map(item => ({
          tag: item,
          href: `/articleList/search?q=${item}`
        }))
      } else {
        activeClass = params.type.split('_')[1]
        navSubList = list.map(item => ({
          tag: item.title,
          href: `/articleList/${parTitle}_${item.title}`
        }))
      }

      this.$data.navSubList = navSubList
      this.$data.navActiveClass = decodeURIComponent(activeClass)
    }
  },
  computed: {
    navRecommendList () {
      let { list, mainType } = this.$props.recommendList
      return list.map(item => ({
        tag: item.title,
        href: `/article/${mainType}/${item.id}`
      }))
    }
  }
}
</script>

<style lang='less'>
.articleList-sideMenu {
  width: 3.2rem;
  height: 760px;
  float: right;
}
@media screen and (max-width: 435px){
  .articleList-sideMenu {
    width: 100%;
    height: auto;
    .sideNav:nth-child(1) {
      min-height: auto;
      margin-bottom: 0;
      &:after {
        display: none;
      }
      .sideNav-container {
        padding: 3px 10px .3rem 10px;
      }
    }
    .sideNav:nth-child(2) {
      display: none;
    }
  }
}
</style>
