<template>
  <section class='homePage-project'>
    <div class="project-container container">
      <div class="project-logo"></div>
      <cow-titlebar title='Cow Project' info='老牛的推荐项目' theme='dark'></cow-titlebar>
      <div class="project-wrapper">
        <ul class="project-list">
          <li class="project-item" v-for='item of projectList' @click="handlerGoLink(item.link)" :class="$Constent.isPc?'pop':''">
            <div class="item-perviewer">
              <img :src="item.perviewer">
            </div>
            <p class="item-hd" :class='item.isOnline?"online":""'>
              <span class="title">{{ item.title }}</span>
              <span class="tag" :class="item.tag">{{item.tag}}</span>
            </p>
            <p class='item-info'>运用技能 : {{ item.info }}</p>
            <!-- <div class="ftBtn">{ {{ item.tag }} }</div> -->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      projectList: [{
        perviewer: require('./images/jymPc.jpg'),
        tag: 'angular',
        title: '金银猫Pc端',
        info: 'Angular, Require, Jquery, Bootstrip, Less, Proxy',
        isOnline: true,
        link: 'https://www.jinyinmao.com.cn'
      }, {
        perviewer: require('./images/jymMb.jpg'),
        tag: 'vue',
        title: '金银猫Mb端',
        info: 'ES6, Vue, Vue-Router, Vux, Yd-Ui, Axios, Less, Webpack, Github',
        isOnline: true,
        link: 'https://m.jinyinmao.com.cn'
      }, {
        perviewer: require('./images/admin.jpg'),
        tag: 'react',
        title: 'Github管理系统',
        info: 'ES6, React, Redux, React-Router, ReactEchart, Antd, Less',
        isOnline: false,
        link: '/article/100'
      }, {
        perviewer: require('./images/outFood.jpg'),
        tag: 'backbone',
        title: '老牛外卖APP',
        info: 'Backbone, Jquery, Juicer, Jquery-weui, Less, Swiper, Gulp, Webpack, 百度地图',
        isOnline: false,
        link: '/article/100'
      }, {
        perviewer: require('./images/audio.jpg'),
        tag: 'jquery',
        title: 'QQ音乐简易版',
        info: 'Jquery, H5-audio, 面向对象',
        isOnline: false,
        link: '/article/11'
      }, {
        perviewer: require('./images/bilibili.jpg'),
        tag: 'jquery',
        title: 'bilibili仿页',
        info: 'Jquery, 面向对象',
        isOnline: false,
        link: '/article/2'
      }, {
        perviewer: require('./images/lbtt.jpg'),
        tag: 'bootstrip',
        title: '萝卜特甜仿页',
        info: 'Bootstrip, Jquery, Less, 面向对象',
        isOnline: false,
        link: '/article/100'
      }, {
        perviewer: require('./images/fishMan.jpg'),
        tag: 'jquery',
        title: '捕鱼达人',
        info: 'Jquery, 面向对象',
        isOnline: false,
        link: '/article/59'
      }]
    }
  },
  methods: {
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
.homePage-project {
  padding-bottom: .25rem;
  /* background-image: url(./images/bg3.png);
  background-repeat: repeat; */
  /* background-size: 100% 100%; */
}
.project-container {
  padding-top: .8rem;
  .project-logo {
    width: 1rem;
    height: 1rem;
    min-width: 70px;
    min-height: 70px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: .1rem;
    background: url(./images/logo5.png) no-repeat;
    background-size: 100%;
    transition: .6s;
  }
  .project-title {
    position: relative;
    width: 186px;
    height: 50px;
    margin: 0 auto 0;
    border-radius: 25px;
    background: #fff;
    box-shadow: 0 0 6px rgba(0,0,0,.5) inset;
    .title-box {
      position: absolute;
      width: 90%;
      height: 80%;
      top: 10%;
      left: 5%;
      border-radius: 22px;
      background-color: #333;
      line-height: 38px;
      text-align: center;
      color: #fff;
      letter-spacing: 2px;
    }
    p {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      font-size: 18px;
    }
    i {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      font-size: 25px;
      margin-right: 5px;
    }
  }
  .project-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: .3rem;
  }
  .project-item {
    box-sizing: border-box;
    width: 2.95rem;
    margin-top: .32rem;
    background-color: #fff;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .1);
    transition: all .2s ease-in-out;
    overflow: hidden;
    &.pop:hover {
      box-shadow: 2px 15px 30px rgba(0, 0, 0, .3);
      transform: translate3d(0, -6px, 0);
    }
  }
  .item-perviewer {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 2.2rem;
    padding: 2px 2px .08rem 2px;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .item-hd {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: .02rem;
    padding-bottom: 10px;
    margin-left: .08rem;
    margin-right: .08rem;
    font-size: 14px;
    /* letter-spacing: 1px; */
    color: #666;
    .textOverFlow;
    /* span {
      font-weight: bolder;
      color: @navy;
    } */
    .title {
      color: #444;
      font-weight: bolder;
      font-size: 13px;
      padding-left: 2px;
    }
    .tag {
      padding: 2px 8px 3px;
      font-family: 'Arial', 'Microsoft YaHei';
      border-radius: 3px;
      font-size: .15rem;
      /* background-color: #244a8c; */
      text-align: center;
      color: #fff;
      &.angular {
        background: #c31330;
      }
      &.vue {
        background: #1c9458;
      }
      &.react {
        background: #890af7;
      }
      &.backbone {
        background: #f9a729;
      }
      &.jquery {
        background: #244a8c;
      }
      &.bootstrip {
        background: #9a3d0f;
      }
    }
    /* &.online:after {
      font-family: 'Comic Sans MS', 'Microsoft YaHei';
    } */
  }
  .item-info {
    height: 50px;
    padding-top: 10px;
    margin-left: .08rem;
    margin-right: .08rem;
    margin-bottom: 10px;
    .border(top);
    font-size: 12px;
    color: #999;
    line-height: 22px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 435px) {
  .container.project-container {
    width: 100%;
  }
  .project-container {
    .project-list {
      padding-top: .5rem;
    }
    .project-item {
      width: 50%;
      border-radius: 0;
      margin-top: 0;
      border: 0;
      text-align: center;
      font-size: 13px;
      box-shadow: none;
      .item-hd {
        margin-left: .2rem;
        margin-right: .2rem;
        .tag {
          font-size: 13px;
        }
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),{
        border-bottom: 1px dashed #f0f0f0;
      }
      &:nth-child(odd) {
        border-right: 1px dashed #f0f0f0;
      }
      &:nth-child(even){
        border-left: 0;
      }
    }
    .item-perviewer {
      height: 4.85rem;
      padding: 6px;
      background-color: #fff;
    }
    .item-title {
      padding-top: 8px;
      padding-bottom: 15px;
      margin-left: 0;
      font-size: 12px;
      text-align: left;
      font-weight: 600;
      span {
        font-size: 10px;
        font-weight: 100;
        color: #222;
      }
    }
    .homePage-titleBar {
      width: 5rem;
    }
    .item-info {
      margin-left: .2rem;
      margin-right: .2rem;
      border-top: 1px solid #f0f0f0;
      text-align: left;
    }
    .item-title {
      &.online:after {
        display: none;
      }
    }
  }
}
</style>
