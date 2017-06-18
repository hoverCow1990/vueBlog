<template>
  <div class="rateBox">
    <ul class="rateBox-star">
      <li v-for='(item, index) of rateList'  @mouseenter='handlerSelectIndex(index)'>
        <i class="iconfont icon-star" :class='index <=  selectIndex ? "active":""'></i>
      </li>
    </ul>
    <p class="rateBox-text" v-show='showText'>
      {{rateList[selectIndex].text}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    initNum: {
      type: [String, Number],
      default: 3
    },
    maxNum: {
      type: Number,
      default: 5
    },
    showText: {
      type: Boolean,
      default: true
    },
    texts: {
      type: Array
    }
  },
  created () {
    let _texts = this.validateTexts()
    this.createRateList(_texts)
  },
  data () {
    return {
      rateList: [],
      selectIndex: 2
    }
  },
  watch: {
    selectIndex (index) {
      this.$emit('change', index)
    }
  },
  methods: {
    // 验证传值的有效性
    validateTexts () {
      let {initNum, texts, showText, maxNum} = this
      let _texts = texts || ['极差', '失望', '一般', '满意', '惊喜']
      if (initNum > maxNum) {
        console.error('you should do initNum < maxNum')
      }
      if (showText & _texts.length !== maxNum) {
        console.error('you should do texts.length === maxNum')
      }
      return _texts
    },
    // 创建rateList
    createRateList (_texts) {
      let maxNum = this.maxNum
      for (let i = 0; i < maxNum; i++) {
        this.$data.rateList.push({
          key: 0,
          text: _texts[i]
        })
      }
    },
    // 切换选择的星星index
    handlerSelectIndex (index) {
      this.$data.selectIndex = index
    }
  }
}
</script>

<style lang='less'>
.rateBox {
  height: 20px;
  padding: .13rem;
  .rateBox-star {
    height: 100%;
    float: left;
  }
  li {
    display: flex;
    height: 100%;
    padding-right: 8px;
    float: left;
    align-items: center;
    cursor: pointer;
    i.icon-star {
      font-size: 20px;
      color: #ccc;
      transition: .2s;
      &.active {
        color: darken(@yellow, 8%);
      }
    }
  }
  .rateBox-text {
    height: 100%;
    padding-left: 8px;
    float: left;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 2px;
    color: #555;
    font-weight: 600;
  }
}
@media screen and (max-width: 435px) {
  .rateBox {
    padding-top: 7px;
    padding-bottom: 7px;
  }
}
</style>
