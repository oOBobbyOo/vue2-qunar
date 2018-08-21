<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="banner-slide">
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont photo-icon">&#xe872;&nbsp;</span>
          <span class="photo-number">{{gallaryImgs.length}}</span>
        </div>
        <div class="banner-title">
          {{sightName}}
          <span class="iconfont arrow-icon">&#xe62d;</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'components/gallary/Gallary'
import FadeAnimation from 'components/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    flex-direction column
    position absolute
    padding-bottom 0.06rem
    bottom 0
    left 0
    right 0
    line-height 0.5rem
    color #fff
    font-weight 500
    background-image linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    )
    .banner-title
      flex 1
      font-size 0.3rem
      padding 0 0.2rem
      ellipsis()
      .arrow-icon
        float right
    .banner-number
      width 0.4rem
      height 0.34rem
      line-height 0.34rem
      padding 0 0.4rem
      margin 0 0 0.06rem 0.2rem
      line-height 0.34rem
      font-size 0.24rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.6)
      display flex
      justify-content center
      .photo-icon
        // display: inline-block;
        line-height 0.34rem
      .photo-number
        font-size 0.24rem
        margin-top 0.02rem
</style>
