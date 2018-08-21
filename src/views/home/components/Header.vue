<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe61f;</span>
    </div>
    <div class="iconfont header-input">
      <span class="iconfont search-icon">&#xe693;</span>
      <input class="header-input-in" placeholder="输入城市/景点/游玩主题" />
    </div>
    <router-link to='/city/in'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6dc;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  display flex
  line-height 0.86rem
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      margin-left 0.12rem
      text-align center
      font-size 0.4rem
  .header-input
    display inline-block
    position relative
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-right 0.2rem
    padding-left 0.5rem
    border-radius 0.1rem
    background #fff
    .search-icon
      position absolute
      left 0.1rem
      color #aaa
    .header-input-in
      width 100%
      font-size 0.26rem
      color #aaa
      font-family '微软雅黑'
  .header-right
    min-width 1.04rem
    padding 0 0.1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.23rem
</style>

