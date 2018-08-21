<!-- 渐隐渐现动画组件 -->
<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.fade-enter, .fade-leave-to
  opacity 0
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
</style>
