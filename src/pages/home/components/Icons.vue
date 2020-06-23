<template>
  <!--宽高比例为2:1-->
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false // 使轮播图不要自动的滚动
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variables.styl"
  @import "~@/assets/styles/mixins.styl"
  .icons >>> .swiper-container  /*使得在空白区域也能滑动*/ /*这个swiper-container是在浏览器里才能看到的class，它自带了overflow: hidden*/
    height : 0
    padding-bottom : 50%
  .icons
    /*overflow : hidden*/
    /*height : 0*/
    /*padding-bottom : 50%  /*这样宽高比就是2了*/
    /*background : green*/
    /*margin-top : .1rem  /*与下面的热销推荐相对应，这里与上方留有一点间距*/
    .icon
      position : relative
      overflow: hidden
      float : left
      width : 25% /*使得正好可以有4乘以25为100*/
      height : 0  /*使得图片整体会在25%的空间内，不会溢出*/
      padding-bottom : 25%
      /*background : antiquewhite*/
      .icon-img
        position : absolute
        /*使其紧贴左上右*/
        top : 0
        left : 0
        right : 0
        bottom : .44rem /*给p标签留出22像素的位置*/
        box-sizing : border-box
        padding : .25rem /*留有间距，这样图片可以收缩大小！！*/
        /*background: blue*/
        .icon-img-content
          display : block /*此元素将显示为块级元素，此元素前后会带有换行符。*/
          margin : 0 auto /*使图片有自动居中*/
          height : 100%
      .icon-desc
        position : absolute
        left : 0
        right : 0
        bottom : 0
        height : .44rem
        line-height : .44rem
        text-align : center
        color : $darkTextColor
        ellipse()
</style>
