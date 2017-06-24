<template>
  <div class="cow-screen-mask" v-if='isShow' :class='isWrapperActive?"active":""'>
    <div class="cow-screen-form upload-box" :class='isBoxActive?"active":""'>
      <div class="form-wrapper">
        <div class="upload-container type-container">
          <div class="cow-input-content name">
            <label>作品名</label>
            <div class="input-box">
              <input type="text" v-model='fileName.val' placeholder="请输入文件名" :class="fileName.verified?'':'error'">
            </div>
          </div>
          <div class="cow-upload-content file">
            <label>文件</label>
            <div class="input-box">
              <div class="file-btn" :class="fileVerified?'':'error'">
                <p class='inner'><i class="icon-font icon-xiazai"></i>选择文件</p>
                <input type="file" accept="" @change="handlerFilePerviewer"></div>
                <p class="exp" v-html="fileShowName"></p>
              </div>
            </div>
          </div>
          <p class="upload-des">请上传 zip / rar 格式的项目文件,上传后请主动通知牛哥,我会将你的作品展示在你的用户中心,以供他人一起观看</p>
          <div class="cow-btn-group submit-group">
            <div class="cow-btn primary" @click='handlerSubmit'>立刻登录</div>
            <div class="cow-btn default" @click='hiddenUpload'>取消</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadBox',
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
      acceptsType: 'zip',
      maxSize: 500000,
      featureFlag: [String, Number],
      fileName: {
        val: '',
        verified: true
      },
      fileVerified: true,
      fileShowName: '大小限制<span>3Mb</span>以下'
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        this.showUpload()
      }
    }
  },
  methods: {
    handlerFilePerviewer () {
      let file = event.target.files[0]
      if (!file) return
      if (!/.+\.(rar|zip)$/.test(file.name)) {
        this.$data.fileVerified = false
        this.$message({
          type: 'err',
          message: '文件需要rar或是zip格式'
        })
        return
      } else {
        this.$data.fileShowName = file.name
        this.$data.fileVerified = true
      }
      if (file.size > this.$data.maxSize) {
        this.$message({
          type: 'err',
          message: '文件不能超过5mb'
        })
        return
      }
    },
    // 显示所有
    showUpload () {
      setTimeout(() => {
        this.$data.isWrapperActive = true
      })
      setTimeout(() => {
        this.$data.isBoxActive = true
      }, 300)
    },
    // 隐藏所有
    hiddenUpload () {
      this.$data.isBoxActive = false
      setTimeout(() => {
        this.$data.isWrapperActive = false
      }, 300)
      setTimeout(() => {
        this.$emit('hiddenUploadBox')
      }, 800)
    },
    // 立即上传
    handlerSubmit () {
      let fileName = this.$data.fileName
      let isCanSubmit = this.verifyForm(fileName)
      if (isCanSubmit.res) {
        // console.log('ok')
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
      }
    },
    // 验证表单的有效性
    verifyForm (fileName) {
      let res = true
      let msg = ''
      if (fileName.val.trim() === '') {
        fileName.verified = false
        res = false
        msg = '文件名'
      } else {
        fileName.verified = true
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
.upload-box {
  .upload-des {
    padding-top: 20px;
    font-size: 13px;
    color: #888;
    line-height: 26px;
  }
}
</style>
