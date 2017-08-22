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
      api: {
        user: {
          info: APIHOST + '/user',
          userDetail: APIHOST + '/user/userDetail',
          regist: APIHOST + '/user/regist',
          login: APIHOST + '/user/login',
          logout: APIHOST + '/user/logout',
          updateUserDetail: APIHOST + '/user/uploadUserDetail',
          sign: APIHOST + '/user/sign',
          getUserList: APIHOST + 'user/getUserList'
        }
      }
    }
  }
}

export default constent
