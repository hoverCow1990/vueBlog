<template>
  <div class="header-moreBox" :class='isShow?"active":""'>
    <div class="container">
      <ul class='moreBox-menu'>
        <li v-if="isLogin"><i class="iconfont icon-huiyuan2"></i><router-link to="/admin">会员中心</router-link></li>
        <li v-else @click='showLoginBox'><i class="iconfont icon-dianpuxiangqingyedejiage"></i>注册 / 登录</li>
        <li><i class="iconfont icon-maobi"></i><router-link to="/message">留言板</router-link></li>
        <li><i class="iconfont icon-huiyuan"></i><router-link to="/message">游戏大厅</router-link></li>
        <li><i class="iconfont icon-dianzandian"></i><router-link to="/message">老版本首页</router-link></li>
      </ul>
      <div class="moreBox-search">
        <input type="text" name="" value="" placeholder="输入搜索内容..">
        <div class="search-btn">
          <i class="iconfont icon-fangdajing"></i>Search
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      required: true
    },
    isLogin: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    $route () {
      this.$emit('hiddenMoreBox')
    }
  },
  methods: {
    // 显示登录盒子
    showLoginBox () {
      this.$emit('showLoginBox')
    }
  }
}
</script>

<style lang='less'>
.header-moreBox {
  position: fixed;
  width: 100%;
  top: 68px;
  left: 0;
  background-color: rgba(0, 0, 0, .8);
  transform: translate3d(100%, 0, 0);
  transition: transform .5s ease-in-out;
  &.active {
    transform: translate3d(0, 0, 0);
  }
  .moreBox-menu {
    padding-top: 20px;
  }
  li {
    display: block;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #464646;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    letter-spacing: 2px;
    color: #DADADA;
    i {
      padding-right: 7px;
    }
    a {
      color: #DADADA;
    }
  }
  .moreBox-search {
    width: 70%;
    height: 61px;
    margin-left: 15%;
    margin-top: 40px;
    padding-bottom: 40px;
  }
  input {
    display: block;
    width: 100%;
    height: 30px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #A2A2A2;
    background: transparent;
    font-family: 'Microsoft YaHei';
    letter-spacing: 1px;
    outline: none;
    color: #fff;
    text-align: center;
  }
  .search-btn {
    display: block;
    width: 100%;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    color: #eee;
    i {
      padding-right: 5px;
    }
  }
}
@media screen and (max-width: 320px){

}
</style>
