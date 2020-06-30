<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe70a;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation> <!--这样子common-gallery这个组件就会作为一个插槽的形式插入fade-animation组件中-->
      <common-gallery
        :imgs="bannerImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery'
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position : relative
    overflow : hidden
    height : 0
    padding-bottom : 55%
    .banner-img
      width : 100%
    .banner-info
      display : flex
      position : absolute
      left : 0
      right : 0
      bottom : 0
      line-height : .6rem
      color : #fff
      background-image : linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) // 从上到下渐变
      .banner-title
        flex : 1
        font-size : .32rem
        padding : 0 .2rem
      .banner-number
        line-height : .32rem
        height : .32rem
        margin-top : .14rem
        padding 0 .4rem
        border-radius : .2rem
        background: rgba(0, 0, 0, .8)
        font-size : .24rem
        .banner-icon
          font-size : .24rem
</style>
