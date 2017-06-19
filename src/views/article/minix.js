export default {
  data () {
    return {
      articleData: {
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/170313/1-1F313043542922.jpg',
        time: '1497638732871',
        watch: 121,
        love: 21,
        praise: 0,
        preArticle: {
          name: 'es6笔记三[字符串扩展]',
          link: 'http://localhost:8080/#/article/Javascript_React/123'
        },
        nextArticle: {
          name: 'es6笔记四[正则表达]',
          link: 'http://localhost:8080/#/article/Javascript_React/122'
        },
        perviewerContext: `
          <div class="perviewer">
            <img src="http://www.web-jackiee.com/uploads/allimg/170313/1-1F313043542922.jpg">
          </div>
          <div class="des">
            <p>在用react与redux做了一个简单的todoMvc后,用动脑的Api自己实现的的一个MVC层前后端分离的后台管理系统</p>
            <p>一个用react制作的后台git系统,可以clone在GitHub上的项目,在本地云盘发布,并且实现github上pull,checkout -hard等操作!云盘内制作了增 删 重命名 复制黏贴 新建文件夹的功能!</p>
          </div>
          <div class="btn-group">
            <div class="btn download">
              <i class="iconfont icon-xiazai"></i>下载源码
            </div>
            <div class="btn watch">
              <i class="iconfont icon-yanjing"></i>在线演示
            </div>
            <div class="btn github">
              <i class="iconfont icon-github"></i>Github
            </div>
          </div>`,
        context: `
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
                <img src="http://www.web-jackiee.com/uploads/test/3.jpg">
                </br>
                链接地址:<a href="#">https://vuejs.org/v2/guide/list.html#key</a>
              </div>
            </div>
          </div>`
      }
    }
  }
}