<template>
  <div class="msgBoard">
    <div class="msgBoard-perviewer" :class='type'>
      <div class="msgBoard-user">
        <div class="user-perviewer">
          <img v-if='isLogin' :src="`${$Constent.serverHost}/uploads/user/${userData.id}/logo.${userData.logoType}`">
          <p v-else @click='showLoginBox'>请登录</p>
        </div>
        <div class="user-info" v-if="isLogin">
          <p class='name'>{{ userData.name }}</p>
          <p class='level'><span> LV{{ userData.lv }} </span>{{ userData.lv | cow-transAlias}}</p>
        </div>
      </div>
    </div>
    <div class="msgBoard-topBar">
      <div class="msgBoard-title">
        <div class="topBar-title"><i class="iconfont icon-dianpuxiangqingyedejiage"></i>留言板</div>
        <cow-rate class="msgBoard-rate" @change='handlerRateScore'></cow-rate>
      </div>
    </div>
    <div class="msgBoard-context">
      <img src="./images/r1.png" @click='fuocusTextarea'>
      <textarea class='textarea' autocapitalize="off" placeholder="谈谈您的看法 ..." @change="handleMsgVal" @blur="handleMsgVal" ref='textarea'></textarea>
    </div>
    <div class="msgBoard-form">
      <div class="msgBoard-expression">
        <i class="iconfont icon-biaoqing1" @click='showExpressionBox'></i>
        <transition name="fade">
          <ul class="expression-box" v-if='isExpressionBoxShow' @click='handlerExpVal'>
            <li class="cow-exp" v-for='(item, index) of new Array(63)' :class='"e-" + index'></li>
          </ul>
        </transition>
      </div>
      <div class="msgBoard-btns cow-btn-group submit-group">
        <cow-btn type="primary" @click='submitFrom' :isLoading="isRequestLoading">立刻发布</cow-btn>
        <cow-btn type="default" @click='cancelMsgVal' :isDisabled="isRequestLoading">取消</cow-btn>
      </div>
    </div>
    <div class="msgBoard-message">
      <ul class="cow-topLine"><li></li><li></li><li></li><li></li></ul>
      <div class="msgBoard-title">
        <div class="topBar-title"><i class="iconfont icon-message"></i>所有留言</div>
      </div>
      <div class="message-list">
        <ul v-if="messageList.length">
          <li class='message-item' v-for="item of messageList">
            <div class="item-user">
              <router-link :to="`/admin?id=${item.user.id}`">
                <div class="user-feature">
                  <img :src="`${$Constent.serverHost}/uploads/user/${item.user.id}/logo.${item.user.logoType}`">
                </div>
                <div class="user-info">
                  <p class='name'>{{ item.user.name }}</p>
                  <p>积分 : {{ item.user.score }}</p>
                  <div class="info-lv">等级：<div class="lv-tag"><span>LV</span>{{ item.user.lv || 1 }}</div>{{ item.user.lv | cow-transAlias }}</div>
                </div>
              </router-link>
            </div>
            <div class="item-context">
              <div class="context-hd">
                <p class='time'><i class="iconfont icon-shijian2"></i><span>{{ item.time, false | cow-parseTime }}</span></p>
                <p class="rate">评分：<i class="iconfont icon-star" v-for='i of new Array(item.score)'></i></p>
              </div>
              <div class="context-bd" v-html="getRealMessage(item.message)"></div>
            </div>
          </li>
        </ul>
        <p class="no-msg" v-else>
          <i class="iconfont icon-ku"></i>小可爱, 来帮牛哥留两条吧...
        </p>
      </div>
      <cow-page-tab :allListLength='allListLength' :singleListLength='singleListLength' @change='(index) => changePage(index - 1)' ref='cowPageTab'></cow-page-tab>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'

export default {
  name: 'MessageBoard',
  props: {
    // 顶部banner的车辆颜色
    type: {
      type: String,
      default: 'yellow'
    },
    // 消息列表
    messageList: {
      type: Array
    },
    singleListLength: {
      type: Number,
      default: 8
    },
    allListLength: {
      type: Number
    },
    articleId: {
      type: Number
    }
  },
  mixins: [mixin],
  data () {
    return {
      userData: {},
      message: '',
      rateScore: 2,
      isLogin: false,
      isExpressionBoxShow: false,
      isRequestLoading: false
    }
  },
  created () {
    this.requestUserData()
    this.$Events.loginData.$on(this, (isLogin, data) => {
      this.$data.isLogin = isLogin
      this.userData = data
    }, 'messageBoard')
  },
  methods: {
    // 请求用户信息
    requestUserData () {
      this.$Http({
        url: this.$Constent.api.user.userDetail,
        method: 'GET',
        params: {
          id: 0
        }
      }).then(res => {
        res = res.body
        if (res.statue) {
          this.$data.userData = res.userDetail
          this.$data.isLogin = true
        } else {
          this.$data.isLogin = false
        }
      })
    },
    // 处理msg value值
    handleMsgVal (ev) {
      // alert(2)
      this.$data.message = ev.target.value
    },
    // 取消所有的msg value
    cancelMsgVal () {
      this.$data.message = ''
      this.$refs.textarea.value = ''
    },
    // 处理分数
    handlerRateScore (index) {
      this.$data.rateScore = index
    },
    // 切换分页
    changePage (index) {
      this.$emit('changeMsgPage', index)
    },
    // 展开loginBox
    showLoginBox () {
      this.$Events.loginBox.$emit({
        isLoginBoxShow: true,
        type: 'login'
      })
    },
    // 获取textarea焦点
    fuocusTextarea () {
      this.$refs.textarea.focus()
    },
    // 切换状态
    showExpressionBox () {
      window.addEventListener('click', this.hiddenExpressionBox, true)
      this.isExpressionBoxShow = true
    },
    // 隐藏
    hiddenExpressionBox () {
      this.isExpressionBoxShow = false
      window.removeEventListener('click', this.hiddenExpressionBox, true)
    },
    // 事件委托 点击大ul 根据位置匹配表情
    handlerExpVal (e) {
      let left = Math.floor(e.target.offsetLeft / 31)
      let top = Math.floor(e.target.offsetTop / 30)
      let index = top * 7 + left
      let val = this.$data.expList[index]
      this.$data.message += `[[${val}]]`
      this.$refs.textarea.value += `[[${val}]]`
      this.isExpressionBoxShow = false
    },
    // 转换[[..]]为表情
    getRealMessage (message) {
      return message.replace(/\[\[(.+?)\]\]/g, ($0, $1) => {
        let _index = this.$data.expList.findIndex(str => str === $1)
        return `<span class="cow-exp e-${_index}"></span>`
      })
    },
    // 去登陆
    goLogin (type) {
      let message = type ? '请先登录' : '登录超时'
      this.$message({
        type: 'err',
        message
      })
      this.$Events.loginBox.$emit({
        isLoginBoxShow: true,
        type: 'login',
        fn: this.submitFrom.bind(this)
      })
      this.$Events.loginData.$emit(false, {})
    },
    // 提交表单
    submitFrom () {
      let {message, isLoading, isRequestLoading, rateScore, isLogin} = this.$data
      if (isLoading || isRequestLoading) return
      if (!isLogin) return this.goLogin(1)
      this.$data.isRequestLoading = true
      let isCanSubmit = this.validateMessage(message)
      // 不允许提交的时候
      if (!isCanSubmit.statue) {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
        this.$data.isRequestLoading = false
        return
      }

      // console.log(this.$route.fullPath)
      let articleId = this.$props.articleId
      if (articleId) {
        this.requestPostArticleMessage(message, rateScore, articleId)
      } else {
        this.requestPostMessage(message, rateScore)
      }
    },
    // 提交文章列表的留言
    requestPostArticleMessage (message, rateScore, articleId) {
      this.$Http({
        url: this.$Constent.api.message.postArticleMessage,
        method: 'POST',
        data: {
          articleId,
          message,
          score: rateScore + 1,
          st: 0,
          end: 10
        }
      }).then(res => {
        if (res.body.statue === -1) return this.goLogin(0)
        this.handlerPostOk(res, 20)
      }).catch(() => {
        this.$data.isRequestLoading = false
      })
    },
    // 提交留言中心中的留言
    requestPostMessage (message, rateScore) {
      this.$Http({
        url: this.$Constent.api.message.postMessage,
        method: 'POST',
        data: {
          message,
          score: rateScore + 1,
          st: 0,
          end: 10
        }
      }).then(res => {
        if (res.body.statue === -1) return this.goLogin(0)
        this.handlerPostOk(res, 15)
      }).catch(() => {
        this.$data.isRequestLoading = false
      })
    },
    handlerPostOk (res, score) {
      res = res.body
      if (res.statue) {
        let { messageList, allListLength, userLv, isAddScore } = res
        messageList.forEach(item => {
          item.message = this.getRealMessage(item.message)
        })
        this.$data.message = ''
        this.$refs.textarea.value = ''
        this.$emit('changeMsg', messageList, allListLength)
        this.$refs.cowPageTab.nowIndex = 0
        this.$data.userData.lv = userLv
        this.$message({
          type: 'success',
          message: '恭喜发布成功' + (isAddScore ? ',您的积分+' + score : '')
        })
        this.$data.isRequestLoading = false
      } else {
        this.$message({
          type: 'err',
          message: res.msg
        })
        this.$data.isRequestLoading = false
      }
    },
    // 验证信息
    validateMessage (message) {
      if (!message || !message.trim()) {
        return {
          statue: false,
          msg: '留言内容不能为空'
        }
      } else if (/^\d+$/.test(message)) {
        return {
          statue: false,
          msg: '留言内容不能纯数字'
        }
      } else if (/<\s*\/?\s*(script|div|span|p|h1|h2|h3|h4|h5|h6|style|head|body|html|button|canvas|code|ul|li|dd|dt|del|img|iframe|link|input|video|testarea|tr|td|strong).*?>/.test(message)) {
        return {
          statue: false,
          msg: '存在非法字符'
        }
      }
      return {
        statue: true
      }
    }
  }
}
</script>

<style lang='less'>
.msgBoard {
  textarea {
    font-family: 'Arial', 'Microsoft Yahei' !important;
  }
  margin-top: .5rem;
  padding-bottom: .2rem;
  background-color: #fff;
  .msgBoard-perviewer {
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 2px 2px 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: .2s;
    &.yellow {
      height: 1rem;
      min-height: 55px;
      background-image: url('./images/yellow.jpg');
    }
    &.black {
      height: 1.6rem;
      min-height: 60px;
      background-image: url('./images/black.jpg');
    }
    &.red {
      height: 1.6rem;
      min-height: 60px;
      background-image: url('./images/red2.jpg');
    }
    &.blue {
      height: 1.6rem;
      min-height: 60px;
      background-image: url('./images/blue.jpg');
    }
  }
  .msgBoard-user {
    @minSize: 55px;
    display: flex;
    box-sizing: border-box;
    height: .66rem;
    margin-left: 12px;
    padding-right: .3rem;
    align-items: center;
    border-radius: .33rem;
    border: 2px solid rgba(34, 34, 34, 0.1);
    background-color: rgba(0,0,0,.4);
    transform: translateY(2px);
    min-height: @minSize;
    .user-perviewer {
      box-sizing: border-box;
      width: .66rem;
      height: .66rem;
      min-width: @minSize;
      min-height: @minSize;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, .78);
      overflow: hidden;
      color: #d2d2d2;
      transition: .5s;
      opacity: 1;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      p {
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 61px;
        letter-spacing: 1px;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      &:hover {
        color: #fff564;
        opacity: 1;
        border-color: rgba(255, 255, 255, .88)
      }
    }
    .user-info {
      padding-left: .08rem;
      color: #e6e6e6;
      transform: translateY(-2px);
      .name {
        font-size: 14px;
      }
      .level {
        padding-top: 6px;
        font-size: 12px;
        span {
          padding-left: 5px;
          padding-right: 2px;
          margin-right: 7px;
          background-color: #0871bf;
          border-radius: 2px;
        }
      }
    }
  }
  .msgBoard-topBar {
    border-top: 5px solid #48576a;
  }
  .msgBoard-title {
    display: flex;
    padding-left: .12rem;
    padding-right: .06rem;
    .border(right);
    .border(left);
    .border(bottom);
    justify-content: space-between;
    .topBar-title {
      font-size: 14px;
      line-height: 47px;
      color: #555;
      font-weight: 600;
      i {
        padding-right: 6px;
        font-size: 16px;
        color: @red;
      }
    }
  }
  .msgBoard-context {
    position: relative;
    height: 1.5rem;
    min-height: 120px;
    padding: 20px 12px;
    .border(right);
    .border(left);
    .border(bottom);
    .textarea {
      display: block;
      min-width: 100%;
      min-height: 100%;
      max-width: 100%;
      max-height: 100%;
      border: none;
      outline: none;
      font-family: 'microsoft YaHei';
      font-size: 14px;
      color: #777;
      letter-spacing: 1px;
    }
    img {
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      margin-left: -29px;
      margin-top: -26px;
      opacity: .3;
    }
  }
  .msgBoard-form {
    display: flex;
    padding-top: 15px;
    justify-content: space-between;
    position: relative;
    .msgBoard-expression {
      position: relative;
      line-height: 37px;
      padding-left: 12px;
      font-size: 0;
      i {
        display: inline-block;
        vertical-align: top;
        font-size: 25px;
        color: #868686;
        cursor: pointer;
        padding-right: 10px;
        transition: .2s;
        &:hover {
          color: @primary;
          transform: translate3d(0, -2px, 0);
        }
      }
    }
    .expression-box {
      position: absolute;
      width: 218px;
      height: 270px;
      padding: 10px;
      top: -307px;
      left: 0;
      background-color: #fff;
      border-radius: 2px;
      .border();
    }
  }
  .msgBoard-message {
    position: relative;
    min-height: 100px;
    padding-top: .4rem;
  }
  .message-list {
    padding-left:12px;
    padding-right: 12px;
    min-height: 160px;
    .border(left);
    .border(right);
    .border(bottom);
    .no-msg {
      font-size: 13px;
      text-align: center;
      line-height: 160px;
      color: #777;
      letter-spacing: 1px;
      i {
        padding-right: 2px;
        font-size: 32px;
        vertical-align: middle;
      }
    }
    .message-item {
      display: flex;
      min-height: 160px;
      padding-top: .2rem;
      padding-bottom: .15rem;
      &:not(:last-child) {
        .border(bottom);
      }
    }
    .item-user {
      width: 230px;
      p {
        height: 22px;
        padding-left: 2px;
        line-height: 22px;
        font-size: 12px;
        color: #868686;
        .textOverFlow();
        &.name {
          color: @navy;
          font-weight: bolder;
        }
      }
      div.info-lv {
        display: flex;
        align-items: center;
        margin-top: 1px;
        padding-left: 2px;
        font-size: 12px;
        color: #868686;
      }
      div.lv-tag {
        display: flex;
        width: 42px;
        height: 17px;
        align-items: center;
        margin-right: 5px;
        border-radius: 2px;
        background-color: @red;
        color: #eee;
        overflow: hidden;
        span {
          height: 100%;
          padding-left: 4px;
          padding-right: 3px;
          margin-right: 6px;
          line-height: 18px;
          display: inline-block;
          vertical-align: middle;
          background-color: @navy;
        }
      }
      .user-feature {
        width: .84rem;
        height: .84rem;
        min-width: 62px;
        min-height: 62px;
        margin-bottom: 4px;
        border: 2px solid @navy;
        border-radius: 2px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .item-context {
      flex: 1;
      color: #555;
      .context-hd{
        display: flex;
        padding-top: 3px;
        padding-bottom: 3px;
        justify-content: flex-end;
        font-size: 12px;
        color: #888;
        .border(bottom);
        p:nth-child(2) {
          padding-left: 12px;
        }
        .time {
          display: flex;
          align-items: center;
          i {
            display: block;
            padding-right: 2px;
            color: #adadad;
            transform: translateY(-1px);
          }
        }
        .rate {
          i {
            padding-right: 2px;
            color: darken(@yellow, 8%);
            vertical-align: middle;
          }
        }
      }
      .context-bd{
        padding: .2rem .1rem 0;
        font-size: 13px;
        line-height: 30px;
      }
    }
  }
}
@media screen and (max-width: 435px) {

  .msgBoard {
    margin-top: 26px;
    .msgBoard-title {
      height: 35px;
      .topBar-title {
        line-height: 35px;
      }
    }
    .msgBoard-perviewer {
      border-radius: 0;
      &.black {
        height: 86px;
        background-image: url('./images/black2.jpg');
      }
    }
    .msgBoard-btns {
      padding-right: 12px;
    }
    .msgBoard-user {
      border-radius: 50px;
      padding-right: 20px;
      transform: translateY(0);
      .user-perviewer {
        p {
          line-height: 46px;
        }
      }
    }
    .msgBoard-message {
      padding-top: 15px;
    }
    .message-list {
      .item-user {
        min-width: 100%;
        a {
          display: flex;
          .user-info {
            padding-left: .6rem;
          }
        }
      }
      .message-item {
        display: block;
      }
      .item-context {
        padding-top: 10px;
        padding-left: 0;
        .context-hd {
          justify-content: flex-start;
          .time i {
            padding-right: 0;
            transform: translateY(-2px);
          }
        }
        .context-bd {
            padding-top: 40px;
            padding-bottom: 40px;
        }
      }
    }
  }
}
</style>
