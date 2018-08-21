<template>
  <div class="weekend">
    <div class="weekend-header">周末去哪儿</div>
    <ul class="weekend-list">
      <li class="weekend-item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="景点">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
.weekend
  background #fff
  .weekend-header
    padding-left 0.2rem
    height 0.8rem
    line-height 0.8rem
    background $homeBgColor
  .weekend-list
    .weekend-item
      .item-img
        display block
        width 100%
      .item-info
        padding 0.14rem 0.2rem 0.2rem 0.2rem
        .item-title
          height 0.48rem
          line-height 0.48rem
          padding-right 1.4rem
          font-size 0.28rem
          ellipsis()
        .item-desc
          height 0.42rem
          line-height 0.42rem
          padding-right 1.4rem
          font-size 0.24rem
          color $descTextColor
          ellipsis()
</style>