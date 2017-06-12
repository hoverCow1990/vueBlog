<template>
  <section id='homePage'>
    <Banner></Banner>
    <HotObject></HotObject>
    <NewCollection></NewCollection>
    <Project></Project>
    <Recommend></Recommend>
  </section>
</template>

<script>
import Banner from './banner/banner'
import NewCollection from './newCollection/newCollection'
import HotObject from './hotObject/hotObject'
import Project from './project/project'
import Recommend from './recommend/recommend'

export default {
  name: 'homePage',
  components: {
    Banner,
    NewCollection,
    HotObject,
    Project,
    Recommend
  }
}
</script>
