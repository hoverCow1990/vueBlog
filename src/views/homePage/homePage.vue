<template>
  <section id='homePage'>
    <Banner></Banner>
    <NewCollection></NewCollection>
    <div style='height:500px'>

    </div>
  </section>
</template>

<script>
import Banner from './banner/banner'
import NewCollection from './newCollection/newCollection'

export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Banner,
    NewCollection
  }
}
</script>

<style>

</style>
