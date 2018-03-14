<template>
  <div id="app">
    <cow-header></cow-header>
    <keep-alive include="articleList" exclude="article,message,admin">
      <router-view></router-view>
    </keep-alive>
    <cow-login-box v-model='loginType' :isShow='isLoginBoxShow' @hiddenLoginBox='hiddenLoginBox' @loginSuccess='loginSuccess'></cow-login-box>
    <cow-vue-cropper v-show="cropper.isShow" ref="cropper" autoCrop :autoCropWidth="100" :autoCropHeight="100" :img="cropper.img" :outputSize="cropper.outputSize" fixed :outputType="cropper.outputType"></cow-vue-cropper>
    <cow-footer></cow-footer>
    <div class="go-top" :class="{active: isShowTop}"><i class="iconfont icon-icon-test1" @click="handlerToTop()"></i></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLoginBoxShow: false,
      loginType: '',
      loginUrl: null,
      loginSuccessCallBack: null,
      cropper: {
        isShow: false,
        img: '',
        size: '',
        outputSize: 1,
        outputType: 'jpeg'
      },
      isShowTop: false
    }
  },
  created () {
    this.$Events.loginBox.$on(this, data => {
      let { isLoginBoxShow, type, url, fn } = data
      this.$data.isLoginBoxShow = isLoginBoxShow
      this.$data.loginType = type || 'login'
      this.$data.loginUrl = url || null
      this.$data.loginSuccessCallBack = fn || null
    })
  },
  mounted () {
    this.$Constent.cropper = this.$refs.cropper
    // go-top是否出现
    window.addEventListener('scroll', e => {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop > 400) {
        this.$data.isShowTop = true
      } else {
        this.$data.isShowTop = false
      }
    })
  },
  methods: {
    // 登录成功
    loginSuccess () {
      this.$data.loginUrl && this.$router.push(this.$data.loginUrl)
      this.$data.loginSuccessCallBack && this.$data.loginSuccessCallBack()
    },
    // 隐藏登录
    hiddenLoginBox () {
      this.$data.isLoginBoxShow = false
    },
    // 显示登录盒子
    showLoginBox (type = 'login') {
      this.$data.loginType = type
      this.$data.isLoginBoxShow = true
    },
    // 回顶部
    handlerToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang='less'>
#app {
  max-width: 100%;
  overflow-x:hidden;
  .go-top {
    position: fixed;
    width: 50px;
    height: 50px;
    right: .3rem;
    bottom: .5rem;
    border-radius: 50%;
    background: #115d82;
    transition: transform .4s;
    transform: translate3d(120px, 0, 0);
    border: 2px solid #fff;
    z-index: 3;
    cursor: pointer;
    &.active {
      transform: translate3d(0, 0, 0);
    }
    i {
      display: block;
      line-height: 50px;
      text-align: center;
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
