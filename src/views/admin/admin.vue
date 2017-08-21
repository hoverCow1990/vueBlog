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
                  <span>{{ userData.lv }}</span>
                </div>
              </div>
              <p class="introduce">{{ userData.introduce }}</p>
            </div>
          </div>
          <div class="sign" :class='userData.hasSigned?"":"active"'>
            <p><i class="iconfont icon-huiyuan2"></i>签到</p>
            <p>{{ new Date() | cow-parseTime(false) }}</p>
          </div>
        </div>
      </div>
      <div class="admin-degreeLine">
        <div class="degree-line">
          <span v-for="(item, index) of new Array(6)" :class="index + 1 === userData.lv?'active':''">Lv{{ index + 1}}</span>
        </div>
        <div class="lv-line">
          <span></span>
        </div>
      </div>
      <div class="admin-bd">
        <div class="admin-breif">
          <div class="breif-title account">
            <p>Account Center</p>
            <span @click="showInfoBoxShow"><i class="iconfont icon-bi"></i>修改信息</span>
          </div>
          <ul class="breif-list">
            <li class="text">
              <p class='label'>昵称</p>
              <p class='val'>{{ userData.name }}</p>
            </li>
            <li class="text">
              <p class='label'>级别</p>
              <p class='val'>{{ userData.lv | cow-transAlias }}</p>
            </li>
            <li class="text">
              <p class='label'>积分</p>
              <p class='val'>{{ userData.score }}</p>
            </li>
            <li class="text">
              <p class='label'>qq账号</p>
              <p class='val'>{{ userData.qq }}</p>
            </li>
            <li>
              <p class='label'>博客主页</p>
              <p class='val'><a :href="userData.blog">{{ userData.blog }}</a></p>
            </li>
            <li>
              <p class='label'>Github</p>
              <p class='val'><a :href="userData.git">{{ userData.git }}</a></p>
            </li>
            <li class="talent">
              <p class='label'>掌握技能</p>
              <p class='val'>
                <span v-for='item of userData.talent'>{{ item }}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="admin-project">
          <div class="admin-title">
            <p><i class="iconfont icon-gengduo"></i>展示作品</p><span>more</span>
          </div>
          <ul class="project-list" :class="'flex-' + projectList.length">
            <li v-for="item of projectList">
              <div class="project-viewport">
                <img :src="item.src">
                <div class="mask">
                  <p>{{ item.name }}</p>
                </div>
              </div>
            </li>
            <li v-if="projectList.length < 4 && $Constent.isPc">
              <div class="project-upload" @click="showUploadBox">
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
        <div class="admin-content scoreline">
          <div class="content-container">
            <div class="container-viewport">
              <div class="viewport-content">
                <i class="iconfont icon-shandian-copy"></i>
                <p class="label">会员等级</p>
                <p class="explain">这里可以查看老牛会员的等级图表</p>
              </div>
            </div>
            <div class="container-article">
              <div class="prop-list clearfix">
                <div class="article-prop">
                  <div class="prop-text">
                    <p class="red">Top3</p>
                    <p>击败37%用户</p>
                  </div>
                  <cow-prop-circle :percent='Number(63)' color='#ff3c3c' :stroke="strokeWidth"></cow-prop-circle>
                </div>
                <div class="article-prop">
                  <div class="prop-text">
                    <p class="blue">16%</p>
                    <p>总积分 : 1232</p>
                  </div>
                  <cow-prop-circle :percent='Number(16)' color='#0087ec' :stroke="strokeWidth"></cow-prop-circle>
                </div>
                <div class="article-prop">
                  <div class="prop-text">
                    <p class="yellow">42%</p>
                    <p>升级所需 : 282</p>
                  </div>
                  <cow-prop-circle :percent='Number(42)' color='#ffd470' :stroke="strokeWidth"></cow-prop-circle>
                </div>
              </div>
              <p class='prop-info'>前段时间的一个项目做到这个玩意，研究了一下绘制圆环的方法。最终使用HTML5的画布标签来做。arc()是HTML5 Canvas的一个API函数，作用是“创建弧/曲线（用于创建圆形或部分圆）”。本文先讲解如何绘制圆形以及一些应用</p>
            </div>
          </div>
        </div>
        <div class="admin-content guide">
          <div class="content-container">
            <div class="container-viewport">
              <div class="viewport-content">
                <i class="iconfont icon-dengji1"></i>
                <p class="label">{{ showLable }}</p>
                <p class="explain">{{ showExplain }}</p>
              </div>
            </div>
            <div class="container-article">
              <ul class="guide-guidPort">
                <li v-for="list of degreeGuide" v-once>
                  <div class="scroll">+{{ list.add }}</div>
                  <p><span v-for="item of list.list" @mouseenter="showDegreeGuide(item)">{{ item.label }}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="admin-content others">
          <div class="content-container">
            <div class="container-viewport">
              <div class="viewport-content">
                <i class="iconfont icon-houtaiyuyanguanlinew"></i>
                <p class="label">其他用户</p>
                <p class="explain">这里是老牛会员的其他用户</p>
              </div>
            </div>
            <div class="container-article">
              <ul class="othersList clearfix">
                <li v-for="(item, index) of othersList">
                  <div class="rank">{{ index + 1 | cow-buildZero(2) }}</div>
                  <div class="feature">
                    <img src="./images/user.jpg">
                  </div>
                  <div class="info">
                    <span class="name">{{ item.name }}</span>
                    <span class="score">{{ item.score }}</span>
                  </div>
                </li>
              </ul>
              <cow-page-tab :allListLength='18' :singleListLength='8' @change='handlerRequestOthers'></cow-page-tab>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cow-user-infoBox :isShow='isInfoBoxShow' @hiddenInfoBoxShow='hiddenInfoBoxShow' @update="data => updateUserData(data)" ref="infoBox"></cow-user-infoBox>
    <cow-upload-box :isShow='isUploadShow' @hiddenUploadBox='hiddenUploadBox'></cow-upload-box>
  </section>
</template>

<script>
import mixin from './mixin'
export default {
  data () {
    return {
      userData: {
        hasSigned: false,
        name: '--',
        score: '--',
        lv: '-',
        qq: '--',
        git: '--',
        blog: '--',
        introduce: '--',
        talent: []
      },
      showExplain: '在会员中心内进行签到任务可随机获得5-10分不等',
      showLable: '每日签到',
      isUploadShow: false,
      isInfoBoxShow: false,
      strokeWidth: 0
    }
  },
  mixins: [mixin],
  created () {
    this.requestUserData()
    this.setStrokeWidth()
  },
  methods: {
    // 请求用户数据
    requestUserData () {
      this.$Http({
        url: this.$Constent.api.user.userDetail,
        method: 'GET'
      }).then(res => {
        res = res.body
        if (res.statue) {
          this.$data.userData = res.userDetail
          this.$data.userData.talent = res.userDetail.talent ? res.userDetail.talent.split(',') : []
          this.testDateComplete()
        } else {
          this.$message({
            type: 'err',
            message: res.msg
          })
        }
      })
    },
    // 请求好友列表
    handlerRequestOthers () {
      console.log(1)
    },
    // 计算canvas环形宽度
    setStrokeWidth () {
      // 6 ~ 11线宽
      const screenWidth = window.document.documentElement.offsetWidth
      this.$data.strokeWidth = Math.min(12, Math.ceil(screenWidth / 2200 * 6) + 4)
    },
    // 切换展示的指示文案
    showDegreeGuide (item) {
      this.$data.showExplain = item.info
      this.$data.showLable = item.label
    },
    // 显示上传作品的盒子
    showUploadBox () {
      this.$data.isUploadShow = true
    },
    // 隐藏上传作品的盒子
    hiddenUploadBox () {
      this.$data.isUploadShow = false
    },
    // 显示修改资料
    showInfoBoxShow () {
      const {introduce, blog, git, qq, talent} = this.$data.userData
      this.$refs.infoBox.inputList = {
        introduce: {
          val: introduce,
          verified: true
        },
        blog: {
          val: blog,
          verified: true
        },
        git: {
          val: git,
          verified: true
        },
        qq: {
          val: qq,
          verified: true
        }
      }
      this.$refs.infoBox.talentList = talent
      this.$data.isInfoBoxShow = true
    },
    // 隐藏修改资料
    hiddenInfoBoxShow () {
      this.$data.isInfoBoxShow = false
    },
    // 修改资料成功
    updateUserData (data) {
      this.$data.userData = data.userDetail
      this.$data.userData.talent = data.userDetail.talent ? data.userDetail.talent.split(',') : []
      this.hiddenInfoBoxShow()
    },
    // 检测资料完整性
    testDateComplete () {
      let {qq, talent, introduce} = this.$data.userData
      if (!qq | !introduce | !talent.length) {
        setTimeout(() => {
          this.showInfoBoxShow()
        })
      }
    }
  }
}
</script>

<style lang='less'>
.adminPage-container {
  @darkenRed: #da1f0a;
  @darkenVoilet: #871dfb;
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
  .admin-degreeLine {
    height: 20px;
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
          background-color: @darkenRed;
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
  }
  .admin-bd {
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .breif-title {
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
      color: #222;
      font-weight: 600;
      text-shadow: 0 0 1px rgba(0, 0, 0, .2);
    }
    span {
      padding-top: .1rem;
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
  .breif-list {
    padding-top: .12rem;
    border-bottom: 1px dashed #e6e6e6;
    color: #666;
    li {
      display: flex;
      padding-top: 9px;
      padding-bottom: 9px;
      font-size: 15px;
    }
    .label {
      position: relative;
      width: 88px;
      float: left;
      &:after {
        position: absolute;
        content: ':';
        right: 16px;
      }
    }
    .val {
      flex: 1;
      .textOverFlow();
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
        font-size: 12px;
        background-color: @navy;
        color: #eee;
      }
    }
  }
  .admin-menu {
    display: flex;
    border-top: 1px dashed #e6e6e6;
    overflow: hidden;
  }
  .menu-category {
    box-sizing: border-box;
    flex: 1;
    height: 325px;
    border-bottom: 1px dashed #e6e6e6;
    @borderColor: #f5f5f5;
    &:first-child {
      padding-right:.15rem;
      border-right: 1px solid @borderColor;
    }
    &:nth-child(2) {
      padding-left:.15rem;
      padding-right:.15rem;
    }
    &:last-child {
      padding-left:.15rem;
      border-left: 1px solid @borderColor;
    }
    .category-container {
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
      padding-top: 18px;
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
        padding-bottom: 14px;
        overflow: hidden;
        cursor: pointer;
      }
      a {
        position: relative;
        display: inline-block;
        color: #777;
        text-indent: 15px;
        transition: color .1s;
        &:hover {
          text-decoration: underline;
        }
        &:before {
          position: absolute;
          content: '';
          width: 4px;
          height: 4px;
          top: 9px;
          left: 0;
          border-radius: 50%;
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
      a {
        &:before {
          background-color: #ff3c3c;
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
      a {
        &:before {
          background-color: #0087ec;
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
      a {
        &:before {
          background-color: #ffd470;
        }
      }
    }
  }
  .admin-title {
    position: relative;
    height: 20px;
    padding-top: .15rem;
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
  .project-list {
    display: flex;
    padding-top: .3rem;
    padding-bottom: .5rem;
    justify-content: flex-start;
    li {
      margin-right: .3rem;
      cursor: pointer;
    }
    .project-viewport {
      position: relative;
      width: 1.53rem;
      height: 1.24rem;
      border-radius: 3px;
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
      width: 1.53rem;
      height: 1.24rem;
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
      display: block;
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
      border-radius: 3px;
      align-items: center;
      z-index: 2;
      background-color: rgba(0, 0, 0, .6);
      color: #eee;
      opacity: 0;
      transition: opacity .25s;
      p {
        width: 100%;
        font-size: 16px;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }
  .admin-content {
    padding: .2rem 0;
    border-radius: 3px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .content-container {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .container-viewport {
    display: flex;
    width: 3.5rem;
    height: 2.4rem;
    min-height: 150px;
    margin-right: .4rem;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    .viewport-content {
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
  .container-article {
    flex: 1;
    color: #828181;
  }
  .guide {
    align-items: center;
    .container-viewport{
      background-image: url(images/bg2.jpg);
    }
    .guide-guidPort {
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
  }
  .scoreline {
    align-items: flex-end;
    .container-viewport{
      background-image: url(images/bg.jpg);
    }
    .article-prop {
      position: relative;
      width: 156px;
      height: 156px;
      float: left;
      margin-right: .7rem;
      .prop-text {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 50px;
        p:first-child {
          font-size: 22px;
          font-weight: 600;
          &.red {
            color: #ff3c3c;
          }
          &.blue {
            color: #0087ec;
          }
          &.yellow {
            color: #ffd470;
          }
        }
        p:last-child {
          padding-top: 11px;
          font-size: 13px;
          color: #999;
        }
      }
    }
    .prop-info {
      padding-right: .5rem;
      padding-top: 18px;
      font-size: 13px;
      line-height: 26px;
      color: #b3b3b3;
    }
  }
  .others {
    /*.content-container {
      align-items: flex-end;
    }*/
    .container-viewport{
      background-image: url(images/bg3.jpg);
    }
    .othersList li {
      display: flex;
      width: 33%;
      padding-top: 10px;
      padding-bottom: 10px;
      float: left;
      align-items: center;
      cursor: pointer;
    }
    .feature {
      width: 40px;
      height: 40px;
      margin-left: 12px;
      border-radius: 3px;
      wekit-mask-image:-webkit-radial-gradient(circle,white,black);
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      flex: 1;
      margin-right: 10px;
      padding-left: 5px;
      font-size: 13px;
      .border(right);
    }
    .rank {
      width: 35px;
      height: 26px;
      border-radius: 3px;
      line-height: 26px;
      text-align: center;
      background-color: @navy;
      font-size: 12px;
      color: #eee;
    }
    .name {
      padding-left: 3px;
      padding-right: 5px;
      &:hover {
        color: @primary;
      }
    }
    .score {
      float:right;
      padding-right: 10px;
      color: #999;
    }
    .pageTab .pageTab-list {
      justify-content: flex-end;
    }
  }
}
@media screen and (max-width: 435px){
  .adminPage-container {
    min-width: 100%;
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
    .breif-title {
      padding-top: 12px;
      padding-bottom: 10px;
      p {
        font-size: 20px;
      }
      span {
        padding-top: .15rem;
      }
    }
    .breif-list {
      li {
        font-size: 14px;
      }
    }
    .project-list {
      flex-wrap: wrap;
      &.flex-1 {
        justify-content: flex-start;
      }
      &.flex-2 {
        justify-content: space-around;
      }
      &.flex-3 {
        padding-left: .25rem;
        padding-right: .25rem;
        justify-content: space-between;
      }
      &.flex-4 {
        justify-content: space-around;
      }
      li {
        margin-top: 10px;
        margin-right: 0;
      }
      .project-viewport,
      .project-upload{
        width: 5.1rem;
        height: 4.14rem;
      }
    }
    .admin-menu {
      display: block;
      width: 100%;
      flex-wrap: wrap;
      border-top: 0;
      .menu-category {
        height: auto;
        min-width: 100%;
        margin-top: 10px;
        .category-container {
          width: 100%;
        }
        .category-wrapper {
          padding-top: 16px;
          overflow: hidden;
        }
        &:first-child {
          padding-right: 0;
          border-right: 0;
          li {
            width: 100%;
          }
        }
        &:nth-child(2) {
          padding-right: 0;
          padding-left: 0;
          li {
            width: 100%;
          }
        }
        &:last-child {
          padding-left: 0;
          border-left: 0;
          li {
            width: 100%;
          }
        }
      }
    }
    .content-container {
      flex-wrap: wrap;
      padding-bottom: 16px;
    }
    .container-viewport {
      width: 100%;
      height: 5rem;
      margin-right: 0;
      margin-bottom: 10px;
      padding-left: 6px;
      padding-right: 6px;
      background-size: cover;
      i {
        font-size: 30px;
      }
      .label {
        font-size: 20px;
      }
    }
    .scoreline {
      .scoreline-linePort {
        width: 86%;
      }
      .article-hd span {
        padding-left: 0;
      }
    }
    .prop-list {
      display: flex;
      padding-top: 6px;
      justify-content: space-between;
      overflow: hidden;
      &.clearfix:after {
        display: none;
      }
      .article-prop {
        width: 100px;
        height: 100px;
        margin-right: 0;
        float: none;
        .prop-text {
          top: 20px;
          p:first-child {
            font-size: 16px;
          }
          p:last-child {
            font-size: 12px;
          }
        }
      }
    }
    .others {
      .othersList li {
        width: 100%;
      }
      .info {
        margin-right: 2px;
      }
    }
  }
}
</style>
