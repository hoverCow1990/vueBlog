<template>
  <div class="cow-screen-mask" v-if='isShow' :class='isWrapperActive?"active":""'>
    <div class="cow-screen-form login-box" :class='isBoxActive?"active":""'>
      <div class="login-type">
        <div class="type login" :class='loginType==="login"?"active":""' @click='changeType("login")'>登录</div>
        <div class="type register" :class='loginType==="register"?"active":""' @click='changeType("register")'>注册</div>
      </div>
      <div class="form-wrapper">
        <div class="login-container type-container" v-if='loginType==="login"'>
          <div class="cow-input-content name">
            <label>用户名</label>
            <div class="input-box">
              <input type="text" autocapitalize="off" key='login-id' v-model='loginData.id.val' placeholder="请输入您的用户名" :class='loginData.id.verified?"":"error"'>
            </div>
          </div>
          <div class="cow-input-content password">
            <label>密码</label>
            <div class="input-box">
              <input type="text" autocapitalize="off" key='login-password' @keyup.enter='handlerLogin' v-model='loginData.password.val' placeholder="请输入您的密码" :class='loginData.password.verified?"":"error"'>
            </div>
          </div>
          <div class="cow-rember">
            <label class="checkbox">
              <span class="checkbox-input" :class='isRember?"checked":""'>
                <span class="input-inner"></span>
                <input type="checkbox" class="checkbox" v-model='isRember'>
              </span>
              <span class="checkbox-label">记住我</span>
            </label>
          </div>
          <div class="cow-btn-group submit-group">
            <cow-btn type="primary" @click='handlerLogin' :isLoading="isRequestLoading">立刻登录</cow-btn>
            <cow-btn type="default" @click='hiddenLogin' :isDisabled="isRequestLoading">取消</cow-btn>
          </div>
        </div>
        <div class="reginter-container type-container" v-else>
          <div class="cow-input-content name">
            <label>用户名</label>
            <div class="input-box">
              <input type="text" autocapitalize="off"  key='reginter-id' v-model='registerData.id.val' placeholder="请输入您的用户名" :class='registerData.id.verified?"":"error"' maxlength="10">
            </div>
          </div>
          <div class="cow-input-content password">
            <label>密码</label>
            <div class="input-box">
              <input type="text" autocapitalize="off" key='reginter-password' v-model='registerData.password.val' placeholder="请输入您的密码 (位数5~15位)" :class='registerData.password.verified?"":"error"' maxlength="15">
            </div>
          </div>
          <div class="cow-upload-content feature">
            <label>头像</label>
            <div class="input-box">
              <div class="feature-perviewer" :class='registerData.feature.verified?"":"error"'>
                <img :src="featureSrc" :class="featureSrc?'active':''">
                <input type="file" :accept="acceptsType" @change="handlerPhotoView">
              </div>
              <p class="exp">请上传<span>jpg</span>类型的图</p>
            </div>
          </div>
          <div class="cow-btn-group submit-group">
            <cow-btn type="primary" @click='handlerRegist' :isLoading="isRequestLoading">立即注册</cow-btn>
            <cow-btn type="default" @click='hiddenLogin' :isDisabled="isRequestLoading">取消</cow-btn>
          </div>
        </div>
      </div>
      <div class="crop-btns" v-if="isShowCropper">
        <cow-btn type="primary" @click='changeCropType' :isLoading="isRequestLoading">{{ cropChangeBtnText }}</cow-btn>
        <cow-btn type="primary" @click='cropOk' :isLoading="isRequestLoading">确定</cow-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginBox',
  data () {
    return {
      cropType: 1, // 0 放大缩小 1截图
      cropData: '',
      isShowCropper: false,
      isBoxActive: false,
      isWrapperActive: false,
      acceptsType: ['image/jpeg', 'image/jpg'],
      maxSize: 2000000,
      featureSrc: '',
      featureFlag: [String, Number],
      fileData: '',
      isRequestLoading: false,
      clickSpaceTime: new Date(),
      loginData: {
        id: {
          val: '',
          verified: true
        },
        password: {
          val: '',
          verified: true
        }
      },
      registerData: {
        id: {
          val: '',
          verified: true
        },
        password: {
          val: '',
          verified: true
        },
        feature: {
          val: '',
          verified: true
        }
      },
      isRember: false
    }
  },
  props: {
    value: String,
    // 是否显示
    isShow: {
      type: Boolean,
      required: true
    },
    // 初始化的类型
    initloginType: {
      type: String
    }
  },
  computed: {
    cropChangeBtnText () {
      let cropType = this.$data.cropType
      let isPc = this.$Constent.isPc
      if (cropType) {
        return isPc ? '图片挪动' : '图片缩放'
      } else {
        return '开始截图'
      }
    },
    loginType: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    isShow (val) {
      if (!this.$Constent.isPc) { // 解决ios的输入框往光标下掉的问题
        let bodyClass = val ? 'fixed' : ''
        document.body.className = bodyClass
      }
      if (val) {
        this.initialData()
        this.showLogin()
      }
    }
  },
  methods: {
    // 切换crop操作类型
    changeCropType () {
      let { cropType } = this.$data
      if (cropType) {
        this.$Constent.cropper.stopCrop()
        this.$data.cropType = 0
      } else {
        this.$Constent.cropper.startCrop()
        this.$data.cropType = 1
      }
    },
    // 完成截图
    cropOk () {
      if (this.$Constent.cropper.$data.cropW < 100) {
        this.$message({
          type: 'err',
          message: '图像至少100px以上'
        })
        return
      }
      this.$Constent.cropper.getCropData((data) => {
        this.$data.featureSrc = data
        this.$data.cropData = data
        this.$Constent.cropper.$parent.$data.cropper.img = ''
        this.$Constent.cropper.$parent.$data.cropper.isShow = false
        this.$data.isShowCropper = false
      })
    },
    // 初始化状态
    initialData () {
      let cookies = this.$Cookies.get()
      if (cookies && cookies.user) {
        this.$data.loginData.id.val = cookies.user
        this.$data.isRember = true
      }
    },
    // 显示所有
    showLogin () {
      setTimeout(() => {
        this.$data.isWrapperActive = true
      })
      setTimeout(() => {
        this.$data.isBoxActive = true
      }, 300)
    },
    // 隐藏所有
    hiddenLogin () {
      this.$data.isBoxActive = false
      setTimeout(() => {
        this.$data.isWrapperActive = false
      }, 300)
      setTimeout(() => {
        this.$emit('hiddenLoginBox')
      }, 800)
    },
    // 渲染头像图
    handlerPhotoView (ev) {
      let file = event.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.$Constent.cropper.$parent.$data.cropper.img = e.target.result
        this.$Constent.cropper.$parent.$data.cropper.isShow = true
        this.$Constent.cropper.startCrop()
        this.$data.isShowCropper = true
      }
    },
    // 跳转类型
    changeType (type) {
      if (type === this.$data.loginType || this.$data.isRequestLoading) return
      this.loginType = type
    },
    convertBase64UrlToBlob (urlData) {
      let bytes = window.atob(urlData.split(',')[1])  // 去掉url的头，并转换为byte
      var ab = new ArrayBuffer(bytes.length)  // 处理异常,将ascii码小于0的转换为大于0
      var ia = new Uint8Array(ab)
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i)
      }
      return new Blob([ab], {type: 'image/jpeg'})
    },
    // 处理注册
    handlerRegist () {
      if (this.$data.isRequestLoading) return
      let registerData = this.$data.registerData
      let {id, password, feature} = registerData
      let isCanSubmit = this.verifyRegistForm(id, password, feature)
      if (isCanSubmit.res) {
        this.$data.isRequestLoading = true
        const formData = new FormData()
        formData.append('file', this.convertBase64UrlToBlob(this.$data.cropData))
        formData.append('name', id.val)
        formData.append('password', password.val)
        this.$Http({
          url: this.$Constent.api.user.regist,
          method: 'POST',
          data: formData
        }).then(res => {
          res = res.body
          if (res.statue) {
            this.$message({
              type: 'success',
              message: '恭喜你注册为老牛会员'
            })
            this.hiddenLogin()
            this.$data.cropData = ''
            this.$Events.loginData.$emit(true, res.userDetail)
            this.clearValue('regist')
            this.$data.isRequestLoading = false
            this.$router.push('/admin')
          } else {
            this.$message({
              type: 'err',
              message: res.msg
            })
            this.$data.isRequestLoading = false
          }
        }).catch(() => {
          this.$data.isRequestLoading = false
        })
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
      }
    },
    // 立即登录
    handlerLogin () {
      let nowTime = new Date()
      if (this.$data.isRequestLoading || (nowTime - this.$data.clickSpaceTime < 800)) return
      let {loginData, isRember} = this.$data
      let {id, password} = loginData
      let isCanSubmit = this.verifyLoginForm(id, password)
      let route = this.$route
      let postData = {name: id.val, password: password.val}
      if (route.path.startsWith('/article')) {
        postData = {
          ...postData,
          articleId: route.params.id
        }
      }
      if (isCanSubmit.res) {
        this.$data.isRequestLoading = true
        this.$data.clickSpaceTime = nowTime // 不能狂发请求
        this.$Http({
          url: this.$Constent.api.user.login,
          method: 'POST',
          data: postData
        }).then(res => {
          res = res.body
          if (res.statue) {
            this.$message({
              type: 'success',
              message: res.msg
            })
            this.hiddenLogin()
            this.$Events.loginData.$emit(true, res.userDetail)
            this.$data.isRequestLoading = false
            this.clearValue('login')
            if (isRember) {
              this.$Cookies.set({
                user: id.val,
                isRember: true
              })
            } else {
              this.$Cookies.remove()
            }
            this.$emit('loginSuccess')
            if (this.$route.path === '/') this.$router.push('/admin')
          } else {
            this.$message({
              type: 'err',
              message: res.msg
            })
            this.$data.isRequestLoading = false
          }
        }).catch(() => {
          this.$data.isRequestLoading = false
        })
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
      }
    },
    // 登陆后清空数据
    clearValue (type) {
      if (type === 'login') {
        this.$data.loginData = {id: {val: '', verified: true}, password: {val: '', verified: true}}
      } else {
        this.$data.registData = {id: {val: '', verified: true}, password: {val: '', verified: true}, feature: {val: '', verified: true}}
        this.$data.featureSrc = ''
        this.$data.fileData = ''
      }
    },
    // 验证登录表单的有效性
    verifyLoginForm (id, password) {
      let res = true
      let msg = ''
      if (id.val.trim() === '') {
        id.verified = false
        res = false
        msg = '用户名'
      } else {
        id.verified = true
      }
      if (password.val.trim() === '') {
        password.verified = false
        res = false
        msg += msg.length ? '及密码' : '密码'
      } else {
        password.verified = true
      }
      return {
        res,
        msg: msg + '不能为空'
      }
    },
    // 验证注册表单的有效性
    verifyRegistForm (id, password, feature) {
      let res = true
      if (id.val.trim() === '') {
        id.verified = false
        return {
          res: false,
          msg: '用户名不能为空'
        }
      } else if (/^\d+$/.test(id.val)) {
        id.verified = false
        return {
          res: false,
          msg: '用户名不能纯数字'
        }
      } else if (id.val.length > 10) {
        id.verified = false
        return {
          res: false,
          msg: '用户名最长10位'
        }
      } else {
        id.verified = true
      }
      if (password.val.trim() === '') {
        password.verified = false
        return {
          res: false,
          msg: '密码不能为空'
        }
      } else if (/[\u4e00-\u9fa5]/g.test(password.val)) {
        password.verified = false
        return {
          res: false,
          msg: '密码不能存在中文'
        }
      } else if (password.val.length < 5 || password.val.length > 15) {
        password.verified = false
        return {
          res: false,
          msg: '密码位数在5~10位'
        }
      } else {
        password.verified = true
      }
      if (!this.$data.featureSrc) {
        feature.verified = false
        return {
          res: false,
          msg: '请上传你的头像'
        }
      } else {
        feature.verified = true
      }
      return {
        res
      }
    }
  }
}
</script>

<style lang='less'>
.crop-btns {
  display: flex;
  position: absolute;
  align-items: center;
  width: 5rem;
  bottom: .3rem;
  left: 82px;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  direction: ltr;
  -ms-touch-action: none;
  touch-action: none;
  z-index: 999999;
}
.login-box {
  input {
    font-family: 'Arial', 'Microsoft Yahei';
  }
  .login-type {
    display: flex;
    font-size: 15px;
    letter-spacing: 2px;
    .type {
      flex: 1;
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
      background-color: #f5f5f5;
      cursor: pointer;
      transition: background-color .25s;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
