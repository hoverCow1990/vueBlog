const IsPC = () => {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = Agents.find(agent => userAgentInfo.indexOf(agent) >= 0)
  return !flag
}

const HOSTS = {
  production: 'http://web-jackiee.com',
  development: 'http://localhost:3000'
}
const HOST = HOSTS[process.env.NODE_ENV]

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
      isPc: IsPC(),
      api: {
        user: {
          info: APIHOST + '/user',
          regist: APIHOST + '/user/regist',
          login: APIHOST + '/user/login',
          logout: APIHOST + '/user/logout'
        }
      }
    }
  }
}

export default constent
