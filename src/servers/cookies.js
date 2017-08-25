import Cookies from 'js-cookie'

const tokenName = 'CowAuth'

const cookies = {
  install (Vue, options) {
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
      set (data, name = tokenName, isCover = false) {
        Cookies.set(name, isCover ? JSON.stringify(data) : Object.assign(this.get(), data))
      },
      //
      remove (name = tokenName) {
        Cookies.remove(name)
      }
    }
    Vue.prototype.$Cookies = cookiesObj
  }
}

export default cookies
