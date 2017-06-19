<template>
  <div class="msgBoard">
    <div class="msgBoard-perviewer">
      <div class="msgBoard-user">
        <div class="user-perviewer">
          <img src="./images/user.jpg" v-if="isLogin">
          <p v-if='!isLogin' @click='showLoginBox'>请登录</p>
        </div>
        <div class="user-info" v-if="isLogin">
          <p class='name'>老实的牛</p>
          <p class='level'>[<span> LV2 </span>] 牛哥的见习助理</p>
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
      <textarea class='textarea' placeholder="谈谈您的看法 ..." @keyup="handleMsgVal" ref='textarea'></textarea>
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
      <div class="msgBoard-btns cow-btn-group">
        <div class="cow-btn primary" @click='submitFrom'>立刻发布</div> <div class="cow-btn default" @click="cancelMsgVal">取消</div>
      </div>
    </div>
    <div class="msgBoard-message">
      <ul class="cow-topLine"><li></li><li></li><li></li><li></li></ul>
      <div class="msgBoard-title">
        <div class="topBar-title"><i class="iconfont icon-message"></i>所有留言</div>
      </div>
      <div class="message-list">
        <p class="no-msg" v-if='false'>
          <i class="iconfont icon-ku"></i>小可爱, 来帮牛哥留两条吧...
        </p>
        <ul v-if="true">
          <li class='message-item' v-for="item of msgList">
            <div class="item-user">
              <div class="user-feature">
                <img :src="item.feature">
              </div>
              <div class="user-info">
                <p class='name'>{{ item.name }}</p>
                <p>积分 : {{ item.score }}</p>
                <p>等级：<span>LV{{ item.lv }}</span>{{ item.alias }}</p>
              </div>
            </div>
            <div class="item-context">
              <div class="context-hd">
                <p class='time'><i class="iconfont icon-shijian2"></i>{{ item.time | cow-parseTime }}</p>
                <p class="rate">评分：<i class="iconfont icon-star" v-for='i of new Array(item.rate)'></i></p>
              </div>
              <div class="context-bd">
                {{ item.context }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <cow-page-tab :allListLength='allListLength' :singleListLength='singleListLength' @change='handlerRequestMsg'></cow-page-tab>
    </div>
    <cow-login-box :isShow='isLoginBoxShow' :loginType='"regiest"' @hiddenLoginBox='hiddenLoginBox'></cow-login-box>
  </div>
</template>

<script>
import mixin from './mixin'

export default {
  name: 'MessageBoard',
  props: {},
  mixins: [mixin],
  data () {
    return {
      message: '',
      rateScore: 2,
      isLogin: false,
      isLoginBoxShow: false,
      isExpressionBoxShow: false,
      allListLength: 2,
      singleListLength: 8
    }
  },
  created () {
  },
  mounted () {
    this.replaceExpression()
  },
  methods: {
    // 处理msg value值
    handleMsgVal (ev) {
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
    // 展开loginBox
    showLoginBox () {
      this.$data.isLoginBoxShow = true
    },
    // 隐藏登录
    hiddenLoginBox () {
      this.$data.isLoginBoxShow = false
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
    replaceExpression () {
      let _liDom = this.$el.querySelectorAll('.context-bd')
      Array.from(_liDom).forEach(item => {
        if (/\[\[.+\]\]/g.test(item.innerHTML)) {
          item.innerHTML = item.innerHTML.replace(/\[\[(.+?)\]\]/g, ($0, $1) => {
            let _index = this.$data.expList.findIndex(str => str === $1)
            return `<span class="cow-exp e-${_index}"></span>`
          })
        }
      })
    },
    // 获取更多评论
    handlerRequestMsg (index) {
      console.log(index)
    },
    // 提交表单
    submitFrom () {
      // let {message} = this.$data
    }
  }
}
</script>

<style lang='less'>
.msgBoard {
  padding-top: .5rem;
  .msgBoard-perviewer {
    display: flex;
    position: relative;
    height: 1rem;
    min-height: 55px;
    align-items: center;
    border-radius: 2px;
    background-image: url('./images/1.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: .2s;
  }
  .msgBoard-user {
    @minSize: 50px;
    display: flex;
    height: .6rem;
    padding-left: 12px;
    align-items: flex-end;
    transform: translateY(2px);
    min-height: @minSize;
    .user-perviewer {
      box-sizing: border-box;
      width: .6rem;
      height: .6rem;
      min-width: @minSize;
      min-height: @minSize;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, .78);
      overflow: hidden;
      color: #d2d2d2;
      transition: .5s;
      opacity: .8;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      p {
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 55px;
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
      padding-left: .12rem;
      color: #b3b3b3;
      .name {
        font-size: 14px;
      }
      .level {
        padding-top: 6px;
        padding-bottom: 7px;
        font-size: 12px;
        span {
          color: #f3ed97;
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
    .message-title {

    }
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
      width: 180px;
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
      span {
        padding-left: 10px;
        padding-right: 10px;
        margin-right: 5px;
        border-radius: 2px;
        background-color: @navy;
        color: #eee;
      }
      .user-feature {
        width: 84px;
        height: 84px;
        margin-bottom: 4px;
        border: 2px solid @navy;
        border-radius: 2px;
        overflow: hidden;
        img {
          display: block;
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
          i {
            display: block;
            float: left;
            padding-right: 2px;
            color: #adadad;
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
    padding-top: 30px;
    .msgBoard-title {
      height: 35px;
      .topBar-title {
        line-height: 35px;
      }
    }
    .msgBoard-user {
      padding-left: 8px;
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
        display: flex;
        min-width: 100%;
        .user-info {
          padding-left: .6rem;
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
            padding-top: 10px;
            padding-bottom: 5px;
        }
      }
    }
  }
}
</style>
