import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.timeout = 5000

axios({
  url: '/a/b/c',
  method: 'get'
}).then(res => {
  console.log(res)
})

axios.all([axios({
  url: '/a/b/d'
}),axios({
  url: '/a/b/e'
})]).then(result => {
  console.log(result[0], console[1])
})

const instance1 = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})


import {request} from "../network/request";
/*request({utl: '/a/b'},
    res => console.log('success'),
    err => console.log('failure'))*/

request({
  url: '/a/b'
}).then(res => {

}).catch(err => {

})

