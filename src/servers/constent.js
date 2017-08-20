const IsPC = () => {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = Agents.find(agent => userAgentInfo.indexOf(agent) >= 0)
  return !flag
}

const HOSTS = {
  production: 'https://web-jackiee.com',
  development: '/proxy/devApi'
}

const HOST = HOSTS[process.env.NODE_ENV]

const constent = {
  install (Vue, options) {
    console.log('------------------$constent------------------')
    Vue.prototype.$Constent = {
      isPc: IsPC(),
      api: {
        user: {
          info: HOST + '/user',
          regist: HOST + '/user/regist',
          login: HOST + '/user/login'
        }
      }
    }
  }
}

export default constent
