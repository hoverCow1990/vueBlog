<template>
  <canvas :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<script>
export default {
  name: 'PropCircle',
  props: {
    percent: Number,
    color: String,
    stroke: Number
  },
  data () {
    return {
      canvasWidth: 0,
      canvasHeight: 0
    }
  },
  mounted () {
    this.setCanvas()
  },
  methods: {
    setCanvas () {
      const $el = this.$el
      const $par = $el.parentNode
      this.$data.canvasWidth = $par.offsetWidth
      this.$data.canvasHeight = $par.offsetHeight
      this.$data.center = this.$data.canvasWidth / 2 - this.stroke
      this.$data.ctx = $el.getContext('2d')
      this.$nextTick(() => {
        this.startCanvas(this.$data.ctx)
      })
    },
    startCanvas (ctx) {
      let {center} = this.$data
      let {percent, color, stroke} = this
      console.log(stroke, center)
      let stColorRad = Math.PI / 2 * 3
      let endColorRad = stColorRad + Math.PI * 2 / (100 / percent)
      ctx.beginPath()
      ctx.arc(center + stroke, center + stroke, center, stColorRad, endColorRad, true)
      ctx.lineWidth = stroke
      ctx.strokeStyle = '#eee'
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(center + stroke, center + stroke, center, stColorRad, endColorRad, false)
      ctx.strokeStyle = color
      ctx.lineCap = 'round'
      ctx.stroke()
      ctx.closePath()
    }
  }
}
</script>

<style lang='less'>
.propCircle {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 435px) {

}
</style>
