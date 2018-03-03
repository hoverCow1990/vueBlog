
/* 全局事件监听器 */
const events = {
  install (Vue) {
    const eventsObj = {
      loginData: {
        currentObj: [],
        callbackList: [],
        comType: [],
        timer: new Date() - 1000, // 防止首次登录少于200ms
        '$on' (self, callback, type) {
          let spliceIndex = this.comType.findIndex(item => type === item)
          if (spliceIndex !== -1) {
            this.currentObj.splice(spliceIndex, 1)
            this.callbackList.splice(spliceIndex, 1)
            this.comType.splice(spliceIndex, 1)
          }
          this.currentObj.push(self)
          this.callbackList.push(callback)
          this.comType.push(type)
          self.$off('loginData.status')
          self.$on('loginData.status', (isLogin, data) => {
            let nowTime = new Date()
            if (nowTime - this.timer < 200) return
            this.timer = new Date()
            this.callbackList.forEach(fn => fn(isLogin, data))
          })
        },
        '$emit' (isLogin, data) {
          if (this.currentObj.length) {
            this.currentObj.forEach(component => {
              component.$emit('loginData.status', isLogin, data)
            })
          }
        }
      }
    }
    Vue.prototype.$Events = eventsObj
  }
}

export default events
