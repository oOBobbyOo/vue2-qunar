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
  mutations: {},
  actions: {}
})
