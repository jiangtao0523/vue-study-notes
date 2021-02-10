import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {INCREMENT} from "./mutations-types";

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'jt',
      age: 23
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
       state.counter--
    },
    addCount(state, count) {
       state.counter = state.counter + count
    },
    updateInfo(state) {
      // 通过这种方式才可以实现响应式
      // Vue.set(state.info, 'address', 'nc')
      Vue.delete(state.info,'age')
    }
  },
  getters: {
    power(state) {
      return state.counter * state.counter
    },
    more20Stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20StuLength(state,getter) {
      return getter.more20Stu.length
    },
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  actions: {
    // 异步修改state需要到actions中来操作
    aUpdateInfo(context,payLoad) {
      return new Promise((resolve,reject) => {
        setTimeout( () => {
          context.commit('updateInfo')
          resolve('回调')
        },1000)
      })
    }
  },
  modules: {
    a: {
      state: {},
      mutations: {},
      getters: {},
      actions: {}
    },
    b: {
      state: {},
      mutations: {},
      getters: {},
      actions: {}
    }
  }
})

export default store
