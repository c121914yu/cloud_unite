import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home/home'

import protect from '../pages/protect/protect'

import discover from '../pages/discover/discover'
import business from '../pages/business/business'
import circle from '../pages/circle/circle'

import my from '../pages/selfInfo/my'
import mywork from '../pages/selfInfo/works.vue'
import upwork from '../pages/selfInfo/upwork.vue'
import mydata from '../pages/selfInfo/info.vue'

import login from '../pages/login.vue'

export default new Router({
  routes: [
    {path: '/login',name:"login",component:login,},

    {path: '/home',name: 'home',component: home},

    {path: '/protect',name: 'protect',component: protect},

    {path: '/discover',name: 'discover',component: discover},
    {path: '/business',name: 'business',component: business},
    {path: '/circle',name: 'circle',component: circle},

    {path: '/my',name: 'my',component: my,redirect:'/my/mywork',children:[
      {path: 'mywork',name: 'mywork',component: mywork},
      {path: 'upwork',name: 'upwork',component: upwork},
      {path: 'mydata',name: 'mydata',component: mydata},
    ]},
    
    {path: '*',redirect:'/home'},
  ],
  mode : "history",
  linkActiveClass : "currentNav" //设置选中导航的样式
})
