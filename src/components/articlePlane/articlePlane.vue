<template>
  <div class="articlePlane-wrapper">
    <ul class='articlePlane-list' v-if='list.length'>
      <li class="articlePlane-item" v-for='item of list' key="item.id">
        <div class="item-perviewer">
          <router-link :to='getLink(item.id)'>
            <img :src="item.smallPerviewer">
          </router-link>
        </div>
        <div class="item-inner">
          <div class="inner-hd">
            <p class="name" v-html="item.title"></p>
            <div class="weight">
              <i class="iconfont icon-dianpuxiangqingyedejiage" :class="index * 20 < item.weight ? 'hot': ''" v-for="(fire, index) of new Array(5)"></i>
            </div>
          </div>
          <div class="inner-bd">
            <p v-html="item.description"></p>
            <router-link :to='getLink(item.id)'>
              <div class="item-btn">
                <div class="btn-container">
                  <div class="btn-tp">点击阅读</div>
                  <div class="btn-bt"><i class="iconfont icon-yanjing"></i></div>
                </div>
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
    <div class="articlePlane-noData" v-else>
      暂无数据...
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticlePlane',
  data () {
    return {}
  },
  props: {
    list: Array
  },
  methods: {
    getLink (id) {
      return '/article/' + this.$route.params.type + '/' + id
    }
  }
}
</script>

<style lang='less'>
.articlePlane-list {
  overflow: hidden;
}
.articlePlane-noData {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: .15rem;
  text-align: center;
  color: #666;
  .border();
}
.articlePlane-item {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 230px;
  padding: 8px 0 8px 8px;
  background-color: #fff;
  .border(all, #E0E0E0);
  border-radius: 6px;
  &:not(:first-child){
    margin-top: 10px;
  }
  .item-btn {
    @btnHeight: 37px;
    position: absolute;
    display: inline-block;
    width: 88px;
    height: @btnHeight;
    right: 0;
    bottom: 10px;
    margin-right: 0;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1;
    white-space: nowrap;
    border: 1px solid #1f7dc3;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    outline: none;
    &:hover {
      .btn-container {
        transform: translate3d(0, -@btnHeight , 0);
      }
    }
    .btn-container {
      position: absolute;
      width: 100%;
      transition: .5s;
      &>div {
        width: 100%;
        height: @btnHeight;
        line-height: @btnHeight;
        text-align: center;
        color: #fff;
        &:nth-child(1) {
          background-color: @primary;
          border-radius: 4px 4px 0 0;
        }
        &:nth-child(2) {
          i {
            font-size: 20px;
          }
          background-color: darken(@primary, 10%);
          border-radius: 0 0 4px 4px;
        }
      }
    }
  }
  .item-perviewer {
    position: relative;
    display: flex;
    justify-content: center;
    width: 2.81rem;
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
    padding-left: .15rem;
    padding-right: .15rem;
  }
  .inner-hd {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 9px;
    padding-bottom: 9px;
    letter-spacing: 2px;
    font-size: 12px;
    color: #5D5D5D;
    font-weight: bold;
    .weight {
      width: 97px;
      height: 20px;
      i {
        padding-left: 2px;
        color: #e6e6e6;
        &.hot {
          color: #ec3333;
        }
      }
    }
    .tag {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 12px;
      color: #9a9a9a;
    }
    .name {
      flex: 1;
      font-size: 14px;
      color: #795548;
    }
    .reg-search {
      color: #ff4848;
    }
  }
  .inner-bd {
    position: relative;
    height: 133px;
    padding-top: .16rem;
    font-size: 12px;
    line-height: 24px;
    text-align: justify;
    .border(top);
    .border(bottom);
    color: #999;
    .reg-search {
      color: #ff4848;
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
    &:nth-child(1) {
      border-radius: 0 0 6px 6px;
    }
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
