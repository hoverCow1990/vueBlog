<template>
  <div class="sideNav">
    <div class="sideNav-container">
      <div class="sideNav-title">
        <i class="iconfont icon-gengduo"></i>
        <span>{{ title }}</span>
      </div>
      <ul class='sideNav-list'>
        <li v-for='item of navList'>
          <router-link :to='item.href'>{{ item.tag }}</router-link>
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
    title: String
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang='less'>
.sideNav {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 350px;
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
    padding: 10px;
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
        text-indent: 4px;
        background-color: #EAEAEA;
      }
    }
    a {
      display: block;
      width: 100%;
      color: #999;
    }
  }
}
@media screen and (max-width: 435px) {
  .sideNav {

  }
}
</style>
