<template>
  <div id="header">
    <div class="header-topBar">
      <div class="container header-container">
        <div class="topBar-home">
          <router-link to='/'>home</router-link>
        </div>
        <div class="topBar-side">
          <div class="topBar-entrence">
            <a href="#"><i class="iconfont icon-qq"></i></a>
            <a href="#"><i class="iconfont icon-github"></i></a>
          </div>
          <div class="topBar-login">
            <div class="hasLogin" v-if='isLogin'>
              <div class="user-perview">
                <img src="./images/logo.jpg">
              </div>
              <span>欢迎您, [ {{ user.name }} ]</span>
            </div>
            <div class="noLogin" v-else>
              <span>注册</span>
              <span>登录</span>
            </div>
          </div>
        </div>
        <div class="topBar-more">
          <i class="iconfont icon-qq"></i>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <div class="menu-container">
        <div class="menu-lt menu">
          <router-link to='/articleList/html'>html/css</router-link>
          <router-link to='/articleList/js'>Javascript</router-link>
        </div>
        <div class="menu-rt menu">
          <router-link to='/articleList/node'>Node/Java</router-link>
          <router-link to='/articleList/others'>Others</router-link>
        </div>
        <div class="menu-logo"></div>
      </div>
      <div class="search">
        <input class="search-form" placeholder="面向对象" type="text">
        <button><span><i class="iconfont icon-github"></i></span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isLogin: false,
      user: {
        name: '老实的牛'
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
      margin-right: .2rem;
      overflow: hidden;
    }
    img {
      width: 100%;
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
    a {
      color: #eee;
      &:nth-child(1):hover i{
        color: #52c3fb;
      }
      &:nth-child(2):hover i{
        color: #ffdb50;
      }
    }
    i {
      display: block;
      padding-right: .2rem;
      color: #eee;
      font-size: 23px;
      transition: color .3s;
      cursor: pointer;
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
  }
}

@media screen and (max-width: 1025px){
  .header-menu .menu-container {
    width: 7rem;
  }
}
@media screen and (max-width: 435px){
  .header-topBar .topBar-side {
    display: none;
  }
  .header-topBar .topBar-more {
    display: block;
    line-height: 18px;
  }
  .header-menu .menu-container {
    width: 96%;
  }
  .header-menu .menu {
    width: 46%;
  }
  .header-menu a {
    line-height: 32px;
  }
  .search {
    display: none;
  }
}
@media screen and (max-width: 320px){
  .header-menu .menu-logo {
    display: none;
  }
  .header-menu a {
    width: 50%;
  }
}
</style>
