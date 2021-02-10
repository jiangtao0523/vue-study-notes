<template>
  <div id="app">
    <h2>App Content</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--  不建议直接使用,需要通过mutation来使用  -->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>App Getter</h2>
    <h2>{{$store.getters.power}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>


    <h2>Vuex Content</h2>
    <hello-vuex></hello-vuex>


  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

import {INCREMENT} from "./store/mutations-types";

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT)
    },
    decrement() {
      this.$store.commit('decrement')
    },
    addCounter(count) {
      // this.$store.commit('addCount',count)
      this.$store.commit({
        type: 'addCount',
        count
      })
    },
    updateInfo() {
      // 调用mutations
      // this.$store.commit('updateInfo')
      // 调用actions
      this.$store.dispatch('aUpdateInfo', 'layLoad').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
