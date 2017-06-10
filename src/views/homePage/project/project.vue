<template>
  <section class='homePage-project'>
    <div class="project-container container">
      <cow-titlebar title='Cow Project' info='老牛的实战项目' theme='dark'></cow-titlebar>
      <div class="project-wrapper">
        <ul class="project-list">
          <li class="project-item" v-for='item of projectList'>
            <div class="item-perviewer">
              <img :src="item.perviewer">
              <div class="perviewer-masker"></div>
            </div>
            <p class="item-info"><span>[{{ item.tag }}]</span> {{ item.name }}</p>
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
        name: '金银猫Pc端'
      }, {
        perviewer: require('./images/jymMb.jpg'),
        tag: 'Vue',
        name: '金银猫Mb端'
      }, {
        perviewer: require('./images/admin.jpg'),
        tag: 'React',
        name: 'Github管理系统'
      }, {
        perviewer: require('./images/outFood.jpg'),
        tag: 'Backbone',
        name: '老牛外卖APP'
      }, {
        perviewer: require('./images/audio.jpg'),
        tag: 'JQuery',
        name: 'QQ音乐简易版'
      }, {
        perviewer: require('./images/lbtt.jpg'),
        tag: 'Boots',
        name: '萝卜特甜仿页'
      }, {
        perviewer: require('./images/bilibili.jpg'),
        tag: 'JQuery',
        name: 'bilibili仿页'
      }, {
        perviewer: require('./images/hotArea.jpg'),
        tag: 'JQuery',
        name: '模拟热点建站'
      }]
    }
  }
}
</script>

<style lang='less' scoped>
.project-container {
  padding-top: 1rem;
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
    padding-top: .7rem;
  }
  .project-item {
    width: 2.95rem;
    padding-top: .22rem;
    cursor: pointer;
  }
  .item-perviewer {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 2.20rem;
    padding: .06rem;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    background-color: #fff;
    transition: all .2s ease-in-out;
    &:hover {
      box-shadow: 2px 10px 30px rgba(0, 0, 0, .5);
      transform: translate3d(0, -4px, 0);
    }
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
  .item-info {
    padding-top: .2rem;
    padding-bottom: .15rem;
    padding-left: .06rem;
    font-size: 13px;
    letter-spacing: 1px;
    color: #666;
    span {
      font-weight: bolder;
      color: #a50909;
    }
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
      border: 1px solid #e7e7e7;
    }
    .homePage-titleBar {
        width: 5rem;
    }
  }
}
</style>
