export default {
  changeCity (state, city) { // 第一个参数state指的是所有的公用数据
    state.city = city // 改变state中的值
    try {
      localStorage.city = city // 实现localStorage的类似于cookie的存储功能
    } catch (e) {}
  }
}
