<template>
  <section id='articlePage'>
    <cow-header-filler></cow-header-filler>
    <div class="article-wrapper">
      <div class="article-container container">
        <div class="article-main">
          <ul class="article-topLine">
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
            <template v-if='articleData.projectContext'>
              <div class="article-perviewer" v-html='articleData.projectContext'></div>
            </template>
          </div>
          <div class="article-context">
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
                    <p>1：运用定时cookie实现记住我功能,在config文件内可以直接改变cookie保存时间去掉勾选后直接清除cookie记录</p>
                    <img src="http://www.web-jackiee.com/uploads/test/2.jpg">
                  </div>
                  <div class="bd-para">
                    <div class="tip">1.3 开发背景</div>
                    <p>1：开发时间 :  6.5天 [ 其中包括学习了Echarts的简单运用 ]</p>
                    <p>2：开发背景： 为了进一步熟悉redux与react之间的交互</p>
                    <img src="http://www.web-jackiee.com/uploads/test/3.jpg">
                    </br>
                    链接地址:<a href="#">https://vuejs.org/v2/guide/list.html#key</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="article-sideNav">
          <div class="sideNav-topLine">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixin from './minix'

export default {
  data () {
    return {}
  },
  mixins: [mixin],
  computed: {
    articleType () {
      console.log(this.$route.params.type)
      let articleTypeList = this.$route.params.type.split('_').map(item => {
        return {
          tag: item,
          href: '/articleList/Javascript_React'
        }
      })
      return articleTypeList
    }
  },
  methods: {

  }
}
</script>

<style lang='less'>
@lineHeight: 10px;
#articlePage {
  .article-container {
    width: 12.32rem;
    padding-bottom: .5rem;
  }
}
.article-container {
  padding-top: .5rem;
  overflow: hidden;
}
.article-main {
  width: 9rem;
  height: 3000px;
  float: left;
  margin-left: .1rem;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
}
.article-topLine {
  display: flex;
  height: @lineHeight;
  li {
    height: 100%;
  }
  li:nth-child(1) {
    width: 56%;
    background-color: #2c3e50;
  }
  li:nth-child(2) {
    width: 21%;
    background-color: #f1e05a;
  }
  li:nth-child(3) {
    width: 16%;
    background-color: #e34c26;
  }
  li:nth-child(4) {
    flex-grow: 1;
    background-color: #563d7c;
  }
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
.article-sideNav {
  width: 2.9rem;
  height: 500px;
  float: right;
  margin-right: .1rem;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
  .sideNav-topLine {
    height: @lineHeight;
    background-color: #2c3e50;
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
    /*border-radius: 0 @size / 2 @size / 2 0;*/
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
    /*&:after {
      position: absolute;
      content: '';
      width: 300px;
      height: 0;
      left: 230px;
      top: 21px;
      border-bottom: 1px dashed #222;
    }*/
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
@media screen and (max-width: 660px){
  .article-perviewer {
    .perviewer {
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px){
  .article-main {
    width: 100%;
  }
  .article-sideNav {
    display: none;
  }
}
@media screen and (max-width: 435px){
  #articlePage {
    .article-container {
      width: 100%;
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
      /*width: 180px;*/
      height: @size;
      /*border-radius: 0 @size / 2 @size / 2 0;*/
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
}
</style>
