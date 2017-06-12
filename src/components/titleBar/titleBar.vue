<template>
  <div class="homePage-titleBar" :class='theme'>
    <h2>{{ title }}</h2>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: 'Titlebar',
  props: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: 'dark'
    }
  }
}
</script>

<style lang='less'>
.homePage-titleBar {
  width: 2rem;
  min-width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h2 {
    display: block;
    width: 100%;
    padding-bottom: .1rem;
    margin-bottom: .1rem;
    font-family: "Consolas";
    font-size: 30px;
  }
  p {
    font-size: 12px;
    letter-spacing: 2px;
  }
  &.light {
    h2 {
      color: #eee;
      border-bottom: 5px solid #ffd86a;
    }
    p {
      color: #999;
    }
  }
  &.dark {
    h2 {
      color: #000;
      border-bottom: 5px solid #000;
    }
    p {
      color: #666;
    }
  }
}
@media screen and (max-width: 435px) {
  .homePage-titleBar {
    h2 {
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-size: .8rem;
    }
  }
}
</style>
