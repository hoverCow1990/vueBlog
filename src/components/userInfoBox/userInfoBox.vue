<template>
  <div class="cow-screen-mask" v-if='isShow' :class='isWrapperActive?"active":""'>
    <div class="cow-screen-form userInfo-box" :class='isBoxActive?"active":""'>
      <div class="form-wrapper">
        <div class="userInfo-container type-container">
          <p class="title"><i class="iconfont icon-zliconwarning01"></i>- 牛哥请你完善资料 -</p>
          <div class="cow-input-content">
            <label>github</label>
            <div class="input-box">
              <input type="text" v-model='inputList.git.val' placeholder="Github地址" :class="inputList.git.verified?'':'error'">
            </div>
          </div>
          <div class="cow-input-content">
            <label>博客主页</label>
            <div class="input-box">
              <input type="text" v-model='inputList.blog.val' placeholder="博客地址" :class="inputList.blog.verified?'':'error'">
            </div>
          </div>
          <div class="cow-input-content">
            <label class="require">qq账号</label>
            <div class="input-box">
              <input type="tele" v-model='inputList.qq.val' placeholder="请输入qq号" :class="inputList.qq.verified?'':'error'">
            </div>
          </div>
          <div class="cow-input-content">
            <label class="require">自我描述</label>
            <div class="input-box">
              <input type="text" v-model='inputList.introduce.val' placeholder="一句话描述自己的爱好(6-40字)" :class="inputList.introduce.verified?'':'error'">
            </div>
          </div>
          <div class="cow-checkBox-content">
            <label class="require">掌握技能</label>
            <div class="checkList">
              <div>
                <input type="checkbox" id="html" value="html" v-model="talentList">
                <label for="html">html</label>
              </div>
              <div>
                <input type="checkbox" id="css" value="css" v-model="talentList">
                <label for="css">css</label>
              </div>
              <div>
                <input type="checkbox" id="js" value="javascript" v-model="talentList">
                <label for="javascript">js</label>
              </div>
              <div>
                <input type="checkbox" id="es6" value="es6" v-model="talentList">
                <label for="es6">es6</label>
              </div>
              <div>
                <input type="checkbox" id="jq" value="jquery" v-model="talentList">
                <label for="jquery">jquery</label>
              </div>
              <div>
                <input type="checkbox" id="backbone" value="backbone" v-model="talentList">
                <label for="backbone">backbone</label>
              </div>
              <div>
                <input type="checkbox" id="boots" value="boots" v-model="talentList">
                <label for="boots">boots</label>
              </div>
              <div>
                <input type="checkbox" id="vue" value="vue" v-model="talentList">
                <label for="vue">vue</label>
              </div>
              <div>
                <input type="checkbox" id="angular" value="angular" v-model="talentList">
                <label for="backbone">angular</label>
              </div>
              <div>
                <input type="checkbox" id="wechat" value="react" v-model="talentList">
                <label for="wechat">react</label>
              </div>
              <div>
                <input type="checkbox" id="less" value="less" v-model="talentList">
                <label for="less">less</label>
              </div>
              <div>
                <input type="checkbox" id="wechat" value="wechat" v-model="talentList">
                <label for="wechat">wechat</label>
              </div>
              <div>
                <input type="checkbox" id="webpack" value="webpack" v-model="talentList">
                <label for="webpack">webpack</label>
              </div>
              <div>
                <input type="checkbox" id="gulp" value="gulp" v-model="talentList">
                <label for="gulp">gulp</label>
              </div>
              <div>
                <input type="checkbox" id="ps" value="ps" v-model="talentList">
                <label for="ps">ps</label>
              </div>
              <div>
                <input type="checkbox" id="node" value="node" v-model="talentList">
                <label for="node">node</label>
              </div>
              <div>
                <input type="checkbox" id="java" value="java" v-model="talentList">
                <label for="java">java</label>
              </div>
              <div>
                <input type="checkbox" id="php" value="php" v-model="talentList">
                <label for="php">php</label>
              </div>
              <div>
                <input type="checkbox" id="python" value="python" v-model="talentList">
                <label for="python">python</label>
              </div>
              <div>
                <input type="checkbox" id="mongodb" value="mongodb" v-model="talentList">
                <label for="mongodb">mongodb</label>
              </div>
              <div>
                <input type="checkbox" id="mysql" value="mysql" v-model="talentList">
                <label for="mysql">mysql</label>
              </div>
            </div>
          </div>
          <div class="cow-btn-group submit-group">
            <cow-btn type="primary" @click='handlerSubmit' :isLoading="isRequestLoading">立刻发布</cow-btn>
            <cow-btn @click='hiddenInfoBox' :isDisabled="isRequestLoading">取消</cow-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoBox',
  props: {
    // 是否显示
    isShow: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isBoxActive: false,
      isWrapperActive: false,
      inputList: {
        introduce: {
          val: '',
          verified: true
        },
        blog: {
          val: '',
          verified: true
        },
        git: {
          val: '',
          verified: true
        },
        qq: {
          val: '',
          verified: true
        }
      },
      talentList: ['html', 'css', 'javascript'],
      isRequestLoading: false
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        this.showInfoBox()
      }
    }
  },
  methods: {
    // 显示所有
    showInfoBox () {
      setTimeout(() => {
        this.$data.isWrapperActive = true
      })
      setTimeout(() => {
        this.$data.isBoxActive = true
      }, 300)
    },
    // 隐藏所有
    hiddenInfoBox () {
      this.$data.isBoxActive = false
      setTimeout(() => {
        this.$data.isWrapperActive = false
      }, 300)
      setTimeout(() => {
        this.$emit('hiddenInfoBoxShow')
      }, 800)
    },
    // 提交表单
    handlerSubmit () {
      if (this.$data.isRequestLoading) return
      this.$data.isRequestLoading = true
      const isCanSubmit = this.validateVal()
      if (isCanSubmit.statue) {
        this.$Http({
          url: this.$Constent.api.user.updateUserDetail,
          method: 'POST',
          data: isCanSubmit.data
        }).then(res => {
          res = res.body
          if (res.statue) {
            this.$emit('update', res)
          }
          this.$data.isRequestLoading = false
        }).catch(() => {
          this.$data.isRequestLoading = false
        })
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
        this.$data.isRequestLoading = false
      }
    },
    validateVal () {
      let {inputList, talentList} = this.$data
      let {git, blog, qq, introduce} = inputList
      if (git.val && !/^https?:\/\/github.com\/.{1,20}/.test(git.val)) {
        this.$data.inputList.git.verified = false
        return {
          statue: false,
          msg: 'github地址格式有误'
        }
      } else {
        this.$data.inputList.git.verified = true
      }
      if (blog.val && !/^(https?:\/\/|w{3}\.).{5,33}/.test(blog.val)) {
        this.$data.inputList.blog.verified = false
        return {
          statue: false,
          msg: '博客地址格式有误'
        }
      } else {
        this.$data.inputList.blog.verified = true
      }
      if (!qq.val) {
        this.$data.inputList.qq.verified = false
        return {
          statue: false,
          msg: 'qq账号为必填项'
        }
      } else {
        if (!/^\d{4,15}$/.test(qq.val)) {
          this.$data.inputList.qq.verified = false
          return {
            statue: false,
            msg: 'qq账号格式错误'
          }
        } else {
          this.$data.inputList.qq.verified = true
        }
      }
      if (!introduce.val) {
        this.$data.inputList.introduce.verified = false
        return {
          statue: false,
          msg: '简单描述必填项'
        }
      } else {
        if (introduce.val.length >= 41 | introduce.val.length < 6) {
          this.$data.inputList.introduce.verified = false
          return {
            statue: false,
            msg: '简单描述范围在6至40字'
          }
        } else if (/^\d+$/.test(introduce.val)) {
          this.$data.inputList.introduce.verified = false
          return {
            statue: false,
            msg: '请认真填写简单描述'
          }
        } else {
          this.$data.inputList.introduce.verified = true
        }
      }
      if (talentList.length < 3) {
        return {
          statue: false,
          msg: '掌握技能至少选择3项'
        }
      }
      return {
        statue: true,
        data: {
          git: git.val || '',
          blog: blog.val || '',
          qq: qq.val,
          introduce: introduce.val,
          talent: talentList.join(',')
        }
      }
    }
  }
}
</script>

<style lang='less'>
.userInfo-box {
  .title {
    font-size: 14px;
    padding-bottom: 8px;
    letter-spacing: 1px;
    text-align: right;
    color: #20a0ff;
    i {
      padding-right: 5px;
    }
  }
}
.cow-screen-form.userInfo-box {
  top: 3%;
  .form-wrapper {
    height: 485px;
    padding-left: 24px;
    padding-top: 10px;
  }
  .cow-input-content {
    margin-bottom: 22px;
  }
  .cow-checkBox-content {
    padding-top: 3px;
  }
  .cow-input-content label,
  .cow-checkBox-content label {
    min-width: 70px;
  }
  .submit-group {
    left: 94px;
    bottom: 20px;
  }
}

@media screen and (max-width:435px){
  .cow-screen-form.userInfo-box {
    top: 2%;
    .form-wrapper {
     min-height: 520px;
   }
  }
}
</style>
