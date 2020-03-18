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
export default {
  components:{
    Nav
  },
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
