<template>
  <div id="header-filler"></div>
</template>

<script>
export default {
  name: 'HeaderFiller'
}
</script>

<style lang='less'>
#header-filler {
  height: 1.05rem;
}

@media screen and (max-width: 435px){
  #header-filler {
    height: 68px;
  }
}
</style>
