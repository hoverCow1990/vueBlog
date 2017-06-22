<template>
  <section id='adminPage'>
    <cow-header-filler></cow-header-filler>
    <div class="container adminPage-container">
      <div class="admin-hd">
        <div class="admin-feature">
          <div class="feature">
            <div class="feature-perviewer">
              <img src="./images/user.jpg">
            </div>
            <ul class="feature-info">
              <li class="name">老实的牛<i class="iconfont icon-huiyuan2"></i></li>
              <li class="degree">
                <span class="label">等级: </span>
                <div class="tag"><span>Lv</span><span>6</span></div>
              </li>
              <li class="alias"><span class="label">积分: </span>1575</li>
              <li class="alias"><span class="label">称号: </span>牛哥的大老婆</li>
            </ul>
          </div>
        </div>
        <div class="admin-info">
          <div class="bd-degree">
            <span>Lv1</span>
            <span class="active">Lv2</span>
            <span>Lv3</span>
            <span>Lv4</span>
            <span>Lv5</span>
            <span>Lv6</span>
          </div>
        </div>
        <!-- <div class="admin-info">
          <div class="info-box article">
            <div class="box-container">
              <div class="info-score">
                <p>文章积分: <span>1000</span></p>
              </div>
              <p class="count">阅读篇数： <span>26</span></p>
              <div class="new">
                <p class="label">最近阅读：</p>
                <a href="#">联和利华天猫首页3稿</a>
                <a href="#">纯hover流推广页面</a>
                <a href="#">明星翻转盒子</a>
                <a href="#">3D 翻转式轮播体</a>
                <a href="#">React与Redux实现后台管理系统</a>
                <a href="#">百度地图二次封装  </a>
              </div>
            </div>
          </div>
          <div class="info-box game">
            <div class="box-container">
              <div class="info-score">
                <p>游戏积分: <span>270</span></p>
              </div>
              <p class="count">游戏次数：<span>12</span></p>
              <div class="new">
                <p class="label">最近游戏：</p>
                <a href="#">捕鱼达人</a>
                <a href="#">推箱子</a>
                <a href="#">大家一起来找茬</a>
              </div>
              <div class="btn">游戏大厅</div>
            </div>
          </div>
          <div class="info-box other">
            <div class="box-container">
              <div class="info-score">
                <p>其余积分: <span>215</span></p>
              </div>
              <p class="count">评论次数：<span>6</span></p>
              <div class="new">
                <p class="label">最近评论：</p>
                <a href="#">嘿嘿嘿你真吊</a>
                <a href="#">见到 小牛牛</a>
                <a href="#">大家一起来找茬</a>
              </div>
              <div class="btn">留言中心</div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="admin-bd">
        <!-- <div class="bd-degree">
          <span>Lv1</span>
          <span class="active">Lv2</span>
          <span>Lv3</span>
          <span>Lv4</span>
          <span>Lv5</span>
          <span>Lv6</span>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.adminPage-container {
  margin-top: .5rem;
  padding: .2rem .2rem .8rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .admin-hd {
    display: flex;
    .admin-feature {
      width: 130px;
      float: left;
    }
    .feature-perviewer {
      width: 85px;
      height: 85px;
      margin-bottom: .08rem;
      border-radius: 2px;
      border: 3px solid #222;
      overflow: hidden;
    }
    .feature {
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      li {
        display: flex;
        padding-bottom: .06rem;
        padding-top: .06rem;
        font-size: 13px;
        align-items: center;
        color: #888;
      }
      .name {
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: .07rem;
        border-bottom: 1px dashed #d5d5d5;
        color: #222;
      }
      .label {
        padding-right: 10px;
      }
      i {
        padding-left: 4px;
        font-size: 19px;
        color: #8c20ff;
      }
      .tag {
        display: flex;
        width: 52px;
        height: 18px;
        float: left;
        font-size: 13px;
        line-height: 18px;
        border-radius: 2px;
        text-align: center;
        color: #eee;
        overflow: hidden;
        span:first-child {
          width: 32px;
          background-color: #222;
        }
        span:last-child {
          flex: 1;
          background-color: #20a0ff;
        }
      }
    }
    .admin-info {
      flex: 1;
      padding-left: .7rem;
    }
    .bd-degree {
      display: flex;
      width: 100%;
      height: .16rem;
      border-radius: .08rem;
      overflow: hidden;
      span {
        height: 100%;
        font-size: 12px;
        color: #fff;
        line-height: .16rem;
        text-align: center;
        &:nth-child(1) {
          flex: 2;
          background-color: #dedede;
        }
        &:nth-child(2) {
          flex: 3;
          background-color: #d0cece;
        }
        &:nth-child(3) {
          flex: 4;
          background-color: #bdbdbd;
        }
        &:nth-child(4) {
          flex: 7;
          background-color: #9c9c9c;
        }
        &:nth-child(5) {
          flex: 11;
          background-color: #828282;
        }
        &:nth-child(6) {
          flex: 16;
          background-color: #6b6b6b;
        }
        &.active {
          background-color: #8c20ff;
        }
      }
    }
    /*.info-box  {
      flex: 1;
      padding-top: .1rem;
      &:nth-child(1) .box-container,
      &:nth-child(2) .box-container{
        .border(right);
      }
    }
    .box-container {
      position: relative;
      width: 94%;
      height: 250px;
      margin-left: auto;
      margin-right: auto;
    }
    .info-score {
      font-size: 14px;
      color: #555;
      span {
        padding-left: 5px;
        font-size: .26rem;
        font-family:'Comic Sans MS', 'Arial', 'Georgia', "Times New Roman", 'Times', 'Microsoft YaHei',serif;
        color: @navy;
      }
    }
    .count {
      padding-top: .12rem;
      font-size: 13px;
      color: #666;
      span {
        font-weight: bold;
        color: @navy;
      }
    }
    .new {
      padding-top: .15rem;
      font-size: 13px;
      color: #666;
      p {
        padding-bottom: 5px;
      }
      a {
        display: inline-block;
        padding-top: 8px;
        padding-right: 10px;
        color: @primary;
        &:hover {
          color: darken(@primary, 15%);
        }
      }
    }
    .btn {
      position: absolute;
      width: 86px;
      height: 35px;
      right: 30px;
      bottom: 30px;
      text-align: center;
      line-height: 35px;
      border-radius: 3px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
      background-color: @navy;
      transition: background-color .2s;
      &:hover {
        background-color: darken(@navy, 5%);
      }
    }*/
  }
  .admin-bd {
    padding-top: .6rem;
  }
}
@media screen and (max-width: 435px){

}
</style>
