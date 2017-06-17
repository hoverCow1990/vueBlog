export default {
  data () {
    return {
      articleData: {
        perviewer: 'http://www.web-jackiee.com/uploads/allimg/170313/1-1F313043542922.jpg',
        time: '1497638732871',
        watch: 121,
        love: 21,
        projectContext: `
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
          </div>`
      }
    }
  }
}
