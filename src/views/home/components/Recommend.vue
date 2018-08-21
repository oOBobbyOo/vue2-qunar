<template>
  <div class="recommend">
    <div class="recommend-header">
      <img class="header-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="header-title">猜你喜欢</span>
    </div>
    <ul class="recommend-list">
      <router-link :to="'/detail/' + item.id" tag="li" class="recommend-item border-top" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="景点">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-address">{{item.address}}</p>
          <p class="item-price">
            <span class="price-icon">￥</span>
            <span class="price-number">{{item.price}}</span>起
          </p>
        </div>
        <button class="item-more">查看详情</button>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
.recommend
  background #fff
  margin-top 0.2rem
  padding-left 0.2rem
  .recommend-header
    height 0.47rem
    line-height 0.47rem
    padding 0.24rem 0
    .header-img
      height 70%
      vertical-align top
    .header-title
      text-align left
      font-size 0.3rem
      margin-left 0.04rem
  .recommend-list
    .recommend-item
      position relative
      display flex
      height 2rem
      width 100%
      padding 0.2rem 0
      .item-img
        display inline-block
        height 100%
      .item-info
        flex 1
        min-width 0
        padding-left 0.22rem
        .item-title
          margin-top 0.28rem
          font-size 0.32rem
          ellipsis()
        .item-address
          margin-top 0.22rem
          font-size 0.24rem
          color $descTextColor
          ellipsis()
        .item-price
          margin-top 0.26rem
          color $descTextColor
        .price-icon
          color #ff8300
          vertical-align bottom
          font-size 0.24rem
        .price-number
          color #ff8300
          font-size 0.4rem
      .item-more
        position absolute
        background $bgColor
        height 0.3rem
        line-height 0.3rem
        font-size 0.18rem
        border-radius 0.04rem
        padding 0 0.1rem
        color #fff
        bottom 0.24rem
        right 0.24rem
</style>
