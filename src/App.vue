<template>
  <div id="app">
    <cow-header></cow-header>
      <keep-alive include="articleList" exclude="article,message,admin">
        <router-view></router-view>
      </keep-alive>
      <cow-vue-cropper v-show="cropper.isShow" ref="cropper" autoCrop :autoCropWidth="100" :autoCropHeight="100" :img="cropper.img" :outputSize="cropper.outputSize" fixed :outputType="cropper.outputType"></cow-vue-cropper>
    <cow-footer></cow-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cropper: {
        isShow: false,
        img: '',
        size: '',
        outputSize: 1,
        outputType: 'jpeg'
      }
    }
  },
  mounted () {
    this.$Constent.cropper = this.$refs.cropper
  }
}
</script>

<style lang='less'>
#app {
  max-width: 100%;
  overflow-x:hidden;
}
</style>
