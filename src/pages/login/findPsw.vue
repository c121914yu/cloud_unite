<template>
  <div class="findPsw">
    <router-link
      class="back"
      :to="{name:'login'}"
    >
      返回登录
    </router-link>
    <header>找回密码</header>

    <el-select
      class="find-way"
      placeholder="请选择找回方式"
      v-model="way"
    >
      <el-option
        v-for="(item,index) in ways"
        :key="index"
        :label="item.way"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <input type="text" :placeholder="way==='phone'? '输入手机号':'输入邮箱'">
    <input type="password" placeholder="输入新密码">
    <input type="password" placeholder="再次输入密码">
    <getRand></getRand>
    <div class="btn">修改密码</div>
  </div>
</template>

<script>
  import getRand from './getRand.vue'
  export default{
    data(){
      return{
        ways : [
          {way : '手机号',value:'phone'},
          {way : '邮箱',value:'email'},
        ],
        way : 'phone'
      }
    },
    components:{
      getRand
    }
  }
</script>

<style>
  .findPsw{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .findPsw input{
    margin: 10px 0;
  }
  .findPsw .back{
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
  .findPsw .back:hover{
    background-color: #6830d5;
  }

  .findPsw .find-way{
    width: 90%;
  }
  .findPsw header{
    font-size: 20px;
  }
  .findPsw .btn{
    width: 200px;
    text-align: center;
    margin: 0 auto;
  }
</style>
