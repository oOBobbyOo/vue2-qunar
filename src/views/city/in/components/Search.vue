<!-- 查询匹配到的城市组件 -->
<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="this.keyword" ref="search">
      <ul>
        <li class="city-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="city-item border-bottom" v-show="noCityList">
          查询不到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
      listShow: false
    }
  },
  computed: {
    noCityList() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
  height 0.54rem
  line-height 0.54rem
  text-align center
  background $bgColor
  padding 0.1rem
  .search-input
    box-sizing border-box
    padding 0 0.1rem
    text-align center
    width 100%
    height 0.5rem
    border-radius 0.08rem
    font-size 0.22rem
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 2.22rem
  left 0
  right 0
  bottom 0
  background $homeBgColor
  color #666
  .city-item
    height 0.5rem
    line-height 0.5rem
    font-size 0.26rem
    padding 0.1rem 0.5rem 0.1rem 0.34rem
    background #fff
</style>
