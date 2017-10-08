<template>
  <div class="articlePlane-wrapper">
    <ul class='articlePlane-list' v-if='list.length'>
      <li class="articlePlane-item" v-for='item of list'>
        <div class="item-perviewer">
          <router-link :to='getLink(item.id)'>
            <img :src="item.smallPerviewer">
          </router-link>
        </div>
        <div class="item-inner">
          <div class="inner-hd">
            <span class="name">{{ item.title }}</span>
          </div>
          <div class="inner-bd">
            {{ item.description }}
            <router-link :to='getLink(item.id)'>
              <cow-btn type="primary">点击阅读</cow-btn>
            </router-link>
          </div>
          <div class="inner-ft">
            <div class="inner-time">
              <i class="iconfont icon-shijian2"></i>{{ item.time | cow-transTime }}
            </div>
            <div class="inner-hot">
              <div class="hot-watch">
                <i class="iconfont icon-yanjing"></i>{{ item.watch }}
              </div>
              <div class="hot-message">
                <i class="iconfont icon-message"></i>{{ item.message | cow-transMsgLength }}
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
    padding-left: .15rem;
    padding-right: .15rem;
  }
  .inner-hd {
    padding-top: .1rem;
    padding-bottom: 9px;
    letter-spacing: 2px;
    font-size: 12px;
    color: #5D5D5D;
    font-weight: bold;
    .tag {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 12px;
      color: #9a9a9a;
    }
    .name {
      font-size: 14px;
      color: #795548;
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
    .cow-btn {
      position: absolute;
      right: 0;
      bottom: 10px;
      margin-right: 0;
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
