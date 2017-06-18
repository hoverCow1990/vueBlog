<template>
  <div id="app">
    <cow-header></cow-header>
    <router-view></router-view>
    <cow-footer></cow-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  max-width: 100%;
  overflow-x:hidden;
}
</style>
