import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios//全局使用axios

/* 使用ui库 */
import { Radio,RadioGroup,Message,Popover,DatePicker } from 'element-ui';
Vue.use(Radio).use(RadioGroup).use(Popover).use(DatePicker)
Vue.prototype.$message = Message;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
