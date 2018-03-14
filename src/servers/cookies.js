import Cookies from 'js-cookie'

const tokenName = 'CowAuth'

const cookies = {
  install (Vue, options) {
    const cookiesObj = {
      // 获取cookie或者localStorage
      get (cookieName = tokenName) {
        let resData

        // 有本地数据库的情况
        if (localStorage) {
          let localData = localStorage.getItem(cookieName)
          resData = JSON.parse(localData)
        } else {
          let cookieData = Cookies.get(cookieName)
          resData = JSON.parse(cookieData)
        }

        return resData || {} // 优先取localStorage 再是cookie
      },
      // data: 数据, isCover: 是否覆盖之前的
      set (data, name = tokenName, isCover = false) {
        let saveData = isCover ? data : Object.assign(this.get(), data)
        saveData = JSON.stringify(saveData)
        Cookies.set(name, saveData)
        localStorage && localStorage.setItem(name, saveData)
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
