<template>
  <section class='homePage-entrance'>
    <div class="entrance-container container">
      <div class="entrance-logo"></div>
      <cow-titlebar title='Go Entrance' info='老牛博客专属通道' theme='dark'></cow-titlebar>
      <ul class="entrance-list">
        <li class="number" @click="handlerToAdmin">
            <div class="previewer">
              <img src="./images/member.jpg" alt="">
            </div>
            <p><i class="iconfont icon-huiyuan2"></i>会员中心</p>
        </li>
        <li class="game">
            <div class="previewer">
              <img src="./images/game.jpg" alt="">
            </div>
            <p><i class="iconfont icon-huiyuan"></i>游戏中心</p>
        </li>
        <li class="pro">
            <div class="previewer">
              <img src="./images/project.jpg" alt="">
            </div>
            <p><i class="iconfont icon-dianpuxiangqingyedejiage"></i>实战锦集</p>
        </li>
        <li class="design">
            <div class="previewer">
              <img src="./images/design.jpg" alt="">
            </div>
            <p><i class="iconfont icon-bi"></i>我的设计</p>
        </li>
        <!-- <li class="message" v-if="$Constent.isPc">
            <div class="previewer">
              <img src="./images/message.jpg" alt="">
            </div>
            <p><i class="iconfont icon-message"></i>留言中心</p>
        </li> -->
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
        // console.log(this.$parent.$parent.$children)
        // this.showLoginBox('login')
      }
    }
  }
}
</script>

<style lang='less'>
.homePage-entrance {
  background-image: repeating-linear-gradient(-45deg, #fff 0, #fff 10px, #f7f7f7 10px, #f7f7f7 12px);
  padding-bottom: .7rem;
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
    padding-top: .4rem;
    li {
      flex: 1;
      text-align: center;
      &:not(:last-child) {
        margin-right: .15rem;
      }
      p {
        text-align: left;
        text-indent: 3px;
        font-size: 15px;
        letter-spacing: 3px;
        color: #6f6f6f;
        text-shadow: 0 0 1px #fff;
        font-weight: 700;
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
          color: #6452ec;
        }
      }
    }
    .previewer {
      width: 100%;
      padding-bottom: .2rem;
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
  .homePage-entrance {
    background-image: repeating-linear-gradient(-45deg, #fff 0, #fff 10px, #f7f7f7 11px, #f7f7f7 13px);
    padding-bottom: 30px;
  }
  .homePage-titleBar {
    width: 160px;
  }
  .entrance-container .entrance-list {
    position: relative;
    flex-wrap: wrap;
    height: 10rem;
    padding-top: .7rem;
    justify-content: space-between;
    align-content: space-between;
    li {
      max-width: 46%;
      min-width: 46%;
      &:not(:last-child) {
        margin-right: 0;
      }
      p {
        font-size: 12px;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
