<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe658;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe658;</div>
      </router-link>
    </div>
    <div class="content">ss</div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: { // 使header有渐变效果
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140 // 从60到140之间，使opacity从0到1变化
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variables.styl"
  .header-abs // 做一个圆形
    position : absolute
    left : .2rem
    top : .2rem
    width : .8rem
    height : .8rem
    text-align : center
    line-height : .8rem
    border-radius : .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
  .header-fixed
    position : fixed
    top : 0
    left : 0
    right : 0
    /*overflow : hidden*/
    height : $headerHeight
    line-height : $headerHeight
    text-align : center
    color : #fff
    background : $bgColor
    font-size : .32rem
    .header-fixed-back
      position: absolute  //使用定位使按钮显示出来
      left : 0
      top : 0
      width : .64rem
      text-align : center
      font-size : .4rem
      color : #fff
  .content
    height : 50rem
</style>
