<template>
  <section class='homePage-project'>
    <div class="project-container container">
      <cow-titlebar title='Cow Project' info='老牛的实战项目' theme='dark'></cow-titlebar>
            <!-- <div class="project-logo"></div> -->
      <div class="project-wrapper">
        <ul class="project-list">
          <li class="project-item" v-for='item of projectList'>
            <div class="item-perviewer">
              <img :src="item.perviewer">
              <div class="perviewer-masker"></div>
            </div>
            <p class="item-title" :class='item.isOnline?"online":""'><span>[{{ item.tag }}]</span> {{ item.title }}</p>
            <p class='item-info'>运用技能 : {{ item.info }}</p>
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
        isOnline: true
      }, {
        perviewer: require('./images/jymMb.jpg'),
        tag: 'Vue',
        title: '金银猫Mb端',
        info: 'ES6, Vue, Vue-Router, Vux, Yd-Ui, Axios, Less, Webpack, Github',
        isOnline: true
      }, {
        perviewer: require('./images/admin.jpg'),
        tag: 'React',
        title: 'Github管理系统',
        info: 'ES6, React, Redux, React-Router, ReactEchart, Antd, Less',
        isOnline: false
      }, {
        perviewer: require('./images/outFood.jpg'),
        tag: 'Backbone',
        title: '老牛外卖APP',
        info: 'Backbone, Jquery, Juicer, Jquery-weui, Less, Swiper, Gulp, Webpack, 百度地图',
        isOnline: false
      }, {
        perviewer: require('./images/audio.jpg'),
        tag: 'JQuery',
        title: 'QQ音乐简易版',
        info: 'Jquery, H5-audio, 面向对象',
        isOnline: false
      }, {
        perviewer: require('./images/lbtt.jpg'),
        tag: 'Boots',
        title: '萝卜特甜仿页',
        info: 'Bootstrip, Jquery, Less, 面向对象',
        isOnline: false
      }, {
        perviewer: require('./images/bilibili.jpg'),
        tag: 'JQuery',
        title: 'bilibili仿页',
        info: 'Jquery, 面向对象',
        isOnline: false
      }, {
        perviewer: require('./images/hotArea.jpg'),
        tag: 'JQuery',
        title: '模拟热点建站',
        info: 'Jquery, 面向对象',
        isOnline: false
      }]
    }
  }
}
</script>

<style lang='less' scoped>

.project-container {
  padding-top: 1rem;
  .project-logo {
    width: 72px;
    height: 72px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: .2rem;
    background: url(./images/logo.png) no-repeat;
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
    padding-top: .6rem;
  }
  .project-item {
    width: 2.95rem;
    margin-top: .32rem;
    background-color: #fff;
    cursor: pointer;
    border-radius: 3px;
    .border();
    transition: all .2s ease-in-out;
    &:hover {
      box-shadow: 2px 15px 30px rgba(0, 0, 0, .5);
      transform: translate3d(0, -6px, 0);
    }
  }
  .item-perviewer {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 2.20rem;
    padding: .06rem;
    overflow: hidden;
    .perviewer-masker {
      position: absolute;
      box-sizing: border-box;
      width: 2.81rem;
      height: 2.08rem;
      top: .06rem;
      left: .06rem;
      padding: .06rem;
      background-color: #111;
      opacity: 0;
      transition: all .4s ease-in-out;
    }
  }
  .item-title {
    position: relative;
    padding-top: .02rem;
    padding-bottom: 10px;
    margin-left: .08rem;
    margin-right: .08rem;
    font-size: 13px;
    letter-spacing: 1px;
    color: #666;
    .textOverFlow;
    span {
      font-weight: bolder;
      color: #a50909;
    }
    &.online:after {
      position: absolute;
      width: 58px;
      height: 20px;
      right: 2px;
      top: 0;
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
    width: 96%;
    .project-item {
      width: 6.05rem;
    }
    .item-perviewer {
      height: 4.5rem;
      background-color: #fff;
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
