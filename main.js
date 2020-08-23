import Vue from 'vue'
import App from './App'
import $http from '@/js_sdk/zhouWei-request/requestConfig';
Vue.prototype.$http = $http;
import 'util.js'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
