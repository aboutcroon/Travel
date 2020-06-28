<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//imgs.qunarzz.com/vs_ceph_b2c_001/2d383399-459d-4fb0-b153-ea5dec7cea8e.jpg_r_480x320x95_f0b38f33.jpg" />
      <div class="banner-info">
        <div class="banner-title">深圳旅游景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe70a;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      imgs: ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1593329175&di=923903a9fb3d2c4f23deb6b9ce5fb24c&src=http://imgsrc.baidu.com/forum/pic/item/21a4462309f7905269e43e9e0cf3d7ca7acbd593.jpg']
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
