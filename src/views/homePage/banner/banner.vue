<template>
  <section class='homePage-banner'>
    <div class="banner">
      <div class="banner-bg">
        <img class='luce' src="./images/bg_luce.png">
        <img class='base' src="./images/grafica_base.png">
      </div>
      <div class="banner-objGroup">
        <img class="colori" src="./images/colori.png">
        <img class="cerchio" src="./images/cerchio.png">
        <img class="penna" src="./images/penna.png">
        <img class="bolla" src="./images/bolla.png">
        <img class="ciambella" src="./images/ciambella.png">
        <img class="uccello" src="./images/uccello.png">
        <img class="occhiali" src="./images/occhiali.png">
        <img class="mela" src="./images/mela.png">
        <img class="cerchio2" src="./images/cerchio2.png">
        <img class="bomboletta" src="./images/bomboletta.png">
        <img class="mouse" src="./images//mouse.png">
        <img class="fish" src="./images/fish2.png" :style='{transform: imgOffset.fish.transform}'>
      </div>
    </div>
    <div class="chasm"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      centerPoint: {
        x: 0,
        y: 0
      },
      imgOffset: {
        fish: {
          propX: -0.015,
          propY: -0.01,
          transform: 'translate3D(200px, 100px, 0)'
        }
      }
    }
  },
  mounted () {
    this.$data.centerPoint = this.getCenterPoint()
  },
  methods: {
    getCenterPoint () {
      let x = this.$el.offsetWidth / 2
      let y = this.$el.offsetHeight / 2
      return {x, y}
    }
  }
}
</script>

<style lang='less'>
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
    height: 3rem;
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
      height: 8.2rem;
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
