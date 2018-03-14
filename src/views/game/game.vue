<template>
  <section id='gamePage'>
    <cow-header-filler></cow-header-filler>
    <div class="container game-container">
      <p>暂未开放...敬请期待！</p>
      <cow-btn type="primary" @click="handlerToGame">静态游戏</cow-btn>
      <cow-btn type="primary" @click="handlerBack">返回</cow-btn>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    handlerBack () {
      this.$router.back()
    },
    handlerToGame () {
      this.$router.push('/articleList/others_游戏')
    }
  }
}
</script>

<style lang='less'>
.game-container {
  height: 300px;
  margin-top: .5rem;
  padding-bottom: .8rem;
  background-color: #fff;
  text-align: center;
  p {
    padding-top: 1.2rem;
    padding-bottom: .5rem;
    text-align: center;
    font-size: 20px;
    color: #666;
  }
  .cow-btn {
    padding-left: 30px;
    padding-right: 30px;
  }
  div {
    text-align: center;
  }
}
</style>
