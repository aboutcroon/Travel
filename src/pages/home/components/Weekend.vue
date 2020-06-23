<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!--border-bottom让其底下有一像素的边框-->
      <li class="item border-bottom"
          v-for="item of list"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
        title: '华侨城夜景',
        desc: 'a tram beside waiting station during nighttime'
      }, {
        id: '0002',
        imgUrl: 'https://images.unsplash.com/photo-1521428426794-29c957e4d6ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80',
        title: '深圳大学',
        desc: 'the best place I\'ve been'
      }, {
        id: '0003',
        imgUrl: 'https://images.unsplash.com/photo-1494376735015-a56e57657406?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
        title: '深圳湾人才公园',
        desc: 'lighted sea bridge above water'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .title
    /*margin-top : .2rem*/  /*把间距去掉，那么最后一栏就可以不用显示那层线了*/
    line-height : .8rem
    background : #eaeaea
    text-indent : .2rem
  .item-img-wrapper
    /*将整体宽高比设成33.9%*/
    overflow : hidden
    height : 0
    padding-bottom : 37.9%
    .item-img
      width : 100%  /*直接宽为100%就可以填充进去*/
  .item-info
    padding : .1rem
    .item-title
      line-height : .54rem
      font-size : .32rem
      ellipse()
    .item-desc
      line-height : .4rem
      color : #cacaca
      ellipse()
</style>
