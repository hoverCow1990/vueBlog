<template>
  <section class='homePage-hotObject'>
    <div class="hotObject-face"></div>
    <div class="hotObject-title">What u want what u find</div>
    <div class="hotObject-container container">
      <div class="category-wrapper" :style='getWrapperTransform'>
        <div class="category-frame category">
          <ul class='frame-list list'>
            <li v-for='item of frameList'>
              <router-link :to='item.link'>
                <div class="item-bg">
                    <div class="item-perviewer" :class='item.bgColor'>
                      <img :src="item.logo">
                    </div>
                </div>
              </router-link>
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
        <div class="category-tool category">
          <ul class='tool-list list'>
            <li v-for='item of toolList'>
              <div class="item-bg">
                  <div class="item-perviewer" :class='item.bgColor'>
                    <img :src="item.logo">
                  </div>
              </div>
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
        <div class="category-book category">
          <ul class='book-list list'>
            <li v-for='item of bookList'>
              <div class="item-bg">
                  <div class="item-perviewer" :class='item.bgColor'>
                    <img :src="item.logo">
                  </div>
              </div>
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
        <div class="category-other category">
          <ul class='other-list list'>
            <li v-for='item of otherList'>
              <div class="item-bg">
                  <div class="item-perviewer" :class='item.bgColor'>
                    <img :src="item.logo">
                  </div>
              </div>
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="category-tab-wrapper">
        <div class="category-tab">
          <ul class='tab-list'>
            <li @click='handlerChangeIndex(0)'>框架</li>
            <li @click='handlerChangeIndex(1)'>工具</li>
            <li @click='handlerChangeIndex(2)'>书架</li>
            <li @click='handlerChangeIndex(3)'>其他</li>
          </ul>
          <div class="tab-piston" :style='getTabTransform'></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import listData from './listData'

export default {
  data () {
    return {
      showIndex: 0
    }
  },
  mixins: [listData],
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
  overflow-x: hidden;
  .category-wrapper {
    display: flex;
    width: 400%;
    transition: transform .7s ease-in-out;
    .category {
      flex:1;
    }
    .list {
      @liWidth:  1.4rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: .7rem;
      li {
        width: @liWidth;
        cursor: pointer;
      }
      li:hover {
        .item-bg {
          box-shadow: 5px 8px 25px 2px rgba(0, 0, 0, .7);
          transform: translate3d(1px, -8px, 0);
        }
      }
      .item-bg {
        position: relative;
        width: @liWidth;
        height: @liWidth;
        border-radius: 50%;
        background-image: repeating-linear-gradient(-45deg, #111113 0, #111113 10px, #1e1e20 10px, #1e1e20 12px);
        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, .7);
        transition: all .35s;
      }
      .item-perviewer {
        position: absolute;
        width: @liWidth - 0.2;
        height:  @liWidth - 0.2;
        top: 0.1rem;
        left: 0.1rem;
        border-radius: 50%;
        background-color: #eee;
        box-shadow: 0 0 6px 1px rgba(0,0,0,.85) inset;
        &.black {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#000000), to(#383838));
        }
        &.white {
          background-color: #fff;
        }
        &.grey {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#cecece), to(#ffffff));
        }
        &.blue {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#073286), to(#427be2));
        }
        &.yellow {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#a76208), to(#ffd86a));
        }
        &.violet {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#29133e), to(#492248));
        }
        &.red {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#500000), to(#ec2727));
        }
        &.green {
          background-image: -webkit-gradient(linear, 0% 90%, 100% 0%, from(#256f3f), to(#38a05d));
        }
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      p {
        padding-top: .22rem;
        font-family: 'Comic Sans MS', 'Arial', 'Microsoft YaHei';
        font-size: .2rem;
        text-align: center;
        letter-spacing: 1px;
        text-shadow: 0 0 1px rgba(0,0,0,.3);
      }
    }
  }
  .category-tab-wrapper {
    padding-top: 1.2rem;
    padding-bottom: .3rem;
    overflow: hidden;
  }
  .category-tab {
    position: relative;
    width: 300px;
    height: 40px;
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
}
@media screen and (max-width: 435px) {
  .hotObject-face {
    display: none;
  }
  .hotObject-title {
    display: none;
  }
  .hotObject-container {
    width: 100%;
  }
  .hotObject-container {
    .category-tab-wrapper {
      padding-top: 1.8rem;
      padding-bottom: 1.2rem;
    }
    .category-tab {
      float: none;
      margin: 0 auto;
      li {
        font-size: 12px;
      }
    }
    .category-wrapper {
      transition: transform .5s;
      .list {
        @liWidth:  2.72rem;
        p {
          padding-top: 12px;
          font-size: 12px;
        }
        li {
          width: @liWidth;
          margin-right: .18rem;
          &:nth-child(4) {
            margin-right: 0rem;
          }
          &:nth-child(4) ~ li{
            margin-top: .8rem;
          }
        }
        .item-bg {
          width: @liWidth;
          height: @liWidth;
          background-image: repeating-linear-gradient(-45deg, #111113 0, #111113 10px, #1e1e20 10px, #1e1e20 12px);
          box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, .7);
          transition: all .35s;
        }
        .item-perviewer {
          width: @liWidth - 0.38;
          height:  @liWidth - 0.38;
          top: 0.19rem;
          left: 0.19rem;
        }
      }
    }
  }
}
</style>
