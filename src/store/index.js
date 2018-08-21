import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '武汉'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (err) {
  console.log(err)
}

export default new Vuex.Store({
  state: {
    city: defaultCity || '武汉'
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (err) {
        console.log(err)
      }
    }
  },
  actions: {}
})
