<template>
  <div class="header-moreBox" :class='isShow?"active":""'>
    <div class="moreBox-container">
      <div class="moreBox-search">
        <input type="text" autocapitalize="off" class="more-search" name="" v-model='searchVal' placeholder="实战" @enter="linkSearch">
        <div class="search-btn" @click="linkSearch">
          <i class="iconfont icon-fangdajing"></i>Search
        </div>
      </div>
      <div class="search-line"></div>
      <div class="user-logo" :style="logoStyle">
        <p v-if="!isLogin" @click='showLoginBox'>未登录</p>
      </div>
      <ul class='moreBox-menu'>
        <li v-if="isLogin"><router-link to="/admin"><i class="iconfont icon-huiyuan2"></i>会员中心</router-link></li>
        <li v-else @click='showLoginBox'><i class="iconfont icon-dianpuxiangqingyedejiage"></i>注册 / 登录</li>
        <li><router-link to="/message"><i class="iconfont icon-maobi"></i>留言板</router-link></li>
        <li><a href="https://github.com/hoverCow1990" target='_blanket'><i class="iconfont icon-github"></i>github</a></li>
        <li><router-link to="/game"><i class="iconfont icon-huiyuan"></i>游戏大厅</router-link></li>
        <li><a href="mqqwpa://im/chat?chat_type=wpa&uin=547007933&version=1&src_type=web&web_src=oicqzone.com"><i class="iconfont icon-qq3"></i>联系QQ</a></li>
        <li v-if="isLogin" class="loginout" @click="loginOut"><i class="iconfont icon-tuichudenglu"></i>退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: '',
      userData: {},
      logoStyle: {
        background: '#1d1d1d'
      }
    }
  },
  props: {
    isShow: {
      type: Boolean,
      required: true
    },
    isLogin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  created () {
    this.$Events.loginData.$on(this, (isLogin, data) => {
      this.$data.userData = data
    }, 'moreBox')
  },
  watch: {
    isLogin () {
      let { $Constent, userData } = this
      this.$data.logoStyle = {
        'background-image': `url(${$Constent.serverHost}/uploads/user/${userData.id}/logo.${userData.logoType})`
      }
    }
  },
  methods: {
    // 显示登录盒子
    showLoginBox () {
      this.$Events.loginBox.$emit({
        isLoginBoxShow: true,
        type: 'login'
      })
    },
    // 搜索
    linkSearch () {
      this.$emit('linkSearch', this.$data.searchVal)
    },
    // 退出登录
    loginOut () {
      this.$Http({
        url: this.$Constent.api.user.logout,
        method: 'GET'
      }).then(res => {
        res = res.body
        if (res.statue) {
          this.$message({
            type: 'success',
            message: '成功退出'
          })
          this.$Events.loginData.$emit(false, {})
          this.$route.path === '/admin' && this.$router.push('/')
        }
      })
    }
  },
  mounted () {
    window.addEventListener('touchend', e => {
      if (!/more-search|icon-gengduo|moreBox-menu|moreBox-container|user-logo/.test(e.target.className)) {
        this.$emit('hiddenMoreBox')
      }
    })
  }
}
</script>

<style lang='less'>
.header-moreBox {
  input {
    font-family: 'Arial', 'Microsoft Yahei' !important;
  }
  position: fixed;
  width: 100%;
  top: 72px;
  left: 0;
  background-color: rgba(0, 0, 0, .8);
  transform: translate3d(100%, 0, 0);
  transition: transform .5s ease-in-out;
  &.active {
    transform: translate3d(0, 0, 0);
  }
  .moreBox-menu {
    padding-bottom: 10px;
  }
  li {
    display: block;
    width: 80%;
    height: 40px;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    letter-spacing: 2px;
    color: #DADADA;
    &:not(:last-child) {
      border-bottom: 1px solid #464646;
    }
    i {
      padding-right: 7px;
    }
    &.loginout i {
      font-size: 17px;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      color: #DADADA;
    }
  }
  .moreBox-search {
    position: relative;
    width: 80%;
    margin-left: 10%;
    margin-top: .4rem;
  }
  input {
    display: block;
    width: 100%;
    height: 40px;
    border: none;
    font-size: 16px;
    background: transparent;
    font-family: 'Microsoft YaHei';
    letter-spacing: 1px;
    outline: none;
    color: #a7a7a7;
    letter-spacing: 1px;
    text-align: center;
  }
  .user-logo {
    position: absolute;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 2px solid #484848;
    top: 21px;
    left: 7%;
    font-size: 12px;
    text-align: center;
    line-height: 62px;
    color: #5d5d5d;
    background-size: 100% 100%;
  }
  .search-line {
    width: 80%;
    height: 0;
    margin-left: 10%;
    margin-right: 10%;
    border-top: 1px solid #505050;
  }
  .search-btn {
    position: absolute;
    display: block;
    height: 40px;
    right: 0;
    top: 0;
    text-align: right;
    font-size: 17px;
    line-height: 40px;
    color: #eee;
    i {
      font-size: 22px;
      padding-right: 5px;
      margin-left: -0.15rem;
    }
  }
}
@media screen and (max-width: 320px){

}
</style>
