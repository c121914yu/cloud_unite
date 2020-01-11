<template>
  <div class="user">
    <div class="title">
      <p class="head">GenDoo更多</p>
      <p class="explain">登录更多网, 保护你的作品权益, 营造良好的设计市场</p>
    </div>

    <div class="main">
      <transition name="left">
        <router-view class="content"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        direction : 'slide-right'
      }
    }
  }
</script>

<style>
  .user{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6830d5;
    letter-spacing: 1px;
    user-select:none;
  }

  .user .title{
    margin-top: 30px;
    color: #F4F4F4;
    text-align: center;
  }
  .user .title .head{
    font-size: 30px;
    font-weight: 600;
  }
  .user .title .explain{
    margin: 15px 0;
    font-size: 15px;
  }

  .user .main{
    width: 350px;
    height: 360px;
    min-height: 200px;
    background-color: #F4F4F4;
    border-radius: 5px;
    padding: 5px;
    overflow: hidden;
  }
  .user .main .content{
    height: 350px;
    width: 340px;
    position: absolute;
  }
  .user .main .content input{
    margin: 10px 0;
    width: 90%;
    height: 35px;
    background-color: rgba(235,235,235,0.7);
  }
  .left-enter{
    transform:translateX(350px);
    opacity: 0.5;
  }
  .left-enter-to{
    transform:translateX(0);
    opacity: 1;
  }
  .left-enter-active{
    transition: 1s;
  }
  .left-leave{
    transform:translateX(0);
    opacity: 1;
  }
  .left-leave-to{
    transform:translateX(-350px);
    opacity: 0.5;
  }
  .left-leave-active{
    transition: 1s;
  }
</style>
