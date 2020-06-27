<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <!--点击跳转到city路径，router-link使得在外层加了一个a标签，并且具有默认颜色-->
    <router-link to="/city">
      <div class="header-right">
        <!--使用vuex接收数据，由于下面computed属性中映射了，所以可以直接写city-->
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe659;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: { // 把vuex里的数据映射到computed里
    ...mapState(['city']), // 将公有数据city映射到名叫city的计算属性当中
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>  /*加上scoped可以使style里的内容只对当前组件中的样式有效果*/
  @import "~@/assets/styles/variables.styl" /*在css中引用src，符号@前要加~波浪线*/
  .header
    display : flex  /*设置一个flex布局*/
    line-height : $headerHeight
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
      min-width : 1.04rem //让城市变成4个字5个字的时候拥有最小宽度，不会溢出
      padding : 0 .1rem //上下0，左右0.1rem
      float : right
      text-align : center
      color : #fff
      .arrow-icon
        /*margin-left : -.4rem*/
        font-size : .32rem
</style>
