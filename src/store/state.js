let defaultCity = '深圳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  // city: localStorage.city || '深圳' // 先从localStorage中取，取不到则用默认的。这样就实现了刷新完之后还是显示上次那样的
  city: defaultCity
}
