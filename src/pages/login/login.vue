<template>
  <div class="login">
    <div class="nav">
      <span
        :class="mode===0 ? 'active' : ''"
        @click="mode=0"
      >
        密码登录
      </span>
      <span
        :class="mode===1 ? 'active' : ''"
        @click="mode=1"
      >
        短信登录
      </span>
    </div>

    <div class="input">
      <!-- 密码登录 -->
      <div
        v-if="mode===0"
        class="psw"
      >
        <input type="text" placeholder="用户名/手机号/邮箱">
        <input type="password" placeholder="密码">
      </div>

      <!-- 短信登录 -->
      <div
        v-if="mode===1"
        class="phone"
      >
        <input type="text" placeholder="手机号">
        <getRand></getRand>
      </div>

      <div class="btn">登录</div>
    </div>

    <!-- 辅助登录功能 -->
    <div
      class="assist">
      <div v-if="!save" class="no-save" @click="save=!save"></div>
      <i v-else class="el-icon-success" @click="save=!save"></i>
      <p @click="save=!save">下次自动登录</p>
      <div class="number-ctr">
        <router-link class="router" :to="{name:'findPsw'}">忘记密码</router-link>
        <span>&ensp;|&ensp;</span>
        <router-link class="router" :to="{name:'register'}">注册账号</router-link>
      </div>
    </div>

    <!-- 关联登录 -->
    <div class="other-number">
      <p>第三方账号登录</p>
      <i class="iconfont icon-weixin"></i>
      <i class="iconfont icon-QQ"></i>
      <i class="iconfont icon-weibo"></i>
    </div>
  </div>
</template>

<script>
  import getRand from './getRand.vue'
  export default{
    data(){
      return{
        mode : 1,
        save : false,
      }
    },
    components:{
      getRand
    }
  }
</script>

<style scoped>
  .login{
    position: relative;
  }

  .login .nav{
    margin-top: 7px;
    margin-left: 10px;
    padding: 0 5px;
    border-bottom: 1px solid #aeaeae;
    display: flex;
  }
  .login .nav span{
    width: 80px;
    margin-right: 15px;
    padding: 7px 2px;
    border-bottom: 2px solid #F4F4F4;
    cursor: pointer;
    text-align: center;
    transition: all 0.5s;
  }
  .login .nav span:hover{
    color: #6830d5;
  }
  .login .nav .active{
    color: #6830d5;
    border-bottom: 2px solid #6830d5;
  }

  .login .input{
    width: 100%;
  }
  .login .input .btn{
    width: 200px;
    text-align: center;
    margin: 0 auto;
  }
  .login .input .psw,.login .input .phone{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login .assist{
    padding: 15px 5%;
    display: flex;
    align-items: center;
  }
  .login .assist .no-save{
    margin-right: 5px;
    width: 18px;
    height: 18px;
    background-color: rgba(174,174,174,0.5);
    border-radius: 50%;
    cursor: pointer;
  }
  .login .assist i{
    width: 18px;
    height: 18px;
    margin-right: 5px;
    font-size: 18px;
    color: #6830d5;
    cursor: pointer;
  }
  .login .assist p{
    font-size: 13px;
    flex: 1;
    cursor: pointer;
  }
  .login .assist .number-ctr{
    display: flex;
    white-space: nowrap;
  }
  .login .assist .number-ctr .router{
    color: #8b8b8b;
    font-size: 13px;
    cursor: pointer;
  }
  .login .assist .number-ctr .router:hover{
    color: #6830D5;
  }

  .login .other-number{
    color: #8b8b8b;
    font-size: 15px;
    text-align: center;
    padding: 10px 0;
  }
  .login .other-number p{
    margin-bottom: 10px;
  }
  .login .other-number i{
    font-size: 45px;
    margin: 0 15px;
    cursor: pointer;
  }
  .login .other-number i:hover{
    color: #6830D5;
  }
</style>
