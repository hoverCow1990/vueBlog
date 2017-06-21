<template>
  <section id='messagePage'>
    <cow-header-filler></cow-header-filler>
    <div class="container messagePage-container">
      <cow-message-board type='red'></cow-message-board>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.messagePage-container {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  .pageTab {
    padding-left: 10px;
  }
}
@media screen and (max-width: 435px){

}
</style>
