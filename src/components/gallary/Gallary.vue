<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of gallaryImgs" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImgs: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.container /deep/ .swiper-container
  overflow inherit
.container
  z-index 99
  position fixed
  top 0
  right 0
  left 0
  bottom 0
  background #000
  display flex
  flex-direction column
  justify-content center
  .wrapper
    .swiper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
