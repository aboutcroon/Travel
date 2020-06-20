<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe659;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>  /*加上scoped可以使style里的内容只对当前组件中的样式有效果*/
  @import "~@/assets/styles/variables.styl" /*在css中引用src，符号@前要加~波浪线*/
  .header
    display : flex  /*设置一个flex布局*/
    line-height : .86rem
    background : $bgColor
    color : #fff  /*文字内容的颜色*/
    .header-left
      width : .64rem
      float : left  /*向左浮动*/
      .back-icon
        text-align : center
        font-size : .4rem
    .header-input
      flex : 1
      height : .62rem
      line-height : .62rem
      margin-top : .12rem
      margin-left : .2rem
      background : #fff
      border-radius : .1rem /*使边框变得圆润一点*/
      color : #cacaca
      padding-left : .2rem
    .header-right
      width : 1.24rem
      float : right
      text-align : center
      .arrow-icon
        /*margin-left : -.4rem*/
        font-size : .32rem
</style>
