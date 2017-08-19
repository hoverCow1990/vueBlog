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
              <input type="text" key='login-id' v-model='loginData.id.val' placeholder="请输入您的用户名" :class='loginData.id.verified?"":"error"'>
            </div>
          </div>
          <div class="cow-input-content password">
            <label>密码</label>
            <div class="input-box">
              <input type="text" key='login-password' v-model='loginData.password.val' placeholder="请输入您的密码" :class='loginData.password.verified?"":"error"'>
            </div>
          </div>
          <div class="cow-rember">
            <label class="checkbox">
              <span class="checkbox-input" :class='isRember?"checked":""'>
                <span class="input-inner"></span>
                <input type="checkbox" class="checkbox" v-model='isRember'>
              </span>
              <span class="checkbox-label">记住在下</span>
            </label>
          </div>
          <div class="cow-btn-group submit-group">
            <div class="cow-btn primary" @click='handlerSubmit'>立刻登录</div>
            <div class="cow-btn default" @click='hiddenLogin'>取消</div>
          </div>
        </div>
        <div class="reginter-container type-container" v-else>
          <div class="cow-input-content name">
            <label>用户名</label>
            <div class="input-box">
              <input type="text"  key='reginter-id'  v-model='registerData.id.val' placeholder="请输入您的用户名" :class='registerData.id.verified?"":"error"'>
            </div>
          </div>
          <div class="cow-input-content password">
            <label>密码</label>
            <div class="input-box">
              <input type="text" key='reginter-password' v-model='registerData.password.val' placeholder="请输入您的密码(5位以上)" :class='registerData.password.verified?"":"error"'>
            </div>
          </div>
          <div class="cow-upload-content feature">
            <label>头像</label>
            <div class="input-box">
              <div class="feature-perviewer" :class='registerData.feature.verified?"":"error"'>
                <img :src="featureSrc" :class="featureSrc?'active':''">
                <input type="file" :accept="acceptsType" @change="handlerPhotoView">
              </div>
              <p class="exp">1:1像素,大小<span>50kb</span>以下</p>
            </div>
          </div>
          <div class="cow-btn-group submit-group">
            <div class="cow-btn primary" @click='handlerRegist'>立即注册</div>
            <div class="cow-btn default" @click='hiddenLogin'>取消</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  props: {
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
  data () {
    return {
      loginType: 'login',
      isBoxActive: false,
      isWrapperActive: false,
      acceptsType: ['image/jpeg,image/jpg,image/png,image/gif'],
      maxSize: 30000,
      featureSrc: '',
      featureFlag: [String, Number],
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
  watch: {
    isShow (val) {
      if (val) {
        this.showLogin()
      }
    }
  },
  created () {
    if (this.initloginType) this.loginType = this.initloginType
  },
  methods: {
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
    handlerPhotoView (ev) {
      let file = event.target.files[0]
      // let featureFlag = this.$data.featureFlag
      console.log(file)
      if (!file) return
      if (file.size > this.$data.maxSize) {
        this.$message({
          type: 'err',
          message: '图片不能超过50kb'
        })
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.$data.featureSrc = e.target.result
      }
      // this.$data.featureSrc = imageUrl // 在预览区域插入图片
                //     //filter file, 文件大小,类型等过滤
                //     //如果是图片文件
                //     // const reader = new FileReader()
                //     // const imageUrl = reader.readAsDataURL(file)
                //     // img.src = imageUrl //在预览区域插入图片
                //
                //     const formData = new FormData()
                //     formData.append('file', file)
                //
                //     //获取token
                //     this.$http.get(`/api/token/`)
                //     .then(response => {
                //         const result = response.body
                //         formData.append('token', result.token)
                //         formData.append('key', result.key)
                //         //提交给七牛处理
                //         self.$http.post('https://up.qbox.me/', formData, {
                //             progress(event) {
                //                 //传递给父组件的progress方法
                //                 self.$emit('progress', parseFloat(event.loaded / event.total * 100), flag)
                //             }
                //         })
                //         .then(response => {
                //             const result = response.body
                //             if (result.hash && result.key) {
                //                 //传递给父组件的complete方法
                //                 self.$emit('complete', 200 , result, flag)
                //                 //让当前target可以重新选择
                //                 event.target.value = null
                //             } else {
                //                 self.$emit('complete', 500, result, flag)
                //             }
                //         }, error => self.$emit('complete', 500, error.message), flag)
                //     })
                // }
    },
    handlerRegist () {
      let registerData = this.$data.registerData
      let {id, password, feature} = registerData
      let isCanSubmit = this.verifyRegistForm(id, password, feature)
      if (isCanSubmit.res) {
        this.$Http({
          url: this.$Constent.api.user.regist,
          method: 'POST',
          data: {
            id: id.val,
            password: password.val
          }
        }).then(res => {
          console.log(res)
        })
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
      }
    },
    // 跳转类型
    changeType (type) {
      if (type === this.$data.loginType) return
      this.loginType = type
    },
    // 立即登录
    handlerSubmit () {
      let {loginData, isRember} = this.$data
      let {id, password} = loginData
      let isCanSubmit = this.verifyLoginForm(id, password)
      if (isCanSubmit.res) {
        // console.log('ok')
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
      }
      console.log(isRember)
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
      } else {
        if (/^\d+$/.test(id.val)) {
          id.verified = false
          return {
            res: false,
            msg: '用户名不能纯数字'
          }
        } else {
          id.verified = true
        }
      }
      if (password.val.trim() === '') {
        password.verified = false
        return {
          res: false,
          msg: '密码不能为空'
        }
      } else {
        password.verified = true
      }
      // if (!this.$data.featureSrc) {
      //   feature.verified = false
      //   return {
      //     res: false,
      //     msg: '请上传你的头像'
      //   }
      // } else {
      //   feature.verified = true
      // }
      return {
        res
      }
    }
  }
}
</script>

<style lang='less'>
.login-box {
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
