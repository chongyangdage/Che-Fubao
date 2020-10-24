import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import {myRequest,myUploadFile} from './utils/myUploadFile.js'; //接口挂载原型链

Vue.prototype.$myRequest = myRequest //请求

Vue.prototype.$myUploadFile = myUploadFile //上传
// //引入
// import { myRequest } from './utils/api.js'
// //在原型中挂载
// Vue.prototype.$myRequest=myRequest;
const app = new Vue({
    ...App
})
app.$mount()
