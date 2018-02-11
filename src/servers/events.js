/* 全局事件监听器 */
const events = {
  install (Vue) {
    const eventsObj = {
      loginData: {
        callbackList: [],
        '$on' (self, callback) {
          this.currentObj = self
          this.callbackList.push(callback)
          self.$off('loginData.status')
          self.$on('loginData.status', (isLogin, data) => {
            this.callbackList.forEach(fn => fn(isLogin, data))
          })
        },
        '$emit' (isLogin, data) {
          if (this.currentObj) {
            this.currentObj.$emit('loginData.status', isLogin, data)
          }
        }
      }
    }
    Vue.prototype.$Events = eventsObj
  }
}

export default events
