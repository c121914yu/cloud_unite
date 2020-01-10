import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios//全局使用axios

import './assets/icon/iconfont.css'//引入图标库

/* 使用ui库 */
import '../static/element/index.css'
import ElementUI from 'element-ui'

import {
  Radio,
  RadioGroup,
  Message,
  Popover,
  DatePicker,
  Select,
  Option,
  MessageBox
} from 'element-ui';
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
  render: h => h(App)
})
