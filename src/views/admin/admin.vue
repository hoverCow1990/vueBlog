<template>
  <section id='adminPage'>
    <cow-header-filler></cow-header-filler>
    <div class="container adminPage-container">
      <div class="admin-topBar">
        <div class="topBar-container">
          <div class="user">
            <div class="user-logo">
              <img src="./images/user.jpg">
            </div>
            <div class="user-summary">
              <div class="summary-hd">
                <p class="name">老<span>实的牛</span></p>
                <div class="tag">
                  <span>Lv</span>
                  <span>6</span>
                </div>
              </div>
              <p class="introduce">超级喜欢Javascript, 最近爱上用Vue开发的快感,嘿嘿</p>
            </div>
          </div>
          <div class="sign" :class='userData.hasSigned?"":"active"'>
            <p><i class="iconfont icon-huiyuan2"></i>签到</p>
            <p>{{ new Date() | cow-parseTime(false) }}</p>
          </div>
        </div>
      </div>
      <div class="degree-line">
        <span v-for="(item, index) of new Array(6)" :class="index + 1 === userData.lv?'active':''">Lv{{ index + 1}}</span>
      </div>
      <div class="lv-line">
        <span></span>
      </div>
      <div class="admin-bd">
        <div class="admin-perviewer">
          <div class="admin-title account">
            <p>Account Center</p>
            <span><i class="iconfont icon-bi"></i>修改信息</span>
          </div>
          <ul class="perviewer-list">
            <li>
              <p class='label'>级别</p>
              <p class='val'>{{ userData.alias }}</p>
            </li>
            <li class="score">
              <p class='label'>会员积分</p>
              <p class='val'>{{ userData.score }}</p>
            </li>
            <li>
              <p class='label'>博客主页</p>
              <p class='val'><a :href="userData.blog">{{ userData.blog }}</a></p>
            </li>
            <li>
              <p class='label'>Github</p>
              <p class='val'><a :href="userData.git">{{ userData.git }}</a></p>
            </li>
            <li>
              <p class='label'>qq账号</p>
              <p class='val'>{{ userData.qq }}</p>
            </li>
            <li class="talent">
              <p class='label'>掌握技能</p>
              <p class='val'><span v-for='item of userData.talent'>{{ item }}</span></p>
            </li>
          </ul>
        </div>
        <div class="admin-project">
          <ul class="project-list">
            <li>
              <div class="project-viewport">
                <img src="./images/1.jpg">
                <div class="mask">
                  <p>bilibili仿站</p>
                </div>
              </div>
            </li>
            <li>
              <div class="project-viewport">
                <img src="./images/2.jpg">
                <div class="mask">
                  <p>react项目</p>
                </div>
              </div>
            </li>
            <li>
              <div class="project-viewport">
                <img src="./images/3.jpg">
                <div class="mask">
                  <p>css3组图</p>
                </div>
              </div>
            </li>
            <li>
              <div class="project-upload">
                <p><i class="iconfont icon-xiazai"></i>上传你的作品</p>
              </div>
            </li>
          </ul>
        </div>
        <ul class="admin-menu">
          <li class="menu-category collection">
            <div class="category-container">
              <div class="title">
                <p><i class="iconfont icon-gengduo"></i>收藏文章</p><span>more</span>
              </div>
              <div class="category-wrapper">
                <ul class="menu-list">
                  <li v-for='item of collectionList'>
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu-category love">
            <div class="category-container">
              <div class="title">
                <p><i class="iconfont icon-gengduo"></i>点赞文章</p><span>more</span>
              </div>
              <div class="category-wrapper">
                <ul class="menu-list">
                  <li v-for='item of loveList'>
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu-category game">
            <div class="category-container">
              <div class="title">
                <p><i class="iconfont icon-gengduo"></i>竞技生涯</p><span>more</span>
              </div>
              <div class="category-wrapper">
                <ul class="menu-list">
                  <li v-for="item of gameList">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                    <p class="score"><span>{{ item.rank }}</span>名</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="admin-notice">
          <div class="notice-content">
            <div class="notice-perviewer">
              <div class="perviewer-content">
                <i class="iconfont icon-dengji1"></i>
                <p class="label">{{ showLable }}</p>
                <p class="explain">{{ showExplain }}</p>
              </div>
            </div>
            <div class="notice-degree">
              <ul class="degree-guide">
                <li v-for="list of degreeGuide" v-once>
                  <div class="scroll">+{{ list.add }}</div>
                  <p><span v-for="item of list.list" @mouseenter="showDegreeGuide(item)">{{ item.label }}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="admin-title degree">
          <p><i class="iconfont icon-dengji1"></i>Level</p>
        </div> -->
        <!-- <div class="bd-degree">
          <p class="degree-explain"><span>奖励说明 : </span>{{ showExplain }}</p>
          <ul class="degree-guide">
            <li v-for="list of degreeGuide" v-once>
              <div class="scroll">+{{ list.add }}</div>
              <p><span v-for="item of list.list" @mouseenter="showDegreeGuide(item.info)">{{ item.label }}</span></p>
            </li>
          </ul>
          <div class="degree-cal">
            <p class="rank">会员排行 : <span>01</span></p>
            <p class="all">当前得分 : <span>1283</span></p>
            <p class="next">升级所需 : <span>32</span></p>
          </div> -->
         <!--  <div class="degree-pointer">
            <div class="pointer">
              <i class="inconFont icon-zuobiao1"></i>
            </div>
          </div> -->
          <!-- <div class="degree-line">
            <span>Lv1</span>
            <span class="active">Lv2</span>
            <span>Lv3</span>
            <span>Lv4</span>
            <span>Lv5</span>
            <span>Lv6</span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixin from './mixin'
export default {
  data () {
    return {
      userData: {
        hasSigned: false,
        name: '老实的牛',
        score: '1215',
        lv: 1,
        qq: '547007933',
        git: 'https://github.com/hoverCow1990',
        blog: 'http://www.web-jackiee.com/',
        alias: '老牛的宠幸',
        talent: ['html', 'css', 'javascript', 'vue', 'bootstrip', 'jquery', 'webpack', 'gulp', 'react']
      },
      showExplain: '在会员中心内进行签到任务可随机获得5-10分不等',
      showLable: '每日签到'
    }
  },
  mixins: [mixin],
  methods: {
    // 切换展示的指示文案
    showDegreeGuide (item) {
      this.$data.showExplain = item.info
      this.$data.showLable = item.label
    }
  }
}
</script>

<style lang='less'>
.adminPage-container {
  @darkenRed: #da1f0a;
  margin-top: .5rem;
  padding-bottom: .8rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .admin-topBar {
    position: relative;
    display: flex;
    width: 100%;
    height: 160px;
    align-items: center;
    min-height: 55px;
    background-image: url('./images/blue.jpg');
    .topBar-container {
      padding-left: .2rem;
      padding-right: .2rem;
    }
    .user {
      display: flex;
    }
    .user-logo {
      width: .85rem;
      height: .85rem;
      min-width: 76px;
      min-height: 76px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, .6);
      overflow: hidden;
    }
    .user-summary {
      flex: 1;
      padding-left: .16rem;
    }
    .summary-hd {
      display: flex;
      align-items: center;
      padding-top: .1rem;
      .name {
        font-size: 22px;
        color: #eee;
        line-height: 27px;
        letter-spacing: 2px;
        span {
          padding-right: 7px;
          padding-left: 3px;
          margin-left: 2px;
          border-radius: 0 3px 2px 0;
          border-top: 1px solid rgba(255, 255,255, .2);
          border-right: 1px solid rgba(255, 255,255, .2);
          font-size: 16px;
        }
      }
      .tag {
        display: flex;
        width: 52px;
        height: 18px;
        float: left;
        margin-left: 8px;
        font-size: 13px;
        line-height: 18px;
        border-radius: 2px;
        text-align: center;
        color: #eee;
        overflow: hidden;
        transform: translateY(1px);
        box-shadow: 0 0 2px rgba(0, 0, 0,.25);
        span:first-child {
          width: 32px;
          background-color: #222;
        }
        span:last-child {
          flex: 1;
          background-color: #20a0ff;
        }
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .introduce {
      padding-top: 15px;
      font-size: 12px;
      color: #eee;
    }
  }
  .sign {
    position: absolute;
    width: 98px;
    height: 47px;
    right: .2rem;
    top: .2rem;
    border-radius: 4px;
    overflow: hidden;
    opacity: .5;
    cursor: not-allowed;
    p:first-child {
      height: 28px;
      background-color: rgba(255, 255, 255, .2);
      line-height: 29px;
      font-size: 14px;
      color: #eee;
      letter-spacing: 1px;
      text-indent: 20px;
      transition: .2s;
    }
    p:last-child {
      height: 19px;
      background-color: rgba(255, 255, 255, .1);
      line-height: 18px;
      font-size: 12px;
      text-indent: 16px;
      color: #eee;
    }
    &.active {
      opacity: 1;
      cursor: pointer;
      &:hover {
        p:first-child {
          background-color: darken(@primary, 10%);
        }
      }
    }
    i {
      padding-right: 6px;
    }
  }
  .degree-line {
    display: flex;
    width: 100%;
    height: 16px;
    overflow: hidden;
    span {
      height: 100%;
      font-size: 12px;
      color: #fff;
      line-height: 16px;
      text-align: center;
      &:nth-child(1) {
        flex: 2;
        background-color: #dedede;
      }
      &:nth-child(2) {
        flex: 3;
        background-color: #d0cece;
      }
      &:nth-child(3) {
        flex: 4;
        background-color: #bdbdbd;
      }
      &:nth-child(4) {
        flex: 6;
        background-color: #9c9c9c;
      }
      &:nth-child(5) {
        flex: 8;
        background-color: #828282;
      }
      &:nth-child(6) {
        flex: 10;
        background-color: #6b6b6b;
      }
      &.active {
        background-color: #871dfb;
      }
    }
  }
  .lv-line {
    position: relative;
    height: 4px;
    background-color: #e0e0e0;
    font-size: 4px;
    span {
      position: absolute;
      width: 67%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: @darkenRed;
      transition: .2s;
    }
  }
  .admin-bd {
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .admin-title {
    display: flex;
    padding-top: .2rem;
    padding-bottom: 6px;
    justify-content: space-between;
    overflow: hidden;
    &.account {
      border-bottom: 1px dashed #e6e6e6;
    }
    &.project {
      align-items: center;
    }
    p {
      font-size: .26rem;
      font-family: Arial;
      color: #333;
      font-weight: 600;
      text-shadow: 0 0 1px rgba(0, 0, 0, .1);
    }
    span {
      padding-top: .12rem;
      font-size: 13px;
      color: #666;
      transition: color .2s;
      cursor: pointer;
      &:hover {
        color: darken(@primary, 10%);
      }
      i {
        padding-right: 3px;
      }
    }
  }
  .perviewer-list {
    padding-top: .12rem;
    border-bottom: 1px dashed #e6e6e6;
    li {
      display: flex;
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 13px;
    }
    .score {
      .val {
        font-weight: 600;
        color: #222;
      }
    }
    .label {
      position: relative;
      width: 80px;
      float: left;
      color: #888;
      &:after {
        position: absolute;
        content: ':';
        right: 16px;
      }
    }
    .val {
      flex: 1;
      color: #888;
    }
    a {
      color: @primary;
    }
    .talent {
      .val {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        transform: translateY(-10px);
      }
      span {
        margin-top: 10px;
        padding: 2px 8px 3px;
        margin-right: 10px;
        border-radius: 3px;
        background-color: @navy;
        color: #eee;
      }
    }
  }
  .project-list {
    display: flex;
    padding-top: .2rem;
    padding-bottom: .2rem;
    li {
      padding: 6px;
      margin-right: .2rem;
      border-radius: 2px;
      border: 1px solid #e7e7e7;
      cursor: pointer;
    }
    .project-viewport {
      position: relative;
      width: 2.55rem;
      height: 2.07rem;
      overflow: hidden;
      &:hover {
        .mask {
          opacity: 1;
        }
      }
    }
    .project-upload {
      display: flex;
      position: relative;
      width: 2.55rem;
      height: 2.07rem;
      align-items: center;
      font-size: 14px;
      color: #888;
      text-align: center;
      border: 1px dashed #e6e6e6;
      p {
        width: 100%;
      }
      i {
        padding-right: 2px;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .mask {
      position: absolute;
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: .2rem;
      top: 0;
      left: 0;
      align-items: center;
      z-index: 2;
      background-color: rgba(0, 0, 0, .6);
      color: #eee;
      opacity: 0;
      transition: opacity .3s;
      p {
        width: 100%;
        font-size: 18px;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }
  .admin-menu {
    display: flex;
    border-radius: 3px;
    overflow: hidden;
  }
  .menu-category {
    box-sizing: border-box;
    flex: 1;
    height: 320px;
    .border();
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
      padding-top: .15rem;
      padding-bottom: .15rem;
      border-bottom: 2px solid #eee;
      line-height: 20px;
      p {
        float: left;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 600;
        color: #333;
      }
      i{
        padding-right: 4px;
        font-size: 15px;
        font-weight: 100;
        color: #333;
      }
      span {
        display: block;
        height: 100%;
        float: right;
        font-size: 12px;
        color: #777;
        transform: translateY(2px);
        cursor: pointer;
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
      font-size: 13px;
      color: #777;
      li {
        padding-bottom: 12px;
        overflow: hidden;
        cursor: pointer;
      }
      a {
        display: inline-block;
        color: #777;
        transition: color .1s;
        &:hover {
          text-decoration: underline;
        }
      }
      .score {
        float: right;
        font-size: 14px;
        span {
          padding-right: 5px;
          font-weight: 600;
          color: darken(#ffd470, 30%);
          font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
        }
      }
    }
    &.collection {
      .title {
        border-color: #ff3c3c;
      }
      .menu-list {
        a:hover {
          color: #ff3c3c;
        }
      }
    }
    &.love {
      .title {
        border-color: #0087ec;
      }
      .menu-list {
        a:hover {
          color: #0087ec;
        }
      }
    }
    &.game {
      .title {
        border-color: #ffd470;
      }
      .menu-list {
        a:hover {
          color: #ffd470;
        }
      }
    }
  }
  .admin-notice {
    margin-top: .3rem;
    padding: .1rem .16rem;
    border-radius: 3px;
    .border();
  }
  .notice-content {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .notice-perviewer {
    display: flex;
    width: 3.5rem;
    height: 2.4rem;
    margin-right: .4rem;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: url(images/bg2.jpg);
    .perviewer-content {
      font-size: 0;
      text-align: center;
      letter-spacing: 1px;
    }
    i {
      display: inline-block;
      width: 100%;
      vertical-align: top;
      font-size: .6rem;
      color: #fff;
    }
    .label {
      width: 100%;
      padding-top: 6px;
      font-size: .26rem;
      color: #eee;
    }
    .explain {
      width: 100%;
      padding-top: 8px;
      font-size: 13px;
      color: #fff;
    }
  }
  .notice-degree {
    .degree-guide {
      font-size: 13px;
      @size: 26px;
      li {
        height: @size;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .scroll {
        box-sizing: border-box;
        width: 35px;
        height: @size;
        float: left;
        border-radius: 3px;
        background-color: @navy;
        color: #eee;
        text-align: center;
        line-height: @size;
      }
      p {
        float: left;
        padding-left: 12px;
        line-height: @size;
        color: #777;
      }
      span {
        padding-right: 12px;
        .border(right);
        cursor: default;
        &:hover {
          color: @primary;
        }
        &:not(:first-child) {
          padding-left: 12px;
        }
      }
    }
    .degree-cal {
      padding-top: 14px;
      font-size: 14px;
      overflow: hidden;
      color: #666;
      p {
        padding-top: 6px;
        float: left;
        padding-right: .2rem;
        &.rank span{
          color: @darkenRed;
        }
        &.all span{
          color: #888; /*darken(#ffbf2a, 5%);*/
        }
        &.next {
          span {
            color: #888;
          }
        }
      }
      span {
        font-size: 22px;
/*        font-weight: 600;*/
      }
    }
/*    .degree-pointer {
      position: relative;
      padding-top: .3rem;
      height: 80px;
      .pointer {
        position: absolute;
        width: 30px;
        height: 32px;
        left: 10%;
        &:after {
          position: absolute;
          content: '';
          width: 0;
          height: 60px;
          top: 35px;
          left: 14px;
          border-left: 1px dashed #c7c7c7;
        }
      }
      i {
        display: inline-block;
        font-size: 30px;
        vertical-align: top;
        color: #ffbf2a;
      }
    }*/
  }
}
@media screen and (max-width: 435px){
  .adminPage-container {
    width: 100%;
    .admin-topBar{
      .topBar-container {
        padding-left: 10px;
        padding-right: 10px;
      }
      .user-summary {
        padding-left: 10px;
      }
      .introduce {
        padding-top: 10px;
      }
    }
    .sign.active {
      right: 0;
      top:0;
      border-radius: 0 0 0 4px;
    }
    .admin-bd {
      padding-left: 10px;
      padding-right: 10px;
    }
    .admin-title {
      padding-top: 12px;
      padding-bottom: 10px;
      p {
        font-size: 20px;
      }
      span {
        padding-top: .35rem;
      }
    }
    .project-list {
      overflow-x: scroll;
      .project-viewport,
      .project-upload{
        width: 5.1rem;
        height: 4.14rem;
      }
    }
    .admin-menu {
      width: 100%;
      flex-wrap: wrap;
      .menu-category {
        height: auto;
        min-width: 100%;
        margin-top: 10px;
        .category-container {
          width: 94%;
        }
        .category-wrapper {
          padding-top: 16px;
        }
      }
    }
    .notice-perviewer {
      height: 5rem;
      margin-right: 0;
      margin-bottom: 10px;
      padding-left: 6px;
      padding-right: 6px;
      i {
        font-size: 30px;
      }
      .label {
        font-size: 20px;
      }
    }
    .notice-content {
      flex-wrap: wrap;
    }
    .notice-perviewer {
      width: 100%;
    }
  }
}
</style>
