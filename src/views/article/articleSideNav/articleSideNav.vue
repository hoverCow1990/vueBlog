<template>
  <div class="article-sideNav" v-if='$constent.isPc' :style='sideNavStyle'>
    <div class="sideNav-topLine"></div>
    <div class="sideNav-context">
      <div class="sideNav-box" v-for='(list, listIndex) of sideNavAttr'>
        <div class="box-title" @click='handlerScrollTop(list.top)'>
          {{ list.title }}
        </div>
        <ul class="box-para clearFix">
          <li v-for='(item, itemIndex) of list.childrens' @click='handlerScrollTop(item.top)' :class='nowLightIndex===listIndex+""+itemIndex?"active":""'> {{ item.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      topLevel: [], // 储存每个li标签的 top perIndex selfIndex 循环遍历当前滚动高亮
      scrollNeedTime: 300, // 点击li后花费.3s秒滚动至目标高度
      scrollTimer: null,  // 储存计时器
      nowLightIndex: '',  // 目前高亮的Index 由 perIndex + '' +selfIndex 获取
      sideNavStyle: {}  // 获取sideNav的left值
    }
  },
  props: {
    sideNavAttr: {
      type: Array,
      required: true
    }
  },
  watch: {
    sideNavAttr () {
      this.getTopLevel()
      this.$nextTick(this.initizialEvent)
    }
  },
  mounted () {
    this.setSideNavStyle()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handlerNavLight)
    window.removeEventListener('resize', this.setSideNavStyle)
  },
  methods: {
    // 预存滚动高度的函数由buildHandlerNavLight闭包创建
    handlerNavLight () {},
    // 注册初始事件
    initizialEvent () {
      this.handlerNavLight = this.buildHandlerNavLight()
      window.addEventListener('scroll', this.handlerNavLight)
      window.addEventListener('resize', this.setSideNavStyle)
    },
    // 设置侧导航的left值
    setSideNavStyle () {
      let _parNode = this.$el.parentNode
      let _parWidth = _parNode.offsetWidth
      let _parLeft = _parNode.offsetLeft
      let _selfWidth = this.$el.offsetWidth
      let _left = _parLeft + _parWidth - _selfWidth
      this.$data.sideNavStyle = {
        left: _left + 'px'
      }
    },
    // 获取每个li列表的高度以及父节点以及自己的index
    getTopLevel () {
      let sideNavAttr = this.sideNavAttr
      let levelData = {}
      sideNavAttr.forEach((peritem, perIndex) => {
        peritem.childrens.forEach((item, index) => {
          levelData = {
            perIndex: perIndex,
            selfIndex: index,
            top: item.top - 50,
            bottom: item.bottom
          }
          this.topLevel.push(levelData)
        })
      })
    },
    // 点击后滚动页面高度
    handlerScrollTop (top) {
      let stScrollTop = window.document.body.scrollTop
      let scrollNeedTime = this.$data.scrollNeedTime
      let totalDistance = top - stScrollTop
      let stTime = new Date()
      let crossTime
      let prop
      if (this.$data.scrollTimer) window.clearInterval(this.$data.scrollTimer)
      this.$data.scrollTimer = window.setInterval(() => {
        crossTime = new Date() - stTime
        prop = crossTime / scrollNeedTime
        window.document.body.scrollTop = prop * totalDistance + stScrollTop
        if (prop > 1) {
          window.clearInterval(this.$data.scrollTimer)
          this.$data.scrollTimer = null
        }
      }, 15)
    },
    // 处理滚动后的高亮的闭包
    buildHandlerNavLight () {
      let topLevel = this.$data.topLevel
      let scrollTop
      const firstLevel = topLevel[0].top
      const lastLevel = topLevel[topLevel.length - 1].bottom
      const body = document.body
      topLevel = Array.from(topLevel).reverse()
      return () => {
        scrollTop = body.scrollTop
        if (scrollTop < firstLevel | scrollTop > lastLevel) { // 回到顶部时清除首个高亮
          this.$data.nowLightIndex = '0'
          return
        }
        let lightItem = topLevel.find(item => scrollTop > item.top)
        if (!lightItem) return
        let nowLightIndex = lightItem.perIndex + '' + lightItem.selfIndex
        if (nowLightIndex === this.$data.nowLightIndex) return
        this.$data.nowLightIndex = nowLightIndex
      }
    }
  }
}
</script>

<style lang='less'>
.article-sideNav {
  position: fixed;
  width: 3rem;
  min-height: 250px;
  padding-bottom: 30px;
  margin-right: .1rem;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
  z-index: 888;
  .sideNav-topLine {
    height: 10px;
    background-color: #2c3e50;
  }
}
.sideNav-context {
  padding: 5px 12px 0;
}
.sideNav-box {
  font-size: 15px;
  overflow: hidden;
  .box-title {
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: bolder;
    color: #3c3c3c;
    cursor: pointer;
    .border(bottom);
  }
  .box-para {
    padding-top: 6px;
    font-size: 13px;
    color: #7b7b7b;
    overflow: hidden;
  }
  li {
    box-sizing: border-box;
    width: 50%;
    height: 26px;
    float: left;
    padding-right: 5px;
    line-height: 26px;
    border-radius: 2px;
    text-indent: 2px;
    cursor: pointer;
    .textOverFlow();
    /*transition: all .1s;*/
    &:not(.active):hover {
      color: darken(@primary, 10%);
    }
    &.active {
      background-color: #0079d3;
      color: #eee;
    }
  }
}
@media screen and (max-width: 768px){
  .article-main {
    width: 100%;
  }
  .article-sideNav {
    display: none;
  }
}
</style>
