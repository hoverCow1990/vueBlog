<template>
  <section class='homePage-banner' @mousemove='handlerImgMove'>
    <div class="banner">
      <div class="banner-bg">
        <img class='luce' src="./images/bg_luce.png">
        <img class='base' src="./images/grafica_base.png">
      </div>
      <div class="banner-objGroup">
        <img class="colori" src="./images/colori.png" :style='{transform: imgOffset.colori.transform}'>
        <img class="cerchio" src="./images/cerchio.png" :style='{transform: imgOffset.cerchio.transform}'>
        <img class="penna" src="./images/penna.png" :style='{transform: imgOffset.penna.transform}'>
        <img class="bolla" src="./images/bolla.png" :style='{transform: imgOffset.bolla.transform}'>
        <img class="ciambella" src="./images/ciambella.png" :style='{transform: imgOffset.ciambella.transform}'>
        <img class="uccello" src="./images/uccello.png" :style='{transform: imgOffset.uccello.transform}'>
        <img class="occhiali" src="./images/occhiali.png" :style='{transform: imgOffset.occhiali.transform}'>
        <img class="mela" src="./images/mela.png" :style='{transform: imgOffset.mela.transform}'>
        <img class="cerchio2" src="./images/cerchio2.png" :style='{transform: imgOffset.cerchio2.transform}'>
        <img class="bomboletta" src="./images/bomboletta.png" :style='{transform: imgOffset.bomboletta.transform}'>
        <img class="mouse" src="./images//mouse.png" :style='{transform: imgOffset.mouse.transform}'>
        <img class="fish" src="./images/fish2.png" :style='{transform: imgOffset.fish.transform}'>
      </div>
    </div>
    <div class="chasm"></div>
  </section>
</template>

<script>
import mixin from './mixin'
export default {
  data () {
    return {
      centerPoint: {
        x: 0,
        y: 0
      }
    }
  },
  mixins: [mixin],
  mounted () {
    this.initializeCenterPoint()
  },
  methods: {
    // 设置初始中心点
    initializeCenterPoint () {
      this.$data.centerPoint = this.getCenterPoint()
      window.onresize = () => {
        this.$data.centerPoint = this.getCenterPoint()
        this.initializeImgPoint()
      }
    },
    // 获取banner中心点
    getCenterPoint () {
      let x = this.$el.offsetWidth / 2
      let y = this.$el.offsetHeight / 2
      return {x, y}
    },
    // 调整图片位子
    handlerImgMove (ev) {
      let {centerPoint, imgOffset} = this.$data
      let moveX = ev.clientX - centerPoint.x
      let moveY = ev.clientY - centerPoint.y
      for (let key in this.$data.imgOffset) {
        imgOffset[key].transform = `translate3D(${moveX * imgOffset[key].propX}px, ${moveY * imgOffset[key].propY}px, 0)`
      }
    },
    // 将图片位置都归为0
    initializeImgPoint () {
      let {imgOffset} = this.$data
      for (let key in this.$data.imgOffset) {
        imgOffset[key].transform = 'translate3D(0, 0px, 0)'
      }
    }
  }
}
</script>

<style lang='less' scoped>
.homePage-banner {
  position: relative;
  width: 100%;
  .banner {
    position: relative;
    width: 100%;
    height: 6.81rem;
    background: url(./images/bg.jpg);
  }
  .chasm {
    width: 100%;
    height: 2.2rem;
    background-image: url('./images/sendBg.png')
  }
  .banner-bg {
    position: absolute;
    width: 12.06rem;
    height: 100%;
    left: 50%;
    margin-left: -5.5rem;
    bottom: 0;
    z-index: 1;
  }
  .banner-objGroup {
    position: relative;
    width: 8.48rem;
    height: 8.6rem;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
  }
  img {
    position: absolute;
    &.luce {
      width: 100%;
      bottom: 0;
      z-index: 1;
    }
    &.base {
      width: 100%;
      left: 50%;
      margin-left: -7.42rem;
      bottom: -2.03rem;
      z-index: 2;
    }
    &.colori {
      width: 5.17rem;
      height: 1.01rem;
      top: 2.5rem;
      left: 1.9rem;
      z-index: 1;
    }
    &.cerchio {
      width: .8rem;
      height: .8rem;
      top: 5rem;
      left: 1.8rem;
      z-index: 1;
    }
    &.penna {
      width: 3.37rem;
      height: 1.83rem;
      top: 5.8rem;
      left: .4rem;
      z-index: 1;
    }
    &.bolla {
      width: 1.71rem;
      height: 1.75rem;
      top: 4.2rem;
      left: .2rem;
      z-index: 2;
    }
    &.ciambella {
      width: 2.86rem;
      height: 2.92rem;
      top: 3.8rem;
      left: 2rem;
      z-index: 5;
    }
    &.uccello {
      width: 1.37rem;
      height: 1.45rem;
      left: 1rem;
      top: 2.6rem;
      z-index: 2;
    }
    &.occhiali {
      width: 1.96rem;
      height: 1.13rem;
      top: 1.8rem;
      left: 6.2rem;
      z-index: 1;
    }
    &.mela {
      width: 1.09rem;
      height: 1.02rem;
      top: 3.2rem;
      left: 5.86rem;
      z-index: 2;
    }
    &.cerchio2 {
      width: .83rem;
      height: .83rem;
      top: 5.7rem;
      left: 5.5rem;
      z-index: 1;
    }
    &.bomboletta {
      width: 1.07rem;
      height: 1.35rem;
      top: 5.9rem;
      left: 5.6rem;
      z-index: 2;
    }
    &.mouse {
      width: 4.32rem;
      height: 3.68rem;
      top: 4.1rem;
      left: 5.6rem;
      z-index: 3;
    }
    &.fish {
      width: 3.15rem;
      height: 2.91rem;
      left: 2.9rem;
      top: 2.8rem;
      z-index: 3;
    }
  }
}
@media screen and (max-width: 435px){
  .homePage-banner {
      img {
        &.fish {
          top: 3.6rem;
        }
        &.mouse {
          top: 5.1rem;
        }
        &.bomboletta {
          top: 6.6rem;
        }
        &.cerchio2 {
          top: 6.4rem;
        }
        &.mela {
          top: 3.8rem;
        }
        &.occhiali {
          top: 2.5rem;
        }
        &.ciambella {
          top: 5.2rem;
          left: 1.6rem;
        }
        &.penna {
          top: 6.9rem;
        }
        .cerchio {
          top: 6.5rem;
          left: 2.2rem;
        }
      }
  }
}
</style>
