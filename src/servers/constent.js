const IsPC = () => {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = Agents.find(agent => userAgentInfo.indexOf(agent) >= 0)
  return !flag
}

const constent = {
  install (Vue, options) {
    console.log('------------------$constent------------------')
    Vue.prototype.$constent = {
      isPc: IsPC()
    }
  }
}

export default constent
