<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!--border-bottom让其底下有一像素的边框-->
      <li class="item border-bottom"
          v-for="item of list"
          :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    margin-top : .2rem
    line-height : .8rem
    background : #eaeaea
    text-indent : .2rem
  .item
    overflow : hidden
    display : flex
    height : 1.9rem
    /*background: red*/
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex : 1  /*使之自动撑开*/
      padding : .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size : .32rem
        ellipse()
      .item-desc
        line-height : .4rem
        color : #cacaca
        ellipse()
      .item-button
        line-height : .44rem
        margin-top : .16rem
        background: #ff9300
        padding : 0 .2rem
        border-radius : .06rem
        color : #fff
</style>
