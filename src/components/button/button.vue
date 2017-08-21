<template>
  <div class="cow-btn" :class="{[type]:true, disabled: isDisabled}" @click='handlerClick'><div class="loading" v-if="isLoading">
    <i class="iconfont icon-loading"></i>
  </div>{{ $slots.default[0].text }}</div>
</template>

<script>

export default {
  name: 'Btn',
  data () {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 处理点击事件
    handlerClick () {
      if (this.isLoading || this.isDisabled) return
      this.$emit('click')
    }
  }
}
</script>

<style lang='less'>
.cow-btn-group {
  font-size: 0;
}
.cow-btn {
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  line-height: 1;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #bfcbd9;
  border-color: #c4c4c4;
  color: #1f2d3d;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin-right: 13px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  .loading {
    display: inline-block;
    margin-right: .07rem;
    transform-origin: 51% 49%;
    animation:loading 1.5s linear infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &.primary {
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    &:hover {
      background: #4db3ff;
      border-color: #4db3ff;
      color: #fff;
    }
  }
  &.disabled {
    opacity: .5;
    cursor: not-allowed;
  }
}
</style>
