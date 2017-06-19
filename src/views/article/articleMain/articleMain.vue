<template>
  <div class="article-main">
    <ul class="cow-topLine">
      <li></li><li></li><li></li><li></li>
    </ul>
    <div class="article-topBar">
      <p><i class="iconfont icon-bi"></i><span>博客正文</span></p>
      <img :src="articleData.perviewer">
    </div>
    <div class="article-box">
      <div class="article-hd">
        <h1 class="title">React与Redux实现后台管理系统</h1>
        <div class="info">
          <ul class='base'>
            <li>作者: 老实的牛</li>
            <li>时间: {{ articleData.time | cow-parseTime}}</li>
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
    <div class="article-context" id="context" v-imgPreLoad>
      <div class="context-box">
        <div class="box-hd red">
          <span class='title'>项目简介</span>
          <span class="tag">1</span>
        </div>
        <div class="box-bd">
          <div class="bd-para">
            <div class="tip">1.1 项目类型</div>
            <p>纯前后端分离 Git项目clone至本地云盘操作系统</p>
          </div>
          <div class="bd-para">
            <div class="tip">1.2 运用技术</div>
            <p>一个用react制作的后台git系统,可以clone在GitHub上的项目,在本地云盘发布,并且实现github上pull,checkout -hard等操作!云盘内制作了增 删 重命名 复制黏贴 新建文件夹的功能!</p>
            <img src="http://www.web-jackiee.com/uploads/allimg/170312/1-1F31219213T94.jpg">
          </div>
          <div class="bd-para">
            <div class="tip">1.3 开发背景</div>
            <p>1：开发时间 :  6.5天 [ 其中包括学习了Echarts的简单运用 ]</p>
            <p>2：开发背景： 为了进一步熟悉redux与react之间的交互</p>
            链接地址:<a href="#">https://vuejs.org/v2/guide/list.html#key</a>
          </div>
        </div>
      </div>
      <div class="context-box">
        <div class="box-hd orange">
          <span class='title'>项目特色</span>
          <span class="tag">1</span>
        </div>
        <div class="box-bd">
          <div class="bd-para">
            <div class="tip">2.1 项目类型</div>
            <p>纯前后端分离 Git项目clone至本地云盘操作系统</p>
          </div>
          <div class="bd-para">
            <div class="tip">2.2 运用技术</div>
            <p>1：运用定时cookie实现记住我功能,在config文件内可以直接改变cookie保存时间去掉勾选后直接清除cookie记录</p>
            <img src="http://www.web-jackiee.com/uploads/test/2.jpg">
          </div>
          <div class="bd-para">
            <div class="tip">2.3 开发背景</div>
            <p>1：开发时间 :  6.5天 [ 其中包括学习了Echarts的简单运用 ]</p>
            <p>2：开发背景： 为了进一步熟悉redux与react之间的交互</p>
            <!-- <img src="http://www.web-jackiee.com/uploads/test/3.jpg"> -->
            <div class="cow-code">
              <ul>
                <li>
                  <div class='count'>01</div>
                  <div class="content">
                    <code class="grey">// 用于远程服务器是否登录的验证,如果没有登录则跳转至登录页面,并提示优先登录</code>
                  </div>
                </li>
                <li>
                  <div class='count'>02</div>
                  <div class="content">
                    <code class="white">export </code>
                    <code class="blue">const </code>
                    <code class="white">cookieMiddleware </code>
                    <code class="red">= </code>
                    <code class="white">dispatch </code>
                    <code class="red">=</code>
                    <code class="red">&gt; </code>
                    <code class="white">res </code>
                    <code class="red">=</code>
                    <code class="red">&gt; </code>
                    <code class="white">{</code>
                  </div>
                </li>
                <li>
                  <div class='count'>03</div>
                  <div class="content">
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="white">res </code>
                    <code class="red">= </code>
                    <code class="white">res</code>
                    <code class="white">.</code>
                    <code class="white">body</code>
                    <code class="white">;</code>
                  </div>
                </li>
                <li>
                  <div class='count'>04</div>
                  <div class="content">
                    <code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="red">return </code>
                    <code class="red">new </code>
                    <code class="white">Promise</code>
                    <code class="white">(</code>
                    <code class="white">(</code>
                    <code class="white">solve</code>
                    <code class="white">,</code>
                    <code class="white">reject</code>
                    <code class="white">) </code>
                    <code class="red">=</code>
                    <code class="red">&gt; </code>
                    <code class="white">{</code>
                  </div>
                </li>
                <li>
                  <div class='count'>05</div>
                  <div class="content">
                    <code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="red">if</code>
                    <code class="white">(</code>
                    <code class="white">res</code>
                    <code class="white">.</code>
                    <code class="white">hasOwnProperty</code>
                    <code class="white">(</code>
                    <code class="yellow">"noLogin"</code>
                    <code class="white">)</code>
                    <code class="red">&amp;</code>
                    <code class="red">&amp;</code>
                    <code class="white">res</code>
                    <code class="white">.</code>
                    <code class="white">noLogin</code>
                    <code class="white">)</code>
                  </div>
                </li>
                <li>
                  <div class='count'>06</div>
                  <div class="content">
                    <code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="white">dispatch</code>
                    <code class="white">(</code>
                    <code class="white">doLink</code>
                    <code class="white">(</code>
                    <code class="yellow">'login'</code>
                    <code class="white">)</code>
                    <code class="white">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="grey">// 处理侧导航高亮store</code>
                  </div>
                </li>
                <li>
                  <div class='count'>07</div>
                  <div class="content">
                    <code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="white">dispatch</code>
                    <code class="white">(</code>
                    <code class="white">doLogoutData</code>
                    <code class="white">(</code>
                    <code class="white">)</code>
                    <code class="white">)</code>
                  </div>
                </li>
                <li>
                  <div class='count'>08</div>
                  <div class="content">
                    <code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="white">hashHistory</code>
                    <code class="white">.</code>
                    <code class="blue">push</code>
                    <code class="white">(</code>
                    <code class="yellow">'login'</code>
                    <code class="white">)</code>
                    <code class="white">;</code>
                  </div>
                </li>
                <li>
                  <div class='count'>09</div>
                  <div class="content">
                    <code class="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="red">return</code>
                    <code class="white">;</code>
                  </div>
                </li>
                <li>
                  <div class='count'>10</div>
                  <div class="content">
                    <code class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
                    <code class="white">}</code>
                  </div>
                </li>
                <li>
                  <div class='count'>11</div>
                  <div class="content">
                    <code class="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solve(res);</code>
                  </div>
                </li>
                <li>
                  <div class='count'>12</div>
                  <div class="content">
                    <code class="white">&nbsp;&nbsp;&nbsp;&nbsp;})</code>
                  </div>
                </li>
                <li>
                  <div class='count'>13</div>
                  <div class="content">
                    <code class="white">}</code>
                  </div>
                </li>
              </ul>
            </div>
            </br>
            链接地址:<a href="#">https://vuejs.org/v2/guide/list.html#key</a>
          </div>
        </div>
      </div>
    </div>
    <div class="article-box">
      <div class="article-ft">
        <p class='article-cow'><i class="iconfont icon-bi"></i>责任编辑 老实的牛</p>
        <div class="article-event">
          <div class="thumbs-up">
            <div class="event-hd">
              <div class="tag">
                <i class="iconfont icon-dianzan"></i>
              </div>
            <p>点赞 --<span>{{ articleData.praise | cow-buildZero }}</span></p>
            </div>
            <div class="line"></div>
          </div>
          <div class="love">
            <div class="event-hd">
              <div class="tag">
                <i class="iconfont icon-dianzandian"></i>
              </div>
              <p>收藏 --<span>{{ articleData.love | cow-buildZero }}</span></p>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="article-links">
          <p>上一篇: <router-link :to='articleData.preArticle.link'>{{ articleData.preArticle.name }}</router-link></p>
          <p>下一篇: <router-link :to='articleData.nextArticle.link'>{{ articleData.nextArticle.name }}</router-link></p>
        </div>
      </div>
    </div>
    <div class="article-box">
      <cow-message-board></cow-message-board>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTop: 180
    }
  },
  props: {
    articleData: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 跟还有路由匹配
    articleType () {
      let articleTypeList = this.$route.params.type.split('_').map(item => {
        return {
          tag: item,
          href: '/articleList/' + item
        }
      })
      return articleTypeList
    }
  },
  directives: {
    // 所有图片加载完毕的组件
    imgPreLoad: {
      // 组件绑定完之后执行获取右边列表数据
      inserted (el, binding, vnode) {
        let _self = vnode.context
        let cb = _self.getArticleListAttr
        if (!_self.$constent.isPc) return
        _self.preloadRequest(cb)
      }
    }
  },
  methods: {
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
        cb && cb()
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
    }
  }
}
</script>

<style lang='less'>
.cow-code {
  margin-top: 15px;
  overflow: hidden;
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
  /*字符串*/
  .yellow {
    color: #e6db74;
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
    padding-left: 20px;
    padding-right: 32px;
    height: 100%;
    float: left;
    border-radius: 3px;
    background: @btnColor;
    font-size: 14px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: .2s;
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
  padding-top: .8rem;
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
    &.red:before {
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
    }
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
      font-size: 13px;
      line-height: 30px;
    }
    a {
      color: @primary;
      padding-left: .1rem;
    }
    .bd-para {
      padding: 20px .3rem;
      &:nth-child(odd) {
        background-color: #f9f9f9;
      }
      &:last-child {
        padding-bottom: .6rem;
      }
      img {
        padding-top: 20px;
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
}
</style>
