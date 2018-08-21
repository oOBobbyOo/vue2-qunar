<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont back-icon">&#xe61f;</span>
        </div>
      </router-link>
      <div class="header-title">城市选择</div>
    </div>
    <div class="g-choose">
      <div class="g-all">
        <router-link to="/city/in" class="g-in">
          境内
        </router-link>
        <router-link to="/city/out" class="g-out">
          境外·港澳台
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  overflow hidden
  height 0.68rem
  line-height 0.88rem
  background $bgColor
  color #fff
  text-align center
  font-size 0.3rem
  .header-left
    float left
    width 0.8rem
    color #fff
  .header-title
    margin 0 1rem
.g-choose
  height 0.8rem
  line-height 0.8rem
  padding 0 0.1rem
  background $bgColor
  color #fff
  margin 0 auto
  display flex
  align-items center
  .g-all
    margin 0 auto
    display flex
    justify-content center
    width 100%
    height 0.36rem
    line-height 0.36rem
    font-size 0.26rem
    text-align center
    border 1px solid #fff
    border-radius 0.1rem
    .g-in
      width 50%
      background #fff
      color $bgColor
    .g-out
      width 50%
      color #fff
</style>
