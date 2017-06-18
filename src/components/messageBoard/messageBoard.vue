<template>
  <div class="msgBoard">
    <div class="msgBoard-title"></div>
    <ul class="article-topLine"><li></li><li></li><li></li><li></li></ul>
    <div class="msgBoard-context">
      <img src="./images/r1.png" alt="">
      <textarea class='textarea' placeholder="谈谈您的看法" @keyup="handleMsgVal" ref='textarea'></textarea>
    </div>
    <div class="msgBoard-btns cow-btn-group">
      <div class="cow-btn primary">立刻发布</div> <div class="cow-btn default" @click="cancelMsgVal">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBoard',
  props: {},
  data () {
    return {
      message: ''
    }
  },
  created () {
  },
  methods: {
    // 处理msg value值
    handleMsgVal (ev) {
      this.$data.message = ev.target.value
    },
    // 取消所有的msg value
    cancelMsgVal () {
      this.$data.message = ''
      this.$refs.textarea.value = ''
    }
  }
}
</script>

<style lang='less'>
.msgBoard {
  padding-top: .5rem;
  .msgBoard-title {
    height: 1rem;
    border-radius: 2px;
    background-image: url('./images/4.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: .2s;
    &:hover {
      opacity: .8;
    }
  }
  .msgBoard-context {
    position: relative;
    height: 1.5rem;
    min-height: 120px;
    padding: 20px 10px;
    .border(right);
    .border(left);
    .border(bottom);
    .textarea {
      display: block;
      min-width: 100%;
      min-height: 100%;
      max-width: 100%;
      max-height: 100%;
      border: none;
      outline: none;
      font-family: 'microsoft YaHei';
      color: #555;
    }
    img {
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      margin-left: -29px;
      margin-top: -26px;
      opacity: .3;
    }
  }
  .msgBoard-btns {
    display: flex;
    padding-top: 15px;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 435px) {
  .msgBoard {
    .msgBoard-title {
      height: 1.45rem;
    }
  }
}
</style>
