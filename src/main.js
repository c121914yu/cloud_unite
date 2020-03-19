import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

// 引入vuex
import store  from './store.js'

import axios from 'axios'
Vue.prototype.$axios = axios//全局使用axios

import '../static/icon/iconfont.css'//引入图标库

/* 使用ui库 */
import '../static/element/index.css'
import {
  Radio,
  RadioGroup,
  Popover,
  DatePicker,
  Select,
  Option,
  Message,
  MessageBox} from 'element-ui'
Vue.use(Radio)
   .use(RadioGroup)
   .use(Popover)
   .use(DatePicker)
   .use(Select)
   .use(Option)
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
