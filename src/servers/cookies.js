import Cookies from 'js-cookie'

const tokenName = 'CowAuth'

const cookies = {
  install (Vue, options) {
    console.log(options)
    const cookiesObj = {
      // 获取cookie
      get (cookieName = tokenName) {
        let USI = Cookies.get(cookieName)
        if (USI) {
          USI = JSON.parse(USI)
        }
        return USI || {}
      },
      // data: 数据, isCover: 是否覆盖之前的
      set (data, isCover) {
        Cookies.set(tokenName, isCover ? JSON.stringify({
          token: data.token
        }) : Object.assign(this.get(), data))
      },
      //
      remove (isJump) {
        Cookies.remove(tokenName)
        // if (isJump) Vue.prototype.$Navigation.setPath('/', true)
      }
    }
    Vue.prototype.cookies = cookiesObj
  }
}

export default cookies
