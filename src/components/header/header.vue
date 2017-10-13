<template>
  <div id="header">
    <div class="header-topBar">
      <div class="container header-container">
        <div class="topBar-home">
          <router-link to='/'>home</router-link>
        </div>
        <div class="topBar-side">
          <div class="topBar-entrence">
            <div class="toAdmin" @click="handlerToAdmin">
              <i class="iconfont icon-huiyuan2"></i>
            </div>
            <router-link to="/message">
              <i class="iconfont icon-maobi"></i>
            </router-link>
            <a href="https://github.com/hoverCow1990" target='_blanket'>
              <i class="iconfont icon-github"></i>
            </a>
            <a href="#">
              <i class="iconfont icon-huiyuan"></i>
            </a>
          </div>
          <div class="topBar-login">
            {{$User.userData.isLogin}}
            <div class="hasLogin" v-if='$User.userData.isLogin'>
              <div class="user-perview">
                <img :src="`${$Constent.serverHost}/static/user/${$User.userData.userDetail.keyId}/logo.jpg`">
              </div>
              <span>{{ $User.userData.userDetail.name }}</span>
              <span class="logout" @click="handlerLogout">[ 退出 ]</span>
            </div>
            <div class="noLogin" v-else>
              <span @click='showLoginBox("login")'>登录</span>
              <span @click='showLoginBox("register")'>注册</span>
            </div>
          </div>
        </div>
        <div class="topBar-more" @click='showMoreBox'>
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <div class="menu-container">
        <div class="menu-lt menu">
          <router-link to='/articleList/html'>html/css</router-link>
          <router-link to='/articleList/javascript'>Javascript</router-link>
        </div>
        <div class="menu-rt menu">
          <router-link to='/articleList/node'>Node/Java</router-link>
          <router-link to='/articleList/others'>Others</router-link>
        </div>
        <div class="menu-logo"></div>
      </div>
      <div class="search">
        <input class="search-form" placeholder="面向对象" type="text">
        <button><span><i class="iconfont icon-fangdajing"></i></span></button>
      </div>
    </div>
    <more-box :isShow='isMoreBoxShow' @showLoginBox='showLoginBox' @hiddenMoreBox='hiddenMoreBox' :isLogin="$User.userData.isLogin"></more-box>
    <cow-login-box v-model='loginType' :isShow='isLoginBoxShow' @hiddenLoginBox='hiddenLoginBox' @loginSuccess='(data) => loginSuccess(data)'></cow-login-box>
  </div>
</template>

<script>
import MoreBox from './moreBox/moreBox'

export default {
  name: 'Header',
  data () {
    return {
      loginType: '',
      isLoginBoxShow: false,
      isMoreBoxShow: false
    }
  },
  components: {
    MoreBox
  },
  created () {
    this.checkLogin()
  },
  methods: {
    // 检测是否登录
    checkLogin () {
      this.$Http({
        url: this.$Constent.api.user.userDetail,
        method: 'GET',
        params: {
          id: 0
        }
      }).then(res => {
        res = res.body
        if (res.statue) {
          this.$User.userData = {
            isLogin: true,
            selfId: res.selfId,
            userDetail: res.userDetail
          }
          console.log(this.$User.userData.isLogin)
          console.log(this.$User.get())
        } else {
          this.$User.remove()
        }
      })
    },
    // 显示登录盒子
    showLoginBox (type = 'login') {
      this.$data.loginType = type
      this.$data.isLoginBoxShow = true
    },
    // 隐藏登录
    hiddenLoginBox () {
      this.$data.isLoginBoxShow = false
    },
    // 显示更多的盒子
    showMoreBox () {
      this.$data.isMoreBoxShow = !this.$data.isMoreBoxShow
    },
    // 隐藏更多盒子
    hiddenMoreBox () {
      this.$data.isMoreBoxShow = false
    },
    // 登录成功
    loginSuccess (data) {
      this.$data.userData = data
      this.$data.isLogin = true
    },
    // 退出登录
    handlerLogout () {
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
          this.$User.remove()
          this.$router.push('/')
        }
      })
    },
    // 跳转至用户
    handlerToAdmin () {
      if (this.$data.isLogin) {
        this.$router.push('/admin')
      } else {
        this.$message({
          type: 'warn',
          message: '登录后可进入用户中心'
        })
        this.showLoginBox('login')
      }
    }
  }
}
</script>

<style lang='less'>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
.header-topBar {
  @topBarHeight: .45rem;
  width: 100%;
  height: @topBarHeight;
  min-height: 34px;
  background-color: #111113;
  background-image: -webkit-repeating-linear-gradient(-45deg,#111113 0,#111113 10px,#1e1e20 10px,#1e1e20 12px);
  background-image: repeating-linear-gradient(-45deg,#111113 0,#111113 10px,#1e1e20 10px,#1e1e20 12px);
  .header-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  @homeBtnHeight: 22px;
  .topBar-home {
    width: 40px;
    height: @homeBtnHeight;
    background-color: #EFEFEF;
    text-align: center;
    border-radius: 2px;
    line-height: 22px;
    cursor: pointer;
    a {
      display: block;
      font-size: 12px;
      line-height: @homeBtnHeight - 2;
      color: #c94150;
    }
  }
  .topBar-side {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .topBar-login {
    font-size: .13rem;
    color: #eee;
    padding-right: .2rem;
  }
  .hasLogin {
    display: flex;
    height: 100%;
    align-items: center;
    color: #e4e4e4;
    .user-perview {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      margin-right: .12rem;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .logout {
      padding-left: .05rem;
      cursor: pointer;
      font-size: 12px;
      color: #a2a2a2;
      transition: .1s;
      &:hover {
        color: #eee;
      }
    }
  }
  .noLogin {
    span {
      position: relative;
      padding-left: 8px;
      padding-right: 8px;
      transition: color .2s;
      cursor: pointer;
      &:first-child:after {
        position:absolute;
        content:'|';
        right:-4px;
        top: -1px;
        color: #999;
      }
      &:hover {
        color: #ffdb50;
      }
    }
  }
  .topBar-entrence {
    display: flex;
    height: 100%;
    align-items: center;
    line-height: @topBarHeight;
    .toAdmin:hover i{
      color: #52c3fb;
    }
    a {
      position: relative;
      color: #eee;
      &:nth-child(2):hover i{
        color: #f56565;
      }
      &:nth-child(3):hover i{
        color: #c76bff;
      }
      &:nth-child(4):hover i{
        color: #e2bb23;
      }
    }
    i {
      display: block;
      padding-right: .2rem;
      color: #afafaf;
      font-size: 23px;
      transition: color .3s;
      cursor: pointer;
      &.icon-github {
        font-size: 22px;
      }
      &.icon-maobi {
        transform: translateY(1px);
      }
    }
  }
  .topBar-more {
    display: none;
    height: 100%;
    line-height: @topBarHeight;
    color: #eee;
  }
}
.header-menu {
  position: relative;
  width: 100%;
  height: .6rem;
  min-height: 34px;
  background-color: #fff;
  .menu-container {
    position: relative;
    width: 6.6rem;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .menu-lt {
    float: left;
    text-align: left;
  }
  .menu-rt {
    float: right;
    text-align: right;
  }
  .menu-logo {
    position: absolute;
    width: .93rem;
    height: 1.09rem;
    min-width: 30px;
    min-height: 36px;
    background: url(./images/sign.png);
    left: 50%;
    top: -.27rem;
    margin-left: -0.46rem;
    background-size: cover;
  }
  .menu {
    display: flex;
    width: 2.7rem;
    height: 100%;
    align-items: center;
  }
  a {
    display: block;
    width: 33.33%;
    flex: 1;
    height: 100%;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    letter-spacing: 1px;
    line-height: .6rem;
    font-size: .15rem;
    color: #555;
    transition:color .2s;
    &:hover {
      color: #BBB12D;
    }
  }
  .search {
    position: absolute;
    width: 2rem;
    height: .4rem;
    right: .2rem;
    top: .1rem;
    input {
      width: 1.6rem;
      height: 100%;
      float: left;
      border-radius: 3px 0 0 3px;
      background-color: #F1F1F1;
      border: 0;
      font-family: 'microsoft Yahei';
      text-indent: 10px;
      outline: none;
      letter-spacing: 1px;
    }
    button {
      box-sizing: border-box;
      width: .4rem;
      height: .4rem;
      float: left;
      border-radius: 0 3px 3px 0;
      border: 1px solid #F1F1F1;
      background-color: #fff;
      line-height: .4rem;
      text-align: center;
      cursor: pointer;
      outline: none;
      color: #333;
    }
    i {
      display: block;
      font-size: .22rem;
      color: #333;
      transform: translateY(-1px);
    }
  }
}

@media screen and (max-width: 1025px){
  .header-menu .menu-container {
    width: 7rem;
  }
}
@media screen and (max-width: 435px){
  .header-topBar {
    .topBar-side {
      display: none;
    }
    .topBar-more {
      display: block;
      line-height: 18px;
    }
    .icon-gengduo {
      line-height: 34px;
    }
  }
  .header-menu .menu-logo {
    display: none;
  }
  .header-menu .menu-container {
    width: 96%;
  }
  .header-menu .menu {
    width: 50%;
    text-align: center;
  }
  .header-menu a {
    font-size: 10px;
    line-height: 34px;
  }
  .search {
    display: none;
  }
}
</style>
