import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//默认api地址
Vue.prototype.Api = 'http://huayinai.com:10000'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
