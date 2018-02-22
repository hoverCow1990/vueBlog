<template>
  <div class="article-main">
    <ul class="cow-topLine">
      <li></li><li></li><li></li><li></li>
    </ul>
    <div class="article-topBar">
      <p><i class="iconfont icon-bi"></i><span>博客正文</span></p>
    </div>
    <div class="article-box">
      <div class="article-hd">
        <h1 class="title">{{ articleData.title }}</h1>
        <div class="info">
          <ul class='base'>
            <li>作者: 老实的牛</li>
            <li>时间: {{ articleData.time }}</li>
            <li>观看: {{ articleData.watch }}</li>
            <li>点赞: {{ articleData.love }}</li>
          </ul>
          <ul class='link'>
            当前位置 :
            <router-link v-for='(item, index) of articleType' :to='item.href' :key='index'>{{ item.tag }}</router-link>
          </ul>
        </div>
      </div>
      <template v-if='articleData.perviewerContext'>
        <div class="article-perviewer" v-html='articleData.perviewerContext'></div>
      </template>
    </div>
    <div class="article-context" id="context" v-html='articleData.context'></div>
    <div class="article-box">
      <div class="article-ft">
        <p class='article-cow'><i class="iconfont icon-bi"></i>责任编辑 老实的牛</p>
        <div class="article-event">
          <div class="love" :class="loveClassName" @click="handlerLoveAndCollect(1)">
            <div class="event-hd">
              <div class="tag">
                <i class="iconfont icon-dianzan"></i>
              </div>
            <p>{{ articleData.isCanlove === 2 ? '取消' : '点赞' }} --<span>{{ articleData.love | cow-buildZero }}</span></p>
            </div>
            <div class="line"></div>
          </div>
          <div class="collect" :class="collectClassName"  @click="handlerLoveAndCollect(2)">
            <div class="event-hd">
              <div class="tag">
                <i class="iconfont icon-dianzandian"></i>
              </div>
              <p>{{ articleData.isCanCollect === 2 ? '取消' : '收藏' }} --<span>{{ articleData.collect | cow-buildZero }}</span></p>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="article-links">
          <p>上一篇:
            <router-link v-if="articleData.preArticle" :to='articleData.preArticle.link'>{{ articleData.preArticle.name }}</router-link>
            <template v-else>这是第一篇了</template>
          </p>
          <p>下一篇:
            <router-link v-if="articleData.nextArticle" :to='articleData.nextArticle.link'>{{ articleData.nextArticle.name }}</router-link>
            <template v-else>这是最后篇了</template>
          </p>
        </div>
      </div>
    </div>
    <div class="article-box article-message">
      <cow-message-board ref="messageBoard" :articleId="articleData.id" type='yellow' :messageList='messageList' :allListLength='allListLength' @changeMsgPage='requestMessageList' @changeMsg='changeMsg'></cow-message-board>
    </div>
    <div class="article-type" v-if="$Constent.isPc">
      <div class="article-typeModel model-night" :class="articleData.articleColor === 1 ? 'active' : ''" @click="changeArticleColorType(2)"></div>
      <div class="article-typeModel model-day" :class="articleData.articleColor === 2 ? 'active' : ''" @click="changeArticleColorType(1)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTop: 180, // 侧导航点击后移动至距离顶部的距离
      allListLength: 0, // 所有消息条数
      singleListLength: 8, // 每页条数
      messageList: [], // 消息列表
      isRequestLoveCollect: false,
      isRequestArticleColor: false
    }
  },
  props: {
    articleData: {
      type: Object,
      required: true
    }
  },
  created () {
    this.requestMessageList(0)
  },
  watch: {
    'articleData.context' () {
      let cb = [this.getArticleListAttr, this.setCoderCopy]
      if (!this.$Constent.isPc) return
      this.preloadRequest(cb)
    }
  },
  computed: {
    // 跟还有路由匹配
    articleType () {
      let articleTypeList = this.$route.params[0]
      if (void 0 !== articleTypeList) {
        articleTypeList = articleTypeList.substr(1).split('_').map(item => {
          return {
            tag: item,
            href: '/articleList/' + item
          }
        })
      } else {
        return [{
          tag: 'searach',
          href: '/articleList/searach'
        }]
      }
      return articleTypeList
    },
    // 点赞的class
    loveClassName () {
      let isCanlove = this.$props.articleData.isCanlove
      return this.getClassName(isCanlove)
    },
    // 收藏的class
    collectClassName () {
      let isCanCollect = this.$props.articleData.isCanCollect
      return this.getClassName(isCanCollect)
    }
  },
  methods: {
    // 切换文章夜间白昼模式
    changeArticleColorType (type) {
      if (this.$data.isRequestArticleColor) return
      this.$data.isRequestArticleColor = true
      this.$Http({
        url: this.$Constent.api.user.changeArticleColorType,
        method: 'GET',
        params: {
          type: type
        }
      }).then(res => {
        res = res.body
        if (res.statue === 1) {
          this.$emit('changeArticleColorType', type)
        } else if (res.statue === -1) {
          this.$message({
            type: 'err',
            message: '该功能需先登录'
          })
          this.$refs.messageBoard.isLoginBoxShow = true
        } else {
          this.$message({
            type: 'err',
            message: '模式切换,请稍后再试'
          })
        }
        this.$data.isRequestArticleColor = false
      }).catch(e => {
        console.log(e)
        this.$data.isRequestArticleColor = false
      })
    },
    // 获取点赞或者收藏按钮的className
    getClassName (type) {
      switch (type) {
        case 0:
          return 'disable'
        case 1:
          return ''
        case 2:
          return 'off'
        default:
          return ''
      }
    },
    // 请求留言板内容
    requestMessageList (st) {
      let articleId = this.$route.params.id
      const { singleListLength } = this.$data
      this.$Http({
        url: this.$Constent.api.message.getArticleMessage,
        method: 'GET',
        params: {
          st: st * singleListLength,
          end: st * singleListLength + singleListLength,
          articleId
        }
      }).then(res => {
        res = res.body
        if (res.statue) {
          let { messageList, allLength } = res
          this.$data.messageList = messageList
          this.$data.allListLength = allLength
        }
      })
    },
    // 更新消息列表
    changeMsg (messageList, allLength) {
      this.$data.messageList = messageList
      this.$data.allListLength = allLength
    },
    // 预加载所有图片
    preloadRequest (cb) {
      const _context = document.getElementById('context')
      let _imgs = _context.getElementsByTagName('img')
      let promiseQuery = Array.from(_imgs, img => {
        return new Promise((resolve, reject) => {
          img.onload = function () {
            resolve()
          }
        })
      })
      Promise.all(promiseQuery).then(() => {
        cb && Array.isArray(cb) && cb.forEach(c => c())
      })
    },
    // 获取列表属性
    getArticleListAttr () {
      const _context = document.getElementById('context')
      const _contextBox = _context.getElementsByClassName('context-box')
      let showTop = this.$data.showTop
      let _articleListAttr = []
      let _contextData
      let _hd
      let _bd
      let _title
      Array.from(_contextBox).forEach(item => {
        _hd = item.querySelector('.box-hd')
        _bd = item.querySelector('.box-bd')
        _title = _hd.querySelector('.title')
        _contextData = {
          title: _title.innerHTML,
          top: parseInt(_hd.offsetTop) - showTop,
          childrens: this.getChildrenAttr(_bd)
        }
        _articleListAttr.push(_contextData)
      })
      this.$emit('postAttr', _articleListAttr)
    },
    // 获取子节点属性
    getChildrenAttr (_bd) {
      const showTop = this.$data.showTop
      let _tip
      return Array.from(_bd.querySelectorAll('.bd-para'), item => {
        _tip = item.querySelector('.tip')
        return {
          title: _tip.innerHTML,
          top: parseInt(item.offsetTop) - showTop,
          bottom: parseInt(item.offsetTop) + parseInt(item.offsetHeight) - showTop
        }
      })
    },
    // 处理点赞收藏 type 1:点击love 2:点击collect
    handlerLoveAndCollect (type) {
      const isCanType = type === 1 ? 'isCanlove' : 'isCanCollect'
      const isCanStatue = this.$props.articleData[isCanType]
      const articleId = this.$props.articleData.id
      if (this.$data.isRequestLoveCollect || !articleId) return // 请求收藏中或者还没请求到文章时
      this.$data.isRequestLoveCollect = true
      if (isCanStatue === 0) { // 未登录状态
        this.$message({type: 'err', message: '请先登录'})
        this.$refs.messageBoard.$data.isLoginBoxShow = true
        this.$data.isRequestLoveCollect = false
      } else if (isCanStatue === 1) { // 发送收藏或者点赞操作
        this.requestLoveAndCollect(type, articleId, isCanType)
      } else if (isCanStatue === 2) { // 取消收藏或者点赞操作
        this.requestStopLoveAndCollect(type, articleId, isCanType)
      }
    },
    // 代码复制功能
    setCoderCopy () {
      let coders = document.querySelectorAll('.cow-code')
      let _self = this
      Array.from(coders).forEach(code => {
        let copyInput = document.createElement('i')
        copyInput.className = 'copy iconfont icon-bi'
        copyInput.onclick = function () {
          let ul = this.nextElementSibling
          let text = ul.innerText
          let textarea = document.createElement('textarea')
          textarea.className = 'copy-textarea '
          text = text.replace(/(\n)(\d+)(\n)/g, ($0, $1, $2, $3) => $1).replace(/^1\n/, '\n')
          console.log(text)
          textarea.value = text
          document.documentElement.appendChild(textarea)
          textarea.select()
          document.execCommand('Copy')
          document.documentElement.removeChild(textarea)
          _self.$message({
            type: 'success',
            message: '复制成功,按ctrl+v黏贴'
          })
        }
        code.prepend(copyInput)
      })
    },
    // 发送点赞收藏请求
    requestLoveAndCollect (type, articleId, isCanType) {
      this.$Http({
        url: this.$Constent.api.article.loveAndCollectArticle,
        method: 'POST',
        data: {
          type,
          articleId
        }
      }).then(res => {
        res = res.body
        if (res.statue === 1) {
          let changeType = type === 1 ? 'love' : 'collect'
          this.$message({type: 'success', message: `恭喜你${type === 1 ? '点赞' : '收藏'}, 用户积分+20`})
          this.$emit('changeLoveCollectStatue', isCanType, changeType, 2)
          this.$data.isRequestLoveCollect = false
        } else if (res.statue === -1) {
          this.$message({type: 'err', message: res.msg})
          this.$Events.loginData.$emit(false, {})
          this.$refs.messageBoard.$data.isLoginBoxShow = true
          this.$data.isRequestLoveCollect = false
        }
      }).catch(() => {
        this.$data.isRequestLoveCollect = false
      })
    },
    // 发送取消点赞收藏请求
    requestStopLoveAndCollect (type, articleId, isCanType) {
      this.$Http({
        url: this.$Constent.api.article.stopLoveAndCollectArticle,
        method: 'POST',
        data: {
          type,
          articleId
        }
      }).then(res => {
        res = res.body
        if (res.statue === 1) {
          let changeType = type === 1 ? 'love' : 'collect'
          this.$message({type: 'success', message: `取消${type === 1 ? '点赞' : '收藏'}, 用户积分-20`})
          this.$emit('changeLoveCollectStatue', isCanType, changeType, 1)
          this.$data.isRequestLoveCollect = false
        } else if (res.statue === -1) {
          this.$message({type: 'err', message: res.msg})
          this.$Events.loginData.$emit(false, {})
          this.$refs.messageBoard.$data.isLoginBoxShow = true
          this.$data.isRequestLoveCollect = false
        }
      }).catch(() => {
        this.$data.isRequestLoveCollect = false
      })
    }
  }
}
</script>

<style lang='less'>
.copy-textarea {
  position: fixed;
  left: -300px;
  top: 0;
  opacity: 0;
}
.article-type {
  position: fixed;
  width: 172px;
  height: 105px;
  left: 0;
  bottom: 15%;
  transform: translateX(-10px);
  transition: .5s;
  cursor: pointer;
  z-index: 999;
  .article-typeModel {
    position: absolute;
    width: 100%;
    height: 100%;
    left: -110%;
    opacity: 0;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -ms-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    &.model-night {
      background: url(./images/night.png);
    }
    &.model-day {
      background: url(./images/day.png);
    }
    &.active {
      transition: 1s .6s;
      opacity: 1;
      left: 0;
    }
  }
}
.cow-code {
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  &:hover {
    .copy {
      opacity: .8;
    }
  }
  .copy {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    right: 8px;
    top: 8px;
    line-height: 22px;
    text-align: center;
    border-radius: 3px;
    background-color: #fff;
    color: #111;
    cursor: pointer;
    transition: .2s;
    opacity: 0;
  }
  ul {
    max-width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #1f1f1f;
    border-radius: 5px;
    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
    letter-spacing: 1px;
  }
  code {
    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
    font-size: 12px;
  }
  li {
    display: flex;
    height: 22px;
    line-height: 22px;
    font-size: 0;
  }
  .count {
    width: 30px;
    max-width: 30px;
    min-width: 30px;
    float: left;
    text-indent: 10px;
    font-size: 12px;
    border-right: 2px solid #acffaa;
  }
  .content {
    padding-left: 12px;
    word-break:keep-all;
    white-space:nowrap;
    color: #fff;
  }
  /*注释灰色*/
  .grey {
    color: #565656;
  }
  /*普通白色*/
  .white {
    color: #e6e6e6;
  }
  /*关键词蓝色*/
  .blue {
    color: #66d9ef;
    font-weight: bold;
  }
  /*符号等红色*/
  .red {
    color: #f92672;
  }
  /*绿色*/
  .green {
    color: #80ff7f;
  }
  /*字符串*/
  .yellow {
    color: #e6db74;
  }
}
.article-loading {
  padding-top: .8rem;
  padding-bottom: .8rem;
  i {
    display: block;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    line-height: 40px;
    text-align: 30px;
    transform-origin: 46% 51%;
    font-size: 40px;
    color: #2c3e50;
    animation: articleLoading .5s infinite linear;
  }
  @keyframes articleLoading {
    from {
      transform: rotate(0);
    } to {
      transform: rotate(360deg);
    }
  }
}
.article-main {
  width: 8.9rem;
  float: left;
  margin-left: .1rem;
  padding-bottom: .5rem;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, .2);
}
.article-topBar {
  padding: 10px .15rem;
  .border(bottom);
  font-size: .16rem;
  color: #505050;
  overflow: hidden;
  p {
    display: inline-block;
    width: 120px;
    float: left;
  }
  img {
    display: none;
    float: right;
    vertical-align: middle;
    transform: translateY(2px);
  }
  i {
    padding-right: 5px;
    vertical-align: top;
  }
}
.article-box {
  padding-left: .3rem;
  padding-right: .3rem;
  overflow: hidden;
}
.article-hd {
  padding-top: .4rem;
  padding-bottom: 3px;
  .border(bottom);
  h1 {
    font-size: .28rem;
    letter-spacing: 2px;
    color: #6891D0;
  }
  .info {
    padding-top: .18rem;
    padding-bottom: .05rem;
    font-size: 12px;
    color: #999;
    overflow: hidden;
  }
  li {
    float: left;
    padding-right: 14px;
  }
  .base {
    float: left;
  }
  .link {
    float: right;
    a {
      display: inline-block;
      padding-left: 3px;
      color: #999;
      &:last-child {
        color: #6891D0;
      }
      &:not(:last-child):after {
        content: ' /'
      }
    }
  }
}
.article-perviewer {
  padding-top: .4rem;
  border-bottom: 1px dashed #e7e7e7;
  .perviewer {
    width: 660px;
  }
  img {
    width: 100%;
  }
  .des {
    font-size: 13px;
    line-height: 28px;
    color: #999;
  }
  .btn-group {
    padding-top: .3rem;
    padding-bottom: .25rem;
    height: 45px;
    line-height: 45px;
  }
  .btn {
    @btnColor: #5295ef;
    position: relative;
    width: 136px;
    height: 100%;
    float: left;
    border-radius: 3px;
    background: @btnColor;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    transition: .2s;
    a {
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
    i {
      display: inline-block;
      padding-right: 10px;
      font-size: 20px;
      vertical-align: bottom;
    }
    &.github {
      i {
        transform: translateY(-1px);
      }
    }
    &:hover {
      background-color: darken(@btnColor, 5%)
    }
  }
}
.article-context {
  padding-top: .3rem;
  .context-box:nth-child(1n) .box-hd:before {
    background-color: #e34c26;
  }
  .context-box:nth-child(2n) .box-hd:before {
    background-color: #fbcd26;
  }
  .box-hd {
    position: relative;
    @size: 42px;
    width: 100%;
    height: @size;
    border-bottom: 2px solid #152331;
    background-color: #2c3e50;
    font-size: 0;
    &:before {
      position: absolute;
      content: '';
      width: 4px;
      height: @size + 2;
      left: 0;
      top: 0;
    }
    /* &.red:before {
      background-color: #e34c26;
    }
    &.yellow:before {
      background-color: #f1e05a;
    }
    &.violet:before {
      background-color: #966dd6;
    }
    &.orange:before {
      background-color: #ec8b49;
    } */
    .tag {
      display: none;
      position: absolute;
      width: @size - 8;
      height: @size - 8;
      background-color: #fff;
      top: 4px;
      right: 4px;
      border-radius: 50%;
      font-family: 'Comic Sans MS', 'Microsoft YaHei';
      font-size: 18px;
      text-align: center;
      line-height: @size - 8;
      font-weight: bolder;
      color: #2c3e50;
    }
    .title {
      display: inline-block;
      padding-left: 20px;
      vertical-align: middle;
      line-height: @size;
      font-size: 18px;
      letter-spacing: 1px;
      color: #fff;
    }
  }
  .box-bd {
    font-size: 13px;
    line-height: 32px;
    color: #7b7b7b;
    p {
      font-size: 14px;
      line-height: 30px;
    }
    a {
      color: @primary;
      padding-left: .1rem;
    }
    .bd-para {
      padding: 20px .2rem;
      &:nth-child(odd) {
        background-color: #f9f9f9;
      }
      &:last-child {
        padding-bottom: .6rem;
      }
      img {
        padding-top: 20px;
        padding-bottom: 10px;
      }
    }
    .tip {
      padding-bottom: .15rem;
      font-size: 15px;
      color: #333;
      font-weight: 600;
    }
  }
}
.article-ft {
  padding-top: .6rem;
  .article-cow {
    padding-bottom: 10px;
    .border(bottom);
    font-size: 13px;
    color: #555;
    i {
      padding-right: 10px;
      font-size: 16px;
    }
  }
  .article-event {
    display: flex;
    padding-top: .4rem;
    padding-bottom: .3rem;
    &>div {
      width: 160px;
      height: 72px;
      margin-right: 30px;
      .border();
      border-radius: 2px;
      cursor: pointer;
      &.off {
        opacity: .5;
        i {
          color: @primary;
        }
        .line:before {
          transform: translate3d(0, 0, 0);
        }
      }
      &.disable {
        opacity: 0.5;
        .line:before {
          transform: translate3d(0, 0, 0);
        }
      }
      &:hover {
        .line:before {
          transform: translate3d(0, 0, 0);
        }
      }
    }
    .event-hd {
      display: flex;
      align-items: center;
      margin: 13px 10px 0;
      padding-bottom: 10px;
    }
    .tag {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      line-height: 36px;
      text-align: center;
      .border();
    }
    .line {
      position: relative;
      width: 83%;
      height: 2px;
      background-color: #e4e4e4;
      margin-left: auto;
      margin-right: auto;
      overflow: hidden;
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: @primary;
        transition: transform .2s;
        transform: translate3d(-100%, 0, 0);
      }
    }
    i {
      display: inline-block;
      vertical-align: top;
      color: #666;
    }
    p {
      width: 80px;
      margin-left: 10px;
      font-size: 13px;
      letter-spacing: 1px;
      color: #666;
      span {
        float: right;
        color: #e34c26;
        font-family: 'Comic Sans MS', 'Microsoft YaHei';
        font-weight: bold;
      }
    }
  }
  .article-links {
    box-sizing: border-box;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 35px;
    border: 1px dashed #e5e5e5;
    font-size: 14px;
    color: #666;
    overflow: hidden;
    p {
      max-width: 100%;
      display: inline-block;
      padding-left: 10px;
      vertical-align: top;
      .textOverFlow();
    }
    a {
      padding-left: 5px;
      color: @primary;
      transition: color .2s;
      &:hover {
        color: darken(@primary, 10%);
      }
    }
  }
}
@media screen and (max-width: 768px){
  .article-main {
    width: 100%;
  }
}
@media screen and (max-width: 660px){
  .article-perviewer {
    .perviewer {
      width: 100%;
    }
  }
}
@media screen and (max-width: 435px){
  .cow-code {
    ul {
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
  .article-main {
    margin-left: 0;
    box-shadow: none;
  }
  .article-hd {
    h1 {
      font-size: 16px;
      letter-spacing: 1px;
    }
    ul {
      width: 100%;
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .base {
      li:first-child {
        display: none;
      }
    }
  }
  .article-perviewer {
    .des {
      line-height: 25px;
    }
    .btn-group {
      padding-top: 18px;
      padding-bottom: 18px;
    }
    .btn {
      &.download {
        display: none;
      }
    }
  }
  .article-context {
    .box-hd {
      @size: 38px;
      height: @size;
      &:before {
        height: @size + 2;
      }
      .tag {
        width: @size - 8;
        height: @size - 8;
        top: 4px;
        right: 4px;
        font-size: 16px;
        line-height: @size - 8;
      }
      .title {
        padding-left: 18px;
        line-height: @size;
        font-size: 18px;
      }
    }
    img {
      max-width: 100%;
    }
  }
  .article-ft {
    .article-event {
      display: flex;
      padding-bottom: 15px;
      &>div {
        width: 50%;
        box-sizing: border-box;
        margin-right: 0;
        &:nth-child(1) {
          border-radius: 2px 0 0 2px;
          border-right: 0;
        }
        &:nth-child(2) {
          border-radius: 0 2px 2px 0;
        }
      }
    }
  }
  .article-box.article-message {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
