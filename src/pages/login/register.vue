<template>
  <div class="register">
    <router-link 
      class="back"
      :to="{name:'login'}"
    >
      返回登录
    </router-link>
    <header>用户注册</header>
    <input type="text" placeholder="输入用户名">
    <input type="text" placeholder="输入手机号">
    <input type="password" placeholder="输入密码">
    <input type="password" placeholder="再次输入密码">
    <getRand></getRand>
    <div class="btn">注册</div>
  </div>
</template>

<script>
  import getRand from './getRand.vue'
  export default{
    components:{
      getRand
    }
  }
</script>

<style>
  .register{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .register input{
    margin: 10px 0;
  }
  .register .back{
    position: absolute;
    left: -5px;
    background-color: rgba(104,48,213,0.7);
    color: #F4F4F4;
    padding: 5px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 13px;
    cursor: pointer;
  }
  .register .back:hover{
    background-color: #6830d5;
  }
  .register header{
    font-size: 20px;
  }
  .register .btn{
    width: 200px;
    text-align: center;
    margin: 0 auto;
  }
</style>
