import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// vuex是插件，vue里面使用插件都是通过Vue.use来使用的
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) { // 接收两个参数，第一个是上下文，第二个是我们传过来的city
  //     ctx.commit('changeCity', city) // commit到mutations
  //   }
  // },
  mutations
  // getters: { // getters的作用有点类似于组件中的计算属性的作用，当我们需要根据state里的数据算出一些新的数据的时候，就可以借助getters，来避免数据的冗余
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
