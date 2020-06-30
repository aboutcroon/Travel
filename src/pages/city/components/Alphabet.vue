<template>
  <div>
    <ul class="list">
      <!--touchstart.prevent是用来阻止touchstart的默认行为-->
      <li class="item"
          v-for="item of letters"
          :key="item"
          @click="handleLetterClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () { // 把对象类型转换成数组类型的方法
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters // letters就变成了['A', 'B' ....]
    }
  },
  data () {
    return {
      touchStatus: false, // 用来理清先后顺序
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 获取元素字母A距离这个模块顶部的高度。也就是距离上一个具有定位的祖宗元素的高度，若都不符合条件，则为距离body元素的高度
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText) // 触发事件给父组件，并传值
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) { // 使得只有在点击时，才触发
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 函数节流
          const touchY = e.touches[0].clientY - 79 // 手指距离最顶部的高度，注意是最顶部。所以需要减去顶部header的79像素
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variables.styl"
  .list
    display : flex
    flex-direction : column
    justify-content : center
    position : absolute
    top : 1.58rem
    right : 0
    bottom : 0
    width : .4rem
    .item
      line-height : .4rem
      text-align : center
      color : $bgColor
</style>
