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
            <p class="item-title" :class='item.isOnline?"online":""'>&nbsp; [ {{ item.title }} ]</p>
            <p class='item-info'>运用技能 : {{ item.info }}</p>
            <div class="ftBtn">{ {{ item.tag }} }</div>
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
        tag: 'Angular',
        title: '金银猫Pc端',
        info: 'Angular, Require, Jquery, Bootstrip, Less, Proxy',
        isOnline: true,
        link: 'https://www.jinyinmao.com.cn'
      }, {
        perviewer: require('./images/jymMb.jpg'),
        tag: 'Vue',
        title: '金银猫Mb端',
        info: 'ES6, Vue, Vue-Router, Vux, Yd-Ui, Axios, Less, Webpack, Github',
        isOnline: true,
        link: 'https://m.jinyinmao.com.cn'
      }, {
        perviewer: require('./images/admin.jpg'),
        tag: 'React',
        title: 'Github管理系统',
        info: 'ES6, React, Redux, React-Router, ReactEchart, Antd, Less',
        isOnline: false,
        link: '/article/100'
      }, {
        perviewer: require('./images/outFood.jpg'),
        tag: 'Backbone',
        title: '老牛外卖APP',
        info: 'Backbone, Jquery, Juicer, Jquery-weui, Less, Swiper, Gulp, Webpack, 百度地图',
        isOnline: false,
        link: '/article/100'
      }, {
        perviewer: require('./images/audio.jpg'),
        tag: 'JQuery',
        title: 'QQ音乐简易版',
        info: 'Jquery, H5-audio, 面向对象',
        isOnline: false,
        link: '/article/11'
      }, {
        perviewer: require('./images/bilibili.jpg'),
        tag: 'JQuery',
        title: 'bilibili仿页',
        info: 'Jquery, 面向对象',
        isOnline: false,
        link: '/article/2'
      }, {
        perviewer: require('./images/fishMan.jpg'),
        tag: 'JQuery',
        title: '捕鱼达人',
        info: 'Jquery, 面向对象',
        isOnline: false,
        link: '/article/100'
      }, {
        perviewer: require('./images/lbtt.jpg'),
        tag: 'Bootstrip',
        title: '萝卜特甜仿页',
        info: 'Bootstrip, Jquery, Less, 面向对象',
        isOnline: false,
        link: '/article/100'
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
    /* .border(top);
    .border(left);
    .border(right); */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .1);
    transition: all .2s ease-in-out;
    overflow: hidden;
    &.pop:hover {
      box-shadow: 2px 15px 30px rgba(0, 0, 0, .5);
      transform: translate3d(0, -6px, 0);
    }
    .ftBtn {
      width: 45%;
      margin: 0 auto;
      padding-top: .12rem;
      padding-bottom: .12rem;
      margin-bottom: .2rem;
      border-radius: 4px;
      color: #eee;
      background: #074969;
      border-bottom: 3px solid #03364e;
      font-size: .14rem;
      text-align: center;
      letter-spacing: 1px;
      transition: .3s;
      &:hover {
        background: darken(#074969, 8%);
        border-bottom: 3px solid darken(#074969, 8%);
      }
    }
  }
  .item-perviewer {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 2.20rem;
    padding: .08rem;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .item-title {
    position: relative;
    padding-top: .02rem;
    padding-bottom: 10px;
    margin-left: .08rem;
    margin-right: .08rem;
    font-size: 14px;
    letter-spacing: 1px;
    color: #666;
    .textOverFlow;
    span {
      font-weight: bolder;
      color: @navy;
    }
    &.online:after {
      position: absolute;
      width: 58px;
      height: 20px;
      right: 2px;
      top: 1px;
      content: 'online';
      font-family: 'Comic Sans MS', 'Microsoft YaHei';
      border-radius: 3px;
      background-color: #111;
      text-align: center;
      color: #fff;
    }
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
  .project-container {
    width: 100%;
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
      /* &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),{
        border-bottom: 1px dashed #efefef;
      }
      &:nth-child(odd) {
        border-right: 1px dashed #efefef;
      } */
      &:nth-child(even){
        border-left: 0;
      }
      &:nth-child(odd) {
        .ftBtn {
          border-right: 1px dashed #96abb5;
        }
      }
      .ftBtn {
        display: none;
        /* width: 100%;
        box-sizing: border-box;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 0;
        font-size: 12px;
        font-weight: bold;
        border-bottom: 0; */
      }
    }
    .item-perviewer {
      height: 4.5rem;
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
      display: none;
    }
    .item-title {
      &.online:after {
        display: none;
      }
    }
  }
}
</style>
