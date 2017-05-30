<template>
  <section class='homePage-hotObject'>
    <div class="hotObject-face"></div>
    <div class="hotObject-title">What u want what u find</div>
    <div class="hotObject-container container">
      <div class="category-wrapper" :style='getWrapperTransform'>
        <div class="category-frame category">

        </div>
        <div class="category-tool category">

        </div>
        <div class="category-book category">

        </div>
        <div class="category-game category">

        </div>
      </div>
      <div class="category-tab">
        <ul class='tab-list'>
          <li @mouseenter='handlerChangeIndex(0)'>框架</li>
          <li @mouseenter='handlerChangeIndex(1)'>工具</li>
          <li @mouseenter='handlerChangeIndex(2)'>书架</li>
          <li @mouseenter='handlerChangeIndex(3)'>游戏</li>
        </ul>
        <div class="tab-piston" :style='getTabTransform'></div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      showIndex: 0
    }
  },
  computed: {
    // 获取活塞坐标
    getTabTransform () {
      let translateX = this.$data.showIndex * 75
      return {
        transform: `translate3D(${translateX}px, 0, 0)`
      }
    },
    // 获取大屏幕坐标
    getWrapperTransform () {
      let translateX = this.$data.showIndex * -25
      return {
        transform: `translate3D(${translateX}%, 0, 0)`
      }
    }
  },
  methods: {
    // 进入tab时 切换index
    handlerChangeIndex (index) {
      this.$data.showIndex = index
    }
  }
}
</script>

<style lang='less'>
.homePage-hotObject {
  background-image: url('../banner/images/sendBg.png');
}
.hotObject-face {
  width: 5.03rem;
  height: 2.5rem;
  min-width: 150px;
  min-height: 75px;
  margin-left: auto;
  margin-right: auto;
  background-image: url('./images/logo.png');
  background-size: 100% 100%;
}
.hotObject-title {
  text-align: center;
  padding-top: .4rem;
  padding-bottom: .3rem;
  font-size: .22rem;
  font-weight: bold;
  letter-spacing: 5px;
}
.hotObject-container {
  overflow: hidden;
}
.category-wrapper {
  display: flex;
  width: 400%;
  transition: transform .25s;
  .category {
    flex:1;
    height: 300px;
  }
  /*.category-frame {
    background: #222;
  }
  .category-tool {
    background: yellow;
  }
  .category-book {
    background: red;
  }
  .category-game {
    background: #fff;
  }*/
}
.category-tab {
  position: relative;
  width: 300px;
  height: 40px;
  margin-top: .2rem;
  margin-bottom: .5rem;
  float: right;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .2);
  background-image: repeating-linear-gradient(-45deg, #111113 0, #111113 10px, #1e1e20 10px, #1e1e20 12px);
  ul {
    position: absolute;
    display: flex;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }
  li {
    flex: 1px;
    font-size: .14rem;
    letter-spacing: 1px;
    text-align: center;
    color: #eee;
  }
  .tab-piston {
    position: absolute;
    box-sizing: border-box;
    width: 69px;
    height: 34px;
    background-color: #c8090e;
    border: 2px solid #cacaca;
    border-radius: 20px;
    left: 2px;
    top: 3px;
    transition: transform .25s ease-in;
  }
}
@media screen and (max-width: 435px) {
  .hotObject-face {
    display: none;
  }
  .category-tab {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
