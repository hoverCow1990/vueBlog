<template>
  <div class="articleList-sideMenu">
    <cow-side-nav title='热门排行' :navList='navList1'></cow-side-nav>
    <cow-side-nav title='最新留言' :navList='navList1'></cow-side-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList1: [{
        tag: 'Css3',
        href: '/'
      }, {
        tag: 'Html5',
        href: '/'
      }, {
        tag: 'Canvas && Svg',
        href: '/'
      }, {
        tag: 'Less && Sass',
        href: '/'
      }]
    }
  },
  components: {
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
    display: none;
  }
}
</style>
