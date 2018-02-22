<template>
  <section id='messagePage'>
    <cow-header-filler></cow-header-filler>
    <div class="container messagePage-container">
      <cow-message-board type='black' :messageList='messageList' :singleListLength='singleListLength' :allListLength='allListLength' @changeMsgPage='requestMessageList' @changeMsg='changeMsg'></cow-message-board>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      allListLength: 0, // 所有消息条数
      singleListLength: 8, // 每页条数
      messageList: [] // 消息列表
    }
  },
  created () {
    this.requestMessageList(0)
  },
  methods: {
    // 请求留言板内容
    requestMessageList (st) {
      const { singleListLength } = this.$data
      this.$Http({
        url: this.$Constent.api.message.getMessageList,
        method: 'GET',
        params: {
          st: st * singleListLength,
          end: singleListLength
        }
      }).then(res => {
        res = res.body
        if (res.statue) {
          let { messageList, allListLength } = res
          this.$data.messageList = messageList
          this.$data.allListLength = allListLength
        }
      })
    },
    // 发送成功后刷新messageList
    changeMsg (messageList, allLength) {
      this.$data.messageList = messageList
      this.$data.allListLength = allLength
    }
  }
}
</script>

<style lang='less'>
.messagePage-container {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  .msgBoard-perviewer red {

  }
  .pageTab {
    padding-left: 10px;
  }
  .msgBoard-form {
    box-sizing: border-box;
    padding-right: .2rem;
  }
}
@media screen and (max-width: 435px){
  .messagePage-container {
    min-width: 100%;
  }
}
</style>
