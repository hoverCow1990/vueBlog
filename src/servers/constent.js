const IsPC = () => {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = Agents.find(agent => userAgentInfo.indexOf(agent) >= 0)
  return !flag
}

const HOSTS = {
  production: 'http://web-jackiee.com',
  development: 'http://localhost:8080'
}
const HOST = HOSTS[process.env.NODE_ENV]

const serverHosts = {
  production: 'http://web-jackiee.com',
  development: 'http://localhost:3000'
}
const serverHost = serverHosts[process.env.NODE_ENV]

const APIHOSTS = {
  production: 'https://web-jackiee.com',
  development: '/proxy/devApi'
}
const APIHOST = APIHOSTS[process.env.NODE_ENV]

const constent = {
  install (Vue, options) {
    console.log('------------------$constent------------------')
    Vue.prototype.$Constent = {
      host: HOST,
      serverHost: serverHost,
      isPc: IsPC(),
      lvConfig: [0, 150, 350, 700, 1400, 2800],
      api: {
        user: {
          info: APIHOST + '/user',  // 获取用户基础信息 检测是否登录
          userDetail: APIHOST + '/user/userDetail', // 获取用户详情
          regist: APIHOST + '/user/regist', // 注册
          login: APIHOST + '/user/login', // 登录
          logout: APIHOST + '/user/logout', // 登出
          updateUserDetail: APIHOST + '/user/uploadUserDetail', // 修改用户详情
          sign: APIHOST + '/user/sign', // 注册
          getUserList: APIHOST + 'user/getUserList' // 所有用户列表
        },
        message: {
          postMessage: APIHOST + '/message/postMessage'
        }
      }
    }
  }
}

export default constent
