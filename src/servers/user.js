const user = {
  install (Vue, options) {
    const userObj = {
      userData: {
        isLogin: false,
        selfId: '',
        userDetail: {}
      },
      get () {
        return this.userData
      },
      // 设置用户数据
      set (data) {
        console.log(this.userData)
        this.userData = {
          isLogin: true,
          selfId: data.selfId,
          userDetail: data.userDetail
        }
        console.log(this.userData)
      },
      // 移除用户数据
      remove () {
        this.userData = {
          isLogin: false,
          selfId: '',
          userDetail: {}
        }
      }
    }
    Vue.prototype.$User = userObj
  }
}

export default user
