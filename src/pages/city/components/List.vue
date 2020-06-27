<template>
  <div class="list" ref="wrapper">
    <!--在最外层再包裹一层div，使得其符合better-scroll的使用-->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 当点击城市的时候，Actions会被dispatch(派发)，然后$store里的Actions就会接收到传过去的city
      // this.$store.dispatch('changeCity', city) // 调用dispatch方法来使用Actions
      // this.$store.commit('changeCity', city) // 若不是批量的异步的调用数据，则可以直接调用commit
      this.changeCity(city)
      this.$router.push('/') // 跳转到首页
    },
    ...mapMutations(['changeCity']) // 将名字叫changeCity的mutations映射到本组件中的名叫changeCity的方法里
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]// 获取到的是数组，所以取第一个元素，也就是key所对应的该一整块area节点
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color : #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color : #ccc
  .list
    // 使得上下无法拖动了
    overflow : hidden
    position : absolute
    top : 1.58rem
    left : 0
    right : 0
    bottom : 0
    .title
      line-height : .54rem
      background: #eee
      padding-left : .2rem
      color : #666
      font-size : .26rem
    .button-list
      overflow : hidden
      padding : .1rem .6rem .1rem .1rem
      .button-wrapper
        width : 33.33%
        float : left
        .button
          padding : .1rem 0
          margin : .1rem
          text-align : center
          border : .02rem solid #ccc
          border-radius : .06rem
    .item-list
      line-height : .76rem
      padding-left : .2rem
</style>
