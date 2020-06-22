<template>
  <!--宽高比例为2:1-->
  <div class="icons">
    <swiper>
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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
        desc: '旅游景点'
      }, {
        id: '0002',
        imgUrl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
        desc: '专车自驾'
      }, {
        id: '0003',
        imgUrl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
        desc: '旅游团购'
      }, {
        id: '0004',
        imgUrl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
        desc: '特惠酒店'
      }, {
        id: '0005',
        imgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/799d9d090d1625a854194460c8849fee.png',
        desc: '邮轮'
      }, {
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png',
        desc: '周边短途'
      }, {
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png',
        desc: '美食'
      }, {
        id: '0009',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0010',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '0011',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '0012',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '0013',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
        padding : .3rem /*留有间距，这样图片可以收缩大小！！*/
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
