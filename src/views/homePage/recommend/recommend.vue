<template>
  <section class='homePage-recommend'>
    <div class="recommend-container container">
      <!-- <div class="recommend-topBar"></div>-->
      <!-- <cow-titlebar title='About Me' info='关于老牛' theme='dark'></cow-titlebar> -->
      <ul class="recommend-menu">
        <li class="menu-category recommend">
          <div class="category-container">
            <div class="title">
              <p><i class="iconfont icon-gengduo"></i>老牛推荐</p>
              <span>recommend</span>
            </div>
            <div class="category-wrapper">
              <div class="category-perviewer" @click="handlerGoLink('/game')">
                <img src="./images/game.jpg">
              </div>
              <ul class="menu-list">
                <li v-for="item of recommendList">
                  <router-link :to="'/article/' + item.id">
                    <p>{{ item.title }}</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu-category connect">
          <div class="category-container">
            <div class="title">
              <p><i class="iconfont icon-gengduo"></i>联系老牛</p>
            </div>
            <div class="category-wrapper">
              <div class="category-perviewer" @click="handlerGoLink('http://www.hovercow.cn/pages/canvas/resume/entrance.html')">
                <img src="./images/resume.jpg">
              </div>
              <ul class="menu-list">
                <li v-for="item of connectList" :class='item.className' @click='item.event'>
                  <i class="iconfont" :class='item.icon'></i>
                  <span>{{ item.title }}</span>
                  <div class="wechat-box" v-if='item.className==="wechat"'>
                    <img src="./images/wechat.jpg">
                  </div>
                </li>
                <li>
                  <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=80be6527b80c5ae4fd416c896cae7ab79ce9a2dfc85ea5927e9240d43e288d05">
                    <i class="iconfont icon-code1"></i>
                    <span>加入Web技术交流群</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu-category friend">
          <div class="category-container">
            <div class="title">
              <p><i class="iconfont icon-gengduo"></i>友情连接</p>
            </div>
            <div class="category-wrapper">
              <div class="category-perviewer" @click="handlerGoLink('http://www.web-jackiee.com/a/xiangguanwebwenzhang/2016/1224/220.html')">
                <img src="./images/shop.jpg">
              </div>
              <ul class="menu-list">
                <li v-for="item of friendList"><a :href='item.link' target="_blanket"><p>{{ item.title }}</p></a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      recommendList: [],
      connectList: [{
        title: '联系老牛的qq',
        icon: 'icon-qq-copy',
        event: () => {
          let url = this.$Constent.isPc ? 'tencent://message/?uin=547007933&Site=http://vps.shuidazhe.com&Menu=yes' : 'mqqwpa://im/chat?chat_type=wpa&uin=547007933&version=1&src_type=web&web_src=oicqzone.com'
          window.location.href = url
        }
      }, {
        title: '微信',
        icon: 'icon-weixin1',
        className: 'wechat',
        event: () => {}
      }, {
        title: '我の留言板',
        icon: 'icon-bi',
        event: () => {}
      }, {
        title: 'Github',
        icon: 'icon-github',
        event: () => {
          window.open('https://github.com/hoverCow1990')
        }
      }],
      friendList: [{
        title: '陌陌的个人博客',
        link: 'https://www.xuanmo.xin'
      }, {
        title: '大年的个人博客',
        link: '/'
      }, {
        title: '胡鹏的个人博客',
        link: '/'
      }, {
        title: '芽儿的个人博客',
        link: '/'
      }, {
        title: '慕课网',
        link: 'https://www.imooc.com'
      }]
    }
  },
  created () {
    this.requestRecommend()
  },
  methods: {
    // 请求推荐列表
    requestRecommend () {
      this.$Http({
        url: this.$Constent.api.article.getSortArticleList,
        method: 'GET',
        params: {
          st: 0,
          end: 6,
          sortType: 'w'
        }
      }).then(res => {
        res = res.body
        if (res.statue) {
          this.$data.recommendList = res.articleList
        }
      })
    },
    // 点击后进入链接
    handlerGoLink (link) {
      if (link.startsWith('http')) {
        window.open(link)
      } else {
        this.$router.push(link)
      }
    }
  }
}
</script>

<style lang='less'>
.homePage-recommend {
  padding-top: .5rem;
}
.recommend-container {
  .hoverFont {
    transition: color .2s;
    &:hover {
      color: #ff4348;
    }
  }
  .recommend-topBar {
    display: block;
    width: 100%;
    height: 1.5rem;
    background-image: url(./images/topBar.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .recommend-menu {
    display: flex;
  }
  .menu-category {
    flex: 1;
    height: 410px;
    background-color: #fff;
    @borderColor: #f5f5f5;
    &:first-child {
      border-right: 1px solid @borderColor;
    }
    &:last-child {
      border-left: 1px solid @borderColor;
    }
    .category-container {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    .title {
      position: relative;
      height: 20px;
      padding-top: .3rem;
      padding-bottom: .15rem;
      border-bottom: 2px solid #eee;
      line-height: 20px;
      p {
        float: left;
        font-size: 14px;
        letter-spacing: 1px;
        color: #222;
      }
      span {
        display: block;
        height: 100%;
        float: right;
        font-size: 12px;
        color: #777;
        transform: translateY(2px);
        cursor: pointer;
        .hoverFont;
      }
      i {
        padding-right: 6px;
        font-size: 15px;
      }
    }
    .category-wrapper {
      padding-top: 25px;
    }
    .category-perviewer {
      width: 100%;
      height: .85rem;
      padding-bottom: .2rem;
      cursor: pointer;
      .hoverFont;
      img {
        display: block;
        width: 100%;
        border-radius: 3px;
        transition: opacity .3s;
        &:hover {
          opacity: .8;
        }
      }
    }
    .menu-list {
      font-size: 14px;
      color: #666;
      li {
        padding-bottom: 11px;
        cursor: pointer;
      }
      a {
        color: #666;
      }
    }
    &.recommend,
    &.friend {
      .menu-list {
        p {
          position: relative;
          text-indent: 18px;
          .hoverFont;
          &:before {
            position: absolute;
            content: '';
            width: 4px;
            height: 4px;
            top: 9px;
            left: 0;
            background: #ff4348;
            border-radius: 50%;
          }
        }
      }
    }
    &.connect {
      .connect-wrapper {
        position: relative;
      }
      .wechat {
        position: relative;
        &:hover {
          .wechat-box {
            opacity: 1;
            transform: translate3d(-45px, 0 ,0);
          }
        }
      }
      .wechat-box {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 138px;
        height: 138px;
        right: 0;
        top: -35px;
        border-radius: 3px;
        border: 1px solid #e7e7e7;
        opacity: 0;
        transition: all .4s ease-in-out;
        &:before {
          position: absolute;
          content: '';
          width: 10px;
          height: 10px;
          left: -6px;
          top: 45px;
          border-bottom: 1px solid #e7e7e7;
          border-left: 1px solid #e7e7e7;
          background-color: #fff;
          transform: rotate(45deg);
        }
      }
      .menu-list i {
        display: inline-block;
        font-size: 23px;
        min-width: 28px;
        vertical-align: middle;
        color: #404040;
      }
      span {
        display: inline-block;
        padding-left: 10px;
        line-height: 25px;
        vertical-align: middle;
        .hoverFont;
      }
    }
  }
}
@media screen and (max-width: 435px) {
  .homePage-recommend {
    padding-top: 20px;
  }
  .recommend-container {
    width: 100%;
    .recommend-menu {
      display: block;
    }
    .recommend-topBar {
      display: none;
    }
    .menu-category .title {
      border-bottom: 1px solid #eee;
    }
    .menu-category  .category-wrapper {
      padding-top: 12px;
    }
    .menu-category.connect .wechat {
      &:hover {
        .wechat-box {
          transform: translate3d(0, 0 ,0);
        }
      }
    }
    .menu-category {
      width: 100%;
      height: auto;
      padding-bottom: 10px;
      &:first-child {
        padding-top: .2rem;
      }
      .category-perviewer {
        height: auto;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
