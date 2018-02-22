const IsPC = () => {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = Agents.find(agent => userAgentInfo.indexOf(agent) >= 0)
  return !flag
}

const HOSTS = {
  production: 'http://www.web-jackiee.com',
  development: 'http://localhost:8080'
}

const HOST = HOSTS[process.env.NODE_ENV]

const serverHosts = {
  production: 'http://www.web-jackiee.com',
  development: 'http://localhost:3001'
}

const serverHost = serverHosts[process.env.NODE_ENV]

const APIHOSTS = {
  production: 'http://www.web-jackiee.com',
  development: '/proxy/devApi'
}
const APIHOST = APIHOSTS[process.env.NODE_ENV]

const constent = {
  install (Vue, options) {
    // console.log('------------------$constent------------------')
    Vue.prototype.$Constent = {
      host: HOST,
      serverHost: serverHost,
      isPc: IsPC(),
      lvConfig: [0, 350, 1000, 2300, 4200, 7200],
      api: {
        user: {
          info: APIHOST + '/user',  // 获取用户基础信息 检测是否登录
          userDetail: APIHOST + '/user/userDetail', // 获取用户详情
          regist: APIHOST + '/user/regist', // 注册
          login: APIHOST + '/user/login', // 登录
          logout: APIHOST + '/user/logout', // 登出
          updateUserDetail: APIHOST + '/user/uploadUserDetail', // 修改用户详情
          sign: APIHOST + '/user/sign', // 签到
          getUserList: APIHOST + '/user/getUserList', // 所有用户列表
          upProuctFile: APIHOST + '/user/upProuctFile', // 用户上传作品文件
          upProuctUrl: APIHOST + '/user/upProuctUrl', // 用户通过地址上传作品
          changeArticleColorType: APIHOST + '/user/changeArticleColorType' // 切换文章白昼夜间模式
        },
        message: {
          postMessage: APIHOST + '/message/postMessage', // 提交留言
          getMessageList: APIHOST + '/message/getMessage', // 获取留言列表
          postArticleMessage: APIHOST + '/message/postArticleMessage', // 提交文章页留言
          getArticleMessage: APIHOST + '/message/getArticleMessage' // 获取文章页留言
        },
        category: {
          getList: APIHOST + '/category/getList' // 获取栏目以及子栏目
        },
        article: {
          getArtcleList: APIHOST + '/article/getArticleList', // 获取文章列表
          searchArtcleList: APIHOST + '/article/searchArticleList', // 搜索文章列表
          getArtcle: APIHOST + '/article/getArticle', // 获取文章
          getSortArticleList: APIHOST + '/article/getSortArticleList', // 获取排序后的文章
          loveAndCollectArticle: APIHOST + '/article/loveAndCollectArticle', // 点赞或者收藏
          stopLoveAndCollectArticle: APIHOST + '/article/stopLoveAndCollectArticle' // 取消点赞或者收藏
        }
      }
    }
  }
}

export default constent
