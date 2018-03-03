<template>
  <section id='homePage'>
    <Banner></Banner>
    <HotObject></HotObject>
    <NewCollection></NewCollection>
    <Entrance></Entrance>
    <Project></Project>
    <Recommend></Recommend>
  </section>
</template>

<script>
import Banner from './banner/banner'
import NewCollection from './newCollection/newCollection'
import HotObject from './hotObject/hotObject'
import Entrance from './entrance/entrance'
import Project from './project/project'
import Recommend from './recommend/recommend'

export default {
  components: {
    Banner,
    NewCollection,
    HotObject,
    Entrance,
    Project,
    Recommend
  }
}
</script>
