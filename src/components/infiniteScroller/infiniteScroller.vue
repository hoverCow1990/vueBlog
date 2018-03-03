<template lang="html">
  <div class="scroll-container">
    <p class='scroll-noList' v-if='noList'>没有数据..</p>
    <slot name='list' v-if='!noList'></slot>
    <div class='loadingBox' v-if='isShowLoading && !noList'>
      <i class="iconfont icon-icon-loading"></i>
      <span>加载更多..</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfiniteScroller',
  data () {
    return {
      noList: false,
      scrollMax: 0,
      scrollDom: null,
      infiniteSwicth: true,
      isShowLoading: true,
      lastScrollTop: 0
    }
  },
  props: {
    init: {
      type: Boolean,
      default: false
    }
  },
  // 注册完成请求以及全部数据加载完毕事件 获取scrollDom的真实dom,并注册事件
  created () {
    if (this.init) {
      this.$emit('infinite')
    }
  },
  // 执行滚动事件
  updated () {
    this.resetScrollMax()
  },
  // 跳出该页面
  beforeDestroy () {
    this.init && this.scrollDom.removeEventListener('scroll', this.scrollEvent, true)
  },
  mounted () {
    this.scrollDom = window.document
    this.scrollBody = window.document.body
    this.scrollDocument = window.document.documentElement
    this.lastScrollTop = window.document.body.scrollTop
    window.addEventListener('scroll', this.scrollEvent, true)
    this.$emit('mounted')
  },
  methods: {
    // 计算底部值
    resetScrollMax () {
      let elHeight = this.$el.offsetHeight
      let elTop = this.$el.offsetTop
      let screenHeight = window.screen.height
      this.scrollMax = elHeight + elTop - screenHeight - 10
    },
    // 滚动时的执行事件
    scrollEvent (ev) {
      let scrollTop = this.scrollBody.scrollTop || this.scrollDocument.scrollTop
      if (scrollTop >= this.scrollMax && this.infiniteSwicth && scrollTop - this.lastScrollTop > 0) {
        this.$emit('infinite')
        this.infiniteSwicth = false
        this.isShowLoading = true
      }
      this.lastScrollTop = scrollTop
    },
    // 结束loading动作
    finishLoad () {
      this.infiniteSwicth = true
      this.isShowLoading = false
    },
    // 所有数据请求完毕
    loadedDone () {
      this.infiniteSwicth = false
      this.isShowLoading = false
      this.scrollDom.removeEventListener('scroll', this.scrollEvent, true)
    },
    // 重新开始获取数据
    reLiveData () {
      this.$data.noList = false
    },
    // 设置为没有数据
    setNoData () {
      this.$data.noList = true
    }
  }
}
</script>
<style lang='less'>
.loadingBox {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 13px;
    letter-spacing: 1px;
    color: #29947a;
    font-weight: bold;
    i {
      font-size: .8rem;
      color: #29947a;
      font-weight: 100;
      animation: loading 1s infinite linear;
    }
    @keyframes loading {
      from {
        transform: rotate(0deg);
      } to {
        transform: rotate(360deg);
      }
    }
    span {
        margin-left: 10px;
        font-size: 13px;
    }
}
.scroll-noList {
    font-size: 14px;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    color: #666;
    text-align: center;
}
</style>
