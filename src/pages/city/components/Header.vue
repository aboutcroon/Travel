<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe658;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variables.styl"
  .header
    position : relative
    overflow : hidden
    height : $headerHeight
    line-height : $headerHeight
    text-align : center
    color : #fff
    background : $bgColor
    font-size : .32rem
    .header-back
      position: absolute  //使用定位使按钮显示出来
      left : 0
      top : 0
      width : .64rem
      text-align : center
      font-size : .4rem
      color : #fff
</style>
