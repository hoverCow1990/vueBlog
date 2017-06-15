<template>
  <div id="footer">
    <div class="footer-container container">
      <div class="footer-main">
        <div class="footer-menu">
          <div class="menu menu-lang">
            <div class="menu-title clearfix">
              <p>语言 & 工具</p>
              <div class="logo green">
                <i class="iconfont icon-houtaiyuyanguanlinew"></i>
                <span>Lang</span>
              </div>
            </div>
            <ul class="menulist">
              <li v-for='item of langList'>
                <router-link :to='item.link'>{{ item.title }}</router-link>
              </li>
            </ul>
          </div>
          <div class="menu menu-hot">
            <div class="menu-title clearfix">
              <p>热门关键词</p>
              <div class="logo red">
                <i class="iconfont icon-dianpuxiangqingyedejiage"></i>
                <span>Hots</span>
              </div>
            </div>
            <ul class="menulist">
              <li v-for='item of hotList'>
                <router-link :to='item.link'>{{ item.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-introduce">
          <div class="photo-container clearfix">
            <div class="photo-group">
              <div class="photo" :style='photoAUrl'></div>
              <div class="photo" :style='photoBUrl'></div>
            </div>
          </div>
          <p class='name clearfix'>老牛の博客</p>
          <p class='info clearfix'>欢迎您的浏览 [ 点击收藏 ]</p>
        </div>
      </div>
    </div>
    <div class="copyright"><p>Copyright &copy; 2016-2023 老实的牛 版权所有</p> <p>沪ICP备16027135号</p></div>
  </div>
</template>

<script>
import listData from './listData'

export default {
  name: 'Footer',
  data () {
    return {
      photoAUrl: {
        backgroundImage: 'url(' + require('./images/photoA.jpg') + ')'
      },
      photoBUrl: {
        backgroundImage: 'url(' + require('./images/photoC.jpg') + ')'
      }
    }
  },
  mixins: [listData]
}
</script>

<style lang='less'>
#footer {
  padding-top: .38rem;
  margin-top: .6rem;
  background-image: repeating-linear-gradient(-45deg, #111113 0, #111113 10px, #1e1e20 10px, #1e1e20 12px);
  overflow: hidden;
  .footer-main {
    overflow: hidden;
  }
  .footer-menu {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-between;
    float: left;
  }
  .menu {
    width: 48%;
    border-right: 1px solid #3a3939;
    .menu-title {
      height: 21px;
      p {
        width: 112px;
        float: left;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
      }
      .logo {
        width: 60px;
        height: 100%;
        float: left;
        border-radius: 3px;
        &.green {
          background-color: #29947a;
        }
        &.red {
          background-color: #bb3333;
        }
      }
      i {
        display: block;
        float: left;
        padding-left: 5px;
        padding-right: 5px;
        line-height: 23px;
        color: #eee;
      }
      span {
        float: left;
        font-size: 13px;
        line-height: 21px;
        color: #eee;
      }
    }
    ul {
      padding-top: .15rem;
      overflow: hidden;
    }
    li {
      padding-top: 20px;
      padding-right: 20px;
      float: left;
      font-size: 14px;
    }
    a {
      color: #999;
      transition: color .1s;
      &:hover {
        color: #f5e283;
      }
    }
  }
  .footer-introduce {
    width: 20%;
    float: right;
    text-align: right;
    p {
      width: 100%;
      float: right;
      color: #999;
    }
    .name {
      padding-top: .1rem;
      font-size: 14px;
    }
    .info {
      padding-top: .06rem;
      font-size: 12px;
      letter-spacing: 2px;
      transition: color .1s;
      cursor: pointer;
      &:hover {
        color: #eee;
      }
    }
    .photo-container {
      width: 100px;
      height: 100px;
      float: right;
      border: 1px solid #eee;
      opacity: .9;
      overflow: hidden;
    }
    .photo-group {
      width: 200px;
      height: 100%;
      transition: transform .2s ease-in;
      &:hover {
        transform: translate3d(-100px, 0, 0);
      }
    }
    .photo {
      width: 100px;
      height: 100%;
      float: left;
    }
  }
  .copyright {
    margin-top: 40px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;
    font-size: 13px;
    color: #999;
    p:first-child {
      padding-bottom: 8px;
    }
  }
}
@media screen and (max-width: 435px){
  #footer {
    .footer-menu {
      width: 100%;
    }
    .menu {
      width: 100%;
      border-right: none;
      &:nth-child(1) {
        padding-top: 10px;
      }
      &:nth-child(2) {
        padding-top: 40px;
      }
      li {
        padding-top: 13px;
      }
    }
    .footer-introduce {
      display: none;
    }
    .copyright {
      border-top: 1px solid #222;
    }
  }
}

</style>
