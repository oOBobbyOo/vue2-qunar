<!-- 景点页票类票价详情组件 -->
<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="price-icon"></span>
        <span class="price-title">{{item.name}}</span>
      </div>
      <div v-if="item.children" class="children-list">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
.list
  display flex
  flex-direction column
  .list-item
    .item-title
      display relative
      height 0.64rem
      line-height 0.64rem
      .price-icon
        width 0.36rem
        height 0.36rem
        background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        background-size 0.4rem 3rem
        display inline-block
        position absolute
        top 0.14rem
        left 0.18rem
      .price-title
        margin-left 0.7rem
    .children-list
      margin-left 0.5rem
</style>
