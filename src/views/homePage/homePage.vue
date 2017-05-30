<template>
  <section id='homePage'>
    <Banner></Banner>
    <HotObject></HotObject>
    <NewCollection></NewCollection>
    <div style='height:500px'>

    </div>
  </section>
</template>

<script>
import Banner from './banner/banner'
import NewCollection from './newCollection/newCollection'
import HotObject from './hotObject/hotObject'

export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Banner,
    NewCollection,
    HotObject
  }
}
</script>

<style>

</style>
