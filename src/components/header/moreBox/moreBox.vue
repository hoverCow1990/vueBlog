<template>
  <div class="header-moreBox" :class='isShow?"active":""'>
    <div class="moreBox-container">
      <ul class='moreBox-menu'>
        <li v-if="isLogin"><router-link to="/admin"><i class="iconfont icon-huiyuan2"></i>会员中心</router-link></li>
        <li v-else @click='showLoginBox'><i class="iconfont icon-dianpuxiangqingyedejiage"></i>注册 / 登录</li>
        <li><router-link to="/message"><i class="iconfont icon-maobi"></i>留言板</router-link></li>
        <li><a href="https://github.com/hoverCow1990" target='_blanket'><i class="iconfont icon-github"></i>github</a></li>
        <li><router-link to="/game"><i class="iconfont icon-huiyuan"></i>游戏大厅</router-link></li>
        <li><a href="mqqwpa://im/chat?chat_type=wpa&uin=547007933&version=1&src_type=web&web_src=oicqzone.com"><i class="iconfont icon-qq3"></i>联系QQ</a></li>
      </ul>
      <div class="moreBox-search">
        <input type="text" autocapitalize="off" class="more-search" name="" v-model='searchVal' placeholder="输入搜索内容">
        <div class="search-line"></div>
        <div class="search-btn" @click="linkSearch">
          <i class="iconfont icon-fangdajing"></i>Search
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: '作品'
    }
  },
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
  methods: {
    // 显示登录盒子
    showLoginBox () {
      this.$emit('showLoginBox')
    },
    linkSearch () {
      this.$emit('linkSearch', this.$data.searchVal)
    }
  },
  mounted () {
    window.addEventListener('touchend', e => {
      if (!/more-search|icon-gengduo|moreBox-menu|moreBox-container/.test(e.target.className)) {
        this.$emit('hiddenMoreBox')
      }
    })
  }
}
</script>

<style lang='less'>
.header-moreBox {
  input {
    font-family: 'Arial' !important;
  }
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
      display: block;
      width: 100%;
      height: 100%;
      color: #DADADA;
    }
  }
  .moreBox-search {
    width: 70%;
    height: 61px;
    margin-left: 15%;
    margin-top: .7rem;
    padding-bottom: 40px;
  }
  input {
    display: block;
    width: 100%;
    height: 40px;
    border: none;
    font-size: 16px;
    background: transparent;
    font-family: 'Microsoft YaHei';
    letter-spacing: 1px;
    outline: none;
    color: #a7a7a7;
    letter-spacing: 1px;
    text-align: center;
  }
  .search-line {
    border-top: 1px solid #A2A2A2;
    height: .3rem;
  }
  .search-btn {
    display: block;
    width: 100%;
    height: 30px;
    font-size: 17px;
    line-height: 30px;
    text-align: center;
    color: #eee;
    i {
      font-size: 22px;
      padding-right: 5px;
      margin-left: -0.15rem;
    }
  }
}
@media screen and (max-width: 320px){

}
</style>
