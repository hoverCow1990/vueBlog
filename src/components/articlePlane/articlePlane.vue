<template>
  <ul class='articlePlane-list'>
    <li class="articlePlane-item" v-for='item of list'>
      <div class="item-perviewer">
        <router-link :to='item.href'>
          <img :src="item.perviewer">
        </router-link>
      </div>
      <div class="item-inner">
        <div class="inner-hd">
          [<span class="tag">{{item.mainTag}}</span>] <span class="name">{{ item.title }}</span>
        </div>
        <div class="inner-bd">
          {{ item.des }}
          <router-link :to='item.href'>
            <div class="cow-btn primary inner-btn">
              点击阅读
            </div>
          </router-link>
        </div>
        <div class="inner-ft">
          <div class="inner-time">
            <i class="iconfont icon-shijian2"></i>{{ item.time }}
          </div>
          <div class="inner-hot">
            <div class="hot-watch">
              <i class="iconfont icon-yanjing"></i>{{ item.watch }}
            </div>
            <div class="hot-message">
              <i class="iconfont icon-message"></i>{{ item.message }}
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ArticlePlane',
  data () {
    return {}
  },
  props: {
    list: Array
  }
}
</script>

<style lang='less'>
.articlePlane-list {
  overflow: hidden;
}
.articlePlane-item {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 230px;
  padding: 8px 0 8px 8px;
  background-color: #fff;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  &:not(:first-child){
    margin-top: 10px;
  }
  .item-perviewer {
    position: relative;
    display: flex;
    justify-content: center;
    width: 2.83rem;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    a {
      display: block;
      height: 100%;
    }
  }
  img {
    height: 100%;
    transition: transform .3s;
    &:hover {
      transform: scale(1.1)
    }
  }
  .item-inner {
    flex: 1;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .inner-hd {
    padding-top: .1rem;
    padding-bottom: 8px;
    letter-spacing: 2px;
    font-size: 12px;
        color: #5D5D5D;
    font-weight: bold;
    .tag {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 12px;
      color: #795548;
    }
    .name {
      font-size: 15px;
      color: #5D5D5D;
    }
  }
  .inner-bd {
    position: relative;
    height: 133px;
    padding-top: .16rem;
    font-size: 12px;
    line-height: 24px;
    text-align: justify;
    color: #9C9C9C;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    .inner-btn {
      position: absolute;
      right: 0;
      bottom: 10px;
    }
  }
  .inner-ft {
    display: flex;
    height: 23px;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    i {
      padding-right: 5px;
    }
    .inner-time {

    }
    .inner-hot {
      display: flex;
      div {
        margin-left: 20px;
      }
    }
  }
}
@media screen and (max-width: 435px){
  .articlePlane-item {
    height: auto;
    padding-right: 8px;
    flex-wrap: wrap;
    .item-perviewer {
      width: 100%;
      height: 8.57rem;
    }
    .inner-bd {
      height: 117px;
    }
  }
}

</style>
