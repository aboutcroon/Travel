<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 使下方显示轮播图的小点
        paginationType: 'fraction',
        observeParents: true,
        observer: true // 监听dom元素只要发生变化，我就会自我刷新一次
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container  // 在浏览器才能看到的
    overflow : inherit
  /*公用组件要覆盖住其他的，所以背景色设置为黑色*/
  .container
    display : flex
    flex-direction : column
    justify-content : center
    z-index : 99
    position : fixed
    /*上下左右都为0，所以是全屏*/
    left : 0
    right : 0
    top : 0
    bottom : 0
    background: #000
    .wrapper
      /*overflow : hidden*/
      height : 0
      background: #fff
      width : 100%
      padding-bottom : 100% /*可以撑出一个正方形的位置！！！！*/
      .gallery-img
        width : 100%
      .swiper-pagination
        color : #fff
        bottom : -1rem
</style>
