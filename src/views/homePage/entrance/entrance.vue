<template>
  <section class='homePage-entrance'>
    <div class="entrance-container container">
      <div class="entrance-logo"></div>
      <cow-titlebar title='Go Entrance' info='老牛博客专属通道' theme='dark'></cow-titlebar>
      <ul class="entrance-list" :class="{hover:$Constent.isPc}">
        <li class="number" @click="handlerToAdmin">
          <div class="previewer">
            <div class="light"></div>
            <img src="./images/member.jpg" alt="">
          </div>
          <p><i class="iconfont icon-huiyuan2"></i>会员中心</p>
        </li>
        <li class="message">
          <router-link to='/message'>
            <div class="previewer">
              <div class="light"></div>
              <img src="./images/message.jpg" alt="">
            </div>
            <p><i class="iconfont icon-message"></i>留言中心</p>
          </router-link>
        </li>

        <li class="pro">
          <router-link to='/articleList/search?q=实战'>
            <div class="previewer">
              <div class="light"></div>
              <img src="./images/project.jpg" alt="">
            </div>
            <p><i class="iconfont icon-dianpuxiangqingyedejiage"></i>实战锦集</p>
          </router-link>
        </li>
        <li class="design">
          <router-link to='/articleList/others_设计'>
            <div class="previewer">
              <div class="light"></div>
              <img src="./images/design.jpg" alt="">
            </div>
            <p><i class="iconfont icon-bi"></i>我的设计</p>
          </router-link>
        </li>
        <li class="game">
          <router-link to='/game'>
            <div class="previewer">
              <div class="light"></div>
              <img src="./images/game.jpg" alt="">
            </div>
            <p><i class="iconfont icon-huiyuan"></i>游戏中心</p>
          </router-link>
        </li>
        <li class="story">
          <router-link to='/articleList/others_故事'>
            <div class="previewer">
              <div class="light"></div>
              <img src="./images/story.jpg" alt="">
            </div>
            <p><i class="iconfont icon-github"></i>老牛故事</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    this.$Events.loginData.$on(this, (isLogin) => {
      this.$data.isLogin = isLogin
    }, 'entrance')
  },
  methods: {
    // 跳转至用户
    handlerToAdmin () {
      if (this.$data.isLogin) {
        this.$router.push('/admin')
      } else {
        this.$message({
          type: 'warn',
          message: '登录后可进入用户中心'
        })
        this.$Events.loginBox.$emit({
          isLoginBoxShow: true,
          type: 'login'
        })
      }
    }
  }
}
</script>

<style lang='less'>
.homePage-entrance {
  background: #fff url(./images/bg.png);
  padding-bottom: .8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
}
.entrance-container {
  padding-top: 1rem;
  .entrance-logo {
    width: 1rem;
    height: 1rem;
    min-width: 70px;
    min-height: 70px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: .1rem;
    background: url(./images/logo8.png) no-repeat;
    background-size: 100%;
  }
  .entrance-list {
    display: flex;
    justify-content: space-between;
    padding-top: .6rem;
    li {
      flex: 1;
      text-align: center;
      &:not(:last-child) {
        margin-right: .25rem;
      }
      p {
        text-indent: 3px;
        font-size: 15px;
        letter-spacing: 3px;
        color: #6f6f6f;
        text-shadow: 0 0 1px #fff;
        font-weight: 700;
        text-align: center;
        text-indent: -7px;
        transition: .3s;
        cursor: pointer;
      }
      i {
        font-size: 17px;
        padding-right: 4px;
      }
      &.number {
        i {
          color: #39f;
        }
      }
      &.game {
        i {
          color: #bfb310;
        }
      }
      &.pro {
        i {
          color: #de3630;
        }
      }
      &.design {
        i {
          color: #19b188;
        }
      }
      &.message {
        i {
          color: #9e612b;
        }
      }
      &.story {
        i {
          color: #32a9bd;
        }
      }
    }
    &.hover {
      .previewer {
        .light {
          position: absolute;
          width: 120px;
          height: 110%;
          top: -10px;
          background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, .15) 30%, rgba(255, 255, 255, .12) 70%, rgba(255, 255, 255, 0.01));
          transform: skewX(-40deg) translate3d(-200px, 0, 0);
          filter: blur(3px);
        }
        &:hover {
          transform: translate3d(0, -10px, 0);
          box-shadow: 0 15px 30px rgba(0, 0, 0, .5);
          .light {
            transform: skewX(-40deg) translate3d(270px, 0, 0);
            transition: .75s ease-in-out;
          }
        }
      }
    }
    .previewer {
      position: relative;
      width: 100%;
      margin-bottom: .2rem;
      border-radius: 5px;
      transition: .3s;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 435px) {

  #homePage {
    .homePage-titleBar {
      width: 160px;
    }
    .homePage-entrance {
      padding-bottom: .3rem;
    }
    .entrance-container .entrance-list {
      position: relative;
      flex-wrap: wrap;
      padding-top: .7rem;
      justify-content: space-between;
      align-content: space-between;
      .previewer {
        margin-bottom: .3rem;
      }
      li {
        max-width: 46%;
        min-width: 46%;
        &:not(:last-child) {
          margin-right: 0;
        }
        p {
          text-align: left;
          text-indent: 0;
          font-size: 13px;
          padding-bottom: .4rem;
        }
      }
    }
  }
}
</style>
