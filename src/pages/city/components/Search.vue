<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <!--v-show使得不输入值时就不显示整个search-content这一标签-->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <!--用v-show来使得搜索成功时则不显示这一栏-->
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
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
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 当搜索结果无匹配时，则清空
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) { // i是key值，遍历字母
          this.cities[i].forEach((value) => { // 遍历某字母中的所有城市
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value) // 如果再keyword中能找到，则把它加到result数组中
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variables.styl"
  .search
    height : .72rem
    padding : 0 .1rem
    background: $bgColor
    .search-input
      box-sizing : border-box
      width : 100%
      height : .62rem
      padding : 0 .1rem
      line-height : .62rem
      text-align : center
      border-radius : .06rem
      color : #666
  .search-content
    z-index : 1
    overflow : hidden
    position: absolute
    top : 1.58rem
    left : 0
    right : 0
    bottom : 0
    background: #eee
    .search-item
      line-height : .62rem
      padding-left : .2rem
      color : #666
      background: #fff
</style>
