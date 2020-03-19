<template>
  <div id="app">
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import { Loading } from 'element-ui'
var loadingInstance
export default {
  components:{
    Nav
  },
  created() {
    // 检验账号
    const userInfo = localStorage.getItem('loginInfo')
    if(userInfo)
      this.$axios.post('/api/user/judgeLogin',JSON.parse(userInfo))
      .then(res => {
        if(res.data.status === 200){
          this.$store.commit('changeUserInfo',res.data.userInfo)
          global.Message(this,'success','登录成功')
        }
        else
          global.Message(this,'warning',res.data.err)
      })
    
    // 请求拦截
    this.$axios.interceptors.request.use(
      res => {
        loadingInstance = Loading.service({ 
          fullscreen: true,
          text : "请求中",
          background : "rgba(0,0,0,0.3)"
        });
        return res
      },
      err => {
        loadingInstance.close()
        return Promise.reject(err)
      }
    )
    //响应拦截 收到响应后统一处理
    this.$axios.interceptors.response.use(
    	res => {
        if(res.data.status === 200)
          console.log(res.data)
        else
          global.Message(this,'error',res.data.err)
    		loadingInstance.close()
    		return res
    	},
    	err => {
        global.Message(this,'error','请求错误')
        loadingInstance.close()
        return Promise.reject(err)
    	}
    );
  }
}

global.Router = (that,name) => that.$router.push({name:name})
global.Alert = (that,text) => {
  that.$alert(text, '提示', {
    confirmButtonText: '确认'
  })
}
global.Message = (that,type,text) => {
  that.$message({
    message: text,
    type: type,
    duration : 2000,
    center: true,
    offset : 60
  });
}
</script>

<style>
@import url("../static/common.css");
@import url("../static/element.css");
#app{
  background-color: #F4F4F4;
}
</style>
