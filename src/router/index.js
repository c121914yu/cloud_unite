import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home/home'

import protect from '../pages/protect/protect'

import discover from '../pages/discover/discover'
import business from '../pages/business/business'
import circle from '../pages/circle/circle'

import my from '../pages/my/my'
import upworks from '../pages/my/upworks'
import myworks from '../pages/my/myworks'
import myinfo from '../pages/my/myinfo'

import user from '../pages/login/user.vue'
import login from '../pages/login/login.vue'
import findPsw from '../pages/login/findPsw.vue'
import register from '../pages/login/register.vue'

export default new Router({
  routes: [
    {path: '*',redirect:'/home'},//错误地址重新定向

    {path: '/login',component:user,
      children:[
        {path: '',name: 'login',component:login},
        {path: 'findPsw',name: 'findPsw',component:findPsw},
        {path: 'register',name: 'register',component:register},
      ]
    },


    {path: '/home',name: 'home',component: home},

    {path: '/protect',name: 'protect',component: protect},

    {path: '/discover',name: 'discover',component: discover},
    {path: '/business',name: 'business',component: business},
    {path: '/circle',name: 'circle',component: circle},

    {path: '/my',name: 'my',component: my,redirect:'/my/myinfo',
			children:[
        {path: 'myworks',name: 'myworks',component: myworks},
			  {path: 'upworks',name: 'upworks',component: upworks},
			  {path: 'myinfo',name: 'myinfo',component: myinfo},
			]
		},
  ],
  linkActiveClass : "active" //设置选中导航的样式
})
