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
        tag: '[node-04]Express构架web相册',
        href: '/'
      }, {
        tag: '阿里云ecs服务器node环境安装',
        href: '/'
      }, {
        tag: '[node-03]Jade模板的运用',
        href: '/'
      }, {
        tag: 'Backbone构架老牛外卖',
        href: '/'
      }, {
        tag: '百度地图二次封装',
        href: '/'
      }, {
        tag: 'Ajax以及跨域访问',
        href: '/'
      }, {
        tag: 'WebPack进阶[开发与生产模式]',
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
