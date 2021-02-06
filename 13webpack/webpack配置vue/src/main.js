require('./css/normal.css')
require('./css/special.less')

import {add} from './js/utils.js'
import Vue from 'vue'
import App from './vue/App.vue'

console.log(add(1,2))

// document.writeln('<h2>Hello World !</h2>')

new Vue({
    el: '#app',
    // template会替换 #app
    template: '<App></App>',
    components: {
        App
    }
})


