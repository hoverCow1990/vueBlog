<template>
  <div class="cow-screen-mask" v-if='isShow' :class='isWrapperActive?"active":""'>
    <div class="cow-screen-form upload-box" :class='isBoxActive?"active":""'>
      <div class="form-wrapper">
        <div class="upload-container type-container">
          <div class="cow-input-content name">
            <label>作品名</label>
            <div class="input-box">
              <input type="text" v-model='fileName.val' placeholder="请输入文件名" :class="fileName.verified?'':'error'" maxlength="20">
            </div>
          </div>
          <div class="cow-input-content type">
            <label>方式</label>
            <div class="input-box">
              <div class="cow-select-content" @click="changeUpType(0)">
                <div class="cir" :class="upType === 0 ? 'active':''"></div><span>本地上传</span>
              </div>
              <div class="cow-select-content" @click="changeUpType(1)">
                <div class="cir" :class="upType === 1 ? 'active':''"></div><span>地址上传</span>
              </div>
            </div>
          </div>
          <div v-if="upType === 0" class="cow-upload-content file">
            <label>文件</label>
            <div class="input-box">
              <div class="file-btn" :class="fileVerified?'':'error'">
                <p class='inner'><i class="icon-font icon-xiazai"></i>选择文件</p>
                <input type="file" accept="" @change="handlerFilePerviewer" />
              </div>
              <p class="exp" v-html="fileShowName"></p>
            </div>
          </div>
          <div v-else class="cow-input-content url">
            <label>地址</label>
            <div class="input-box">
              <input type="text" v-model="fileUrl.val" placeholder="请输入页面地址" :class="fileUrl.verified?'':'error'"></div>
            </div>
          </div>
          <p class="upload-des"><i class="iconfont icon-zliconwarning01"></i>{{ upType === 0 ? '请上传 zip / rar 格式文件' : '写上 http / https 地址' + ',上传后通知牛哥审核' }}</p>
          <div class="cow-btn-group submit-group">
            <cow-btn type="primary" :isLoading="isUpLoading" @click='handlerSubmit'>立刻上传</cow-btn>
            <cow-btn @click='hiddenUpload'>取消</cow-btn>
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
      maxSize: 8000000,
      upType: this.$Constent.isPc ? 0 : 1,
      fileName: {
        val: '',
        verified: true
      },
      fileUrl: {
        val: '',
        verified: true
      },
      file: null,
      fileVerified: true,
      fileShowName: '大小限制<span>8Mb</span>以下',
      isUpLoading: false
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
    // 切换上传方式
    changeUpType (type) {
      if (type === 0 && !this.$Constent.isPc) {
        this.$message({
          type: 'warn',
          message: '手机端只能通过地址上传'
        })
        return
      }
      this.$data.upType = type
    },
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
          message: '文件不能超过' + this.$data.maxSize / 1000000 + 'mb'
        })
        return
      }
      this.$data.file = file
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
      let { fileName, fileUrl, upType, file } = this.$data
      let isCanSubmit = ''
      if (this.$data.isUpLoading) return
      if (upType === 0) { // 本地文件
        isCanSubmit = this.verifyForm(fileName, file, 0)
      } else { // 作品地址
        isCanSubmit = this.verifyForm(fileName, fileUrl, 1)
      }
      if (isCanSubmit.res) {
        this.$data.isUpLoading = true
        if (upType === 0) {
          this.requestUpProuctFile(fileName.val, file)
        } else {
          this.requestUpProuctUrl(fileName.val, fileUrl.val)
        }
      } else {
        this.$message({
          type: 'err',
          message: isCanSubmit.msg
        })
      }
    },
    // 上传作品文件
    requestUpProuctFile (fileName, file) {
      let formData = new FormData()
      formData.append('title', fileName)
      formData.append('file', file)
      this.$Http({
        url: this.$Constent.api.user.upProuctFile,
        method: 'POST',
        data: formData
      }).then(res => {
        res = res.body
        this.handlerUpSuccess(res)
      }).catch(() => {
        this.$data.isUpLoading = false
      })
    },
    // 上传作品地址
    requestUpProuctUrl (fileName, fileUrl) {
      this.$Http({
        url: this.$Constent.api.user.upProuctUrl,
        method: 'POST',
        data: {
          title: fileName,
          url: fileUrl
        }
      }).then(res => {
        res = res.body
        this.handlerUpSuccess(res)
      }).catch(() => {
        this.$data.isUpLoading = false
      })
    },
    handlerUpSuccess (res) {
      if (res.statue === 1) {
        this.$emit('upDateSuccess', {
          productList: res.productList,
          score: res.score,
          lv: res.lv
        })
        this.$message({
          type: 'success',
          message: '上传成功,请通知老牛审核,用户积分+99'
        })
        this.hiddenUpload()
      }
      this.$data.fileName.val = ''
      this.$data.fileUrl.val = ''
      this.$data.fileShowName = '大小限制<span>8Mb</span>以下'
      this.$data.file = null
      this.$data.isUpLoading = false
    },
    // 验证表单的有效性
    verifyForm (fileName, fileData, type) {
      let res = true
      let msg = ''
      if (fileName.val.trim() === '') {
        res = false
        msg = '文件名不能为空'
        fileName.verified = false
      } else {
        fileName.verified = true
      }

      if (type === 0) { // 上传文件
        if (!fileData || fileData.size > this.$data.maxSize) {
          res = false
          msg += (msg ? ',' : '') + '上传文件有误'
          this.$data.fileVerified = false
        } else {
          fileName.verified = true
        }
      } else { // 作品地址
        if (!/^https?:\/\/.+/.test(fileData.val)) {
          res = false
          msg += (msg ? ',' : '') + '作品地址有误'
          fileData.verified = false
        } else {
          fileData.verified = true
        }
      }

      return {
        res,
        msg: msg
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
    i {
      padding-right: 5px;
      color: #ff8c26;
    }
  }
  .cow-input-content.url {
    height: 38px;
  }
}
</style>
