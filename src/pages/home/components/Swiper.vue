<template>
  <!--外层加一个div包裹住，是为了使之不存在在3g网络中发生抖动的问题，因为在加载之前外部的div就已经把高度给撑开了-->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 使下方显示轮播图的小点
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active  /*因为样式的颜色是swiper组件去做显示的，所以改动下面的子组件没用，所以得像下面这样写。这里代码的意思是，只要出现active这个class，就把它的颜色设置为下面颜色*/ /*active是表明正被选中的这个点*/
    background : #fff !important
  .wrapper
    /*overflow : hidden*/
    width : 100%
    /*height : 0*/
    /*padding-bottom : 31.25% /*宽度相对于高度会自动撑开31.25%，使宽高比在任何时候都能保持这个比例。不能直接在height设置31.25%，因为那样是相对于父级元素的*/
    background : #cacaca
    .swiper-img
      width : 100%
</style>
