<template>
  <div id="login" v-if='isShow' :class='isWrapperActive?"active":""'>
    <div class="login-box" :class='isBoxActive?"active":""'>
      <div class="login-type">
        <div class="type login" :class='loginType==="login"?"active":""' @click='changeType("login")'>登录</div>
        <div class="type register" :class='loginType==="register"?"active":""' @click='changeType("register")'>注册</div>
      </div>
      <div class="login-wrapper">
        <div class="login-container type-container" v-if='loginType==="login"'>
          <div class="input-content name">
            <label>用户名</label>
            <div class="input-box">
              <input type="text" key='login-id' v-model='loginData.id.val' placeholder="请输入您的用户名" :class='loginData.id.verified?"":"error"'>
            </div>
          </div>
          <div class="input-content password">
            <label>密码</label>
            <div class="input-box">
              <input type="text" key='login-password' v-model='loginData.password.val' placeholder="请输入您的密码" :class='loginData.password.verified?"":"error"'>
            </div>
          </div>
          <div class="rember">
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
          <div class="input-content name">
            <label>用户名</label>
            <div class="input-box">
              <input type="text"  key='reginter-id'  v-model='registerData.id.val' placeholder="请输入您的用户名" :class='registerData.id.verified?"":"error"'>
            </div>
          </div>
          <div class="input-content password">
            <label>密码</label>
            <div class="input-box">
              <input type="text" key='reginter-password' v-model='registerData.password.val' placeholder="请输入您的密码" :class='registerData.password.verified?"":"error"'>
            </div>
          </div>
          <div class="feature">
            <label>头像</label>
            <div class="input-box">
              <div class="feature-perviewer">
                <img :src="featureSrc">
                <input type="file" :accept="acceptsType" @change="handlerPhotoView">
              </div>
              <p>大小限制<span>50kb</span>以下</p>
            </div>
          </div>
          <div class="cow-btn-group submit-group">
            <div class="cow-btn primary" @click='handlerPhotoView'>立即注册</div>
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
        console.log()
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
    // 跳转类型
    changeType (type) {
      if (type === this.$data.loginType) return
      this.loginType = type
    },
    // 立即登录
    handlerSubmit () {
      let {loginData, isRember} = this.$data
      let {id, password} = loginData
      let isCanSubmit = this.verifyForm(id, password)
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
    // 验证表单的有效性
    verifyForm (id, password) {
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
    }
  }
}
</script>

<style lang='less'>
#login {
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  background-color: rgba(0, 0, 0, .8);
  z-index: 999;
  opacity: 0;
  transition: opacity .5s;
  &.active {
    opacity: 1;
  }
}
.login-box {
  @inputColor: #bfcbd9;
  position: absolute;
  width: 5rem;
  left: 50%;
  top: 20%;
  margin-left: -2.5rem;
  border-radius: 4px;
  overflow: hidden;
  transform: translate3d(0, -100px, 0);
  opacity: 0;
  transition: transform .5s, opacity .5s;
  &.active {
    transform: translate3d(0, 0, 0);
    opacity: 1;
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
  .login-wrapper {
    position: relative;
    height: 3rem;
    padding-top: .5rem;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fff;
  }
  .type-container {
    .input-content {
      display: flex;
      height: 36px;
      align-items: center;
      font-size: 14px;
      margin-bottom: 22px;
      label {
        width: 62px;
        box-sizing: border-box;
        vertical-align: middle;
        font-size: 14px;
        color: #48576a;
        line-height: 1;
        letter-spacing: 1px;
      }
    }
    .input-box {
      position: relative;
      flex: 1;
      font-size: 14px;
      width: 100%;
    }
    input {
      &[type='text'] {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 36px;
        padding: 3px 10px;
        appearance: none;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid @inputColor;
        font-family: 'microsoft YaHei';
        font-size: inherit;
        line-height: 1;
        outline: none;
        color: #1f2d3d;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      }
      &.error {
        border-color: #ff4949;
      }
    }
  }
  .submit-group {
    position: absolute;
    width: 240px;
    height: 36px;
    bottom: .3rem;
    left: 82px;
  }
  .rember {
    float: right;
    padding-top: .2rem;
    padding-right: 2px;
    .checkbox {
      position: relative;
      display: block;
      color: #1f2d3d;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    .checkbox-label {
      padding-left: 5px;
    }
    .checkbox-input {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      line-height: 1;
      outline: none;
      cursor: pointer;
      .input-inner {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid @inputColor;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        &:after {
          position: absolute;
          box-sizing: content-box;
          width: 4px;
          height: 8px;
          left: 5px;
          top: 1px;
          content: "";
          border: 2px solid #fff;
          border-left: 0;
          border-top: 0;
          transform: rotate(45deg) scaleY(0);
          transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
          transform-origin: center;
        }
      }
      &.checked {
        .input-inner {
          background-color: #20a0ff;
          border-color: #0190fe;
          &:after {
            transform: rotate(45deg) scaleY(1);
          }
        }
      }
      .checkbox {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        outline: none;
        margin: 0;
      }
    }
  }
  .feature {
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    font-size: 14px;
    label {
      width: 62px;
      box-sizing: border-box;
      vertical-align: middle;
      font-size: 14px;
      color: #48576a;
      line-height: 1;
      letter-spacing: 1px;
    }
    .input-box {
      display: flex;
      align-items: center;
    }
    .feature-perviewer {
      position: relative;
      display: flex;
      width: 66px;
      height: 66px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid @inputColor;
      cursor: pointer;
      &:after {
        content: '+';
        width: 20px;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        color: @inputColor;
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }
    p {
      padding-left: 10px;
      font-size: 13px;
      color: #999;
    }
    span {
      color: #0871bf;
      padding-left: 2px;
      padding-right: 2px;
    }
  }
}
@media screen and (max-width: 435px) {
  .login-box {
    width: 12rem;
    top: 10%;
    margin-left: -6rem;
    .login-wrapper {
      height: 280px;
      padding-top: .8rem;
    }
  }
}
</style>
