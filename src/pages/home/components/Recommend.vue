<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!--border-bottom让其底下有一像素的边框-->
      <!--用router-link替换li标签，但依然让其tag为li，这样就相当于还是一个li标签，并可以绑定to来跳转-->
      <router-link
          tag="li"
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
