<template>
  <transition name="slide-down">
    <div class="message-box" v-show="isShow">
      <i class="iconfont icon-qq"></i>
      <span>{{ message }}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        isShow: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        closed: '',
        onClose: null,
        timer: null
      }
    },
    computed: {},
    watch: {
      closed (newVal) {
        if (newVal) {
          this.isShow = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      // 摧毁组件
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      // 关闭组件并执行回调
      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      // 开始计时
      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    },
    mounted () {
      this.startTimer()
    }
  }
</script>

<style lang='less'>
.message-box {
  position: fixed;
  display: flex;
  height: 28px;
  top: 20px;
  left: 50%;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 13px;
  line-height: 28px;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  letter-spacing: 1px;
  transform: translate3d(-50%, 0, 0);
  box-shadow: 0 0 13px rgba(0, 0, 0, .3);
  z-index: 999;
  &.slide-down-enter-active,
  &.slide-down-leave {
    transform: translate3d(-50%, 0, 0);
    transition: all .3s ease;
  }
  &.slide-down-leave-active,
  &.slide-down-enter {
    transform: translate3d(-50%, -100px, 0);
    transition: all .3s ease;
  }
  i {
    display: block;
    float: left;
    padding-right: 4px;
  }
  span {
    display: block;
    float: left;
    word-break:keep-all;
    white-space:nowrap;
  }
}
@media screen and (max-width: 435px) {

}
</style>
