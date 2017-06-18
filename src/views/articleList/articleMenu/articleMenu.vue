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
      allListLength: 60,
      singleListLength: 5,
      articleList: [{
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/170228/1-1F22P2211U54-lp.jpg',
        mainTag: '展示页面',
        title: '联和利华天猫首页3稿',
        des: '联和利华天猫首页的3稿,不过最后又应...',
        time: '2016-11-15 02:32:00',
        id: '123',
        watch: 12,
        message: 2
      }, {
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/160827/1-160RH204443E.jpg',
        mainTag: '展示页面',
        title: '纯hover流推广页面',
        des: '本着做一个品牌宣传页,但后来各种原因不了了之,没啥技术含量,唯一的亮点是没使用js,我chao,我已经把hover玩成啥样了.....',
        time: '2016-11-15 02:32:00',
        id: '5',
        watch: 12,
        message: 2
      }, {
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/160827/1-160RH15244107-lp.jpg',
        mainTag: ' web特效',
        title: '明星翻转盒子',
        des: '就是很无聊,突然想到一个有意思的东西,没什么技术含量,一个纯靠css3写出来的动画',
        time: '2016-11-15 02:32:00',
        id: '221',
        watch: 12,
        message: 2
      }, {
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/160822/1-160R2161522P2-lp.jpg',
        mainTag: ' web特效',
        title: '3D 翻转式轮播体',
        des: '联和利华天猫首页的3稿,不过最后又应...',
        time: '2016-11-15 02:32:00',
        id: '12',
        watch: 12,
        message: 2
      }, {
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/160822/1-160R211402U03.jpg',
        mainTag: '展示页面',
        title: '3D 螺旋体翻转',
        des: '通过jQuery结合css3的transition以及perspective属性营造全3d的立体场景,其中立方体通过取%计算,环形,球形循环计算, 元素周期表通过数组数据来循环列阵,插入H5全新iframe标签进行达到链接照片...',
        time: '2016-11-15 03:32:00',
        id: '3',
        watch: 12,
        message: 2
      }]
    }
  },
  methods: {
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
