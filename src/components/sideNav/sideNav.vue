<template>
  <div class="sideNav">
    <div class="sideNav-container">
      <div class="sideNav-title">
        <i class="iconfont icon-gengduo"></i>
        <span>{{ title }}</span>
      </div>
      <ul class='sideNav-list' :class="`${className} ${$Constent.isPc ? 'pc' : 'mb'}`">
        <li v-for='(item, index) of navList' :class="activeClass === item.tag ? 'active': ''">
          <router-link :to='item.href'>
            <p v-if="className==='mes'"><span class='flag' :class='index < 3 ? "hot hot-" + index: ""'>{{ index + 1}}</span><span class='text'>{{ item.tag }}</span></p>
            <template  v-else>{{ item.tag[0].toUpperCase() + item.tag.substr(1)}}</template >
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    navList: Array,
    title: String,
    className: String,
    activeClass: String
  }
}
</script>

<style lang='less'>
.sideNav {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 320px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 6px 6px 0 0;
  .border(top, #E0E0E0);
  .border(left, #E0E0E0);
  .border(right, #E0E0E0);
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 20px;
    bottom: 0;
    background: #000;
  }
  .sideNav-container {
    padding: 10px 10px 50px 10px;
  }
  .sideNav-title {
    font-size: 0;
    font-weight: bold;
    line-height: 35px;
    border-bottom: 1px solid #e6e6e6;
    i {
      display: inline-block;
      vertical-align: top;
      padding-left: 2px;
      padding-right: 10px;
      font-size: 12px;
      color: #FF9800;
    }
    span {
      vertical-align: top;
      font-size: 14px;
      color: #555;
    }
  }
  .sideNav-list {
    padding-top: 10px;
    &.pc.sub li:not(.active):hover {
      background-color: #dededd;
      box-shadow: 0 0 2px #969696;
    }
    &.mes {
      li {
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        transition: .3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #EAEAEA;
          .text {
            transform: translate3d(4px, 0, 0);
          }
        }
      }
      a {
        display: block;
        width: 100%;
        color: #999;
      }
      .text {
        display: inline-block;
        transition: .3s ease-in-out;
      }
      .flag {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: .1rem;
        border-radius: 3px;
        background-color: #A2A2A2;
        text-indent: 0;
        line-height: 20px;
        text-align: center;
        color: #eee;
        &.hot-0 {
          background-color: darken(@primary, 25%);/*#ff4348;*/
        }
        &.hot-1 {
          background-color: darken(@primary, 15%); /*#ff954d;*/
        }
        &.hot-2 {
          background-color: darken(@primary, 2%); /*#ffd04d;*/
        }
        /*&.hot {
          background-color: darken(@primary, 2%);
        }*/
      }
    }
    &.sub {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 26%;
        height: 30px;
        margin-bottom: 10px;
        border-radius: 3px;
        line-height: 30px;
        border: 1px solid #e6e6e6;
        font-size: 12px;
        text-align: center;
        transition: .1s;
        &.active {
          background-color: #c33838;
          box-shadow: 0 0 2px #af3232;
          a {
            color: #fff;
          }
        }
        a {
          display: block;
          width: 100%;
          color: #313131;
          font-weight: 600;
        }
      }
    }
  }
}
@media screen and (max-width: 435px) {
  .sideNav {

  }
}
</style>
