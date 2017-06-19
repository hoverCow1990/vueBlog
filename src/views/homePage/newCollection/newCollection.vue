<template>
  <section class='homePage-newCollection'>
    <div class="newCollection-container container">
      <div class="title-icon"></div>
      <cow-titlebar title='New Artical' info='老牛最新发布的文章' theme='light'></cow-titlebar>
      <ul class='newCollection-list'>
        <li v-for='item of articleList'>
          <div class="perviewer">
            <img :src='item.perviewer'>
          </div>
          <p class='title'>{{ item.title }}</p>
          <p class='time'>2017-01-16 13:01:02</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      articleList: [{
        perviewer: require('./images/1.jpg'),
        title: '阿里云ecs服务器node环境安装'
      }, {
        perviewer: require('./images/2.jpg'),
        title: '[node-04]Express构架web相册'
      }, {
        perviewer: require('./images/3.jpg'),
        title: '[node-03]Jade模板的运用'
      }, {
        perviewer: require('./images/4.jpg'),
        title: '[node-02]解析cookie以及session'
      }, {
        perviewer: require('./images/5.jpg'),
        title: '[node-01]环境以及起步'
      }, {
        perviewer: require('./images/6.jpg'),
        title: 'Backbone构架老牛外卖'
      }, {
        perviewer: require('./images/7.jpg'),
        title: 'React与Redux实现后台管理系统'
      }, {
        perviewer: require('./images/8.jpg'),
        title: '百度地图二次封装'
      }, {
        perviewer: require('./images/9.jpg'),
        title: 'javascript积累小记'
      }, {
        perviewer: require('./images/10.jpg'),
        title: 'es6.Promise作弊小游戏'
      }]
    }
  }
}
</script>

<style lang='less'>
@listWidth: 2.2rem;
@listHeight: @listWidth * @perviewerProps;

.homePage-newCollection {
  background-image: repeating-linear-gradient(-45deg, #111113 0, #111113 10px, #151515 10px, #151515 12px);
  .homePage-titleBar {
    min-width: 180px;
  }
}
.newCollection-container {
  box-sizing: border-box;
  padding-top: .4rem;
  padding-bottom: .6rem;
  border-left: 1px solid #2d2d2d;
  border-right: 1px solid #2d2d2d;
  .title-icon {
    width: .56rem;
    height: .54rem;
    min-width: 36px;
    min-height: 36px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: .1rem;
    background: url(./images/icon.png) no-repeat;
    background-size: 100%;
  }
}
.newCollection-list {
  display: flex;
  width: 100%;
  padding-top: .29rem;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: @listWidth;
    margin-top: .2rem;
    cursor: pointer;
  }
  .perviewer {
    width: 100%;
    height: @listHeight;
    border-radius: 5px;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(circle,white,black);
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
      transition: .3s;
      &:hover{
        opacity: .5;
        transform: scale(1.1);
      }
    }
  }
  p {
    width: 100%;
    font-size: 12px;
    .textOverFlow;
    &.title{
      padding-top: .13rem;
      padding-bottom: .05rem;
      color: #c3c2c2;
    }
    &.time {
      padding-top: .03rem;
      color: #505050;
    }
  }
}
@media screen and (max-width: 435px) {
  .homePage-newCollection {
    .newCollection-container {
      width: 100%;
      border: 0px;
      padding-bottom: 20px;
    }
    .homePage-titleBar.light h2 {
      font-size: 20px;
      border-bottom: 3px solid #ffd86a;
    }
    .newCollection-list li{
      width: @listWidth * 5 / 3;
      .perviewer{
          height: @listHeight * 5 / 3;
      }
      &:last-child {
        display: none;
      }
    }
  }
}
</style>
