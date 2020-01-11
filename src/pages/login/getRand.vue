<template>
  <div class="getrand">
    <input type="text" placeholder="验证码">
    <div
      class="get-rand"
      :class="time===0 ? 'ready' : 'wait'"
      @click="getRand"
    >
      <p>{{randBtn}}</p>
    </div>
  </div>
</template>

<script>
  var Randinterval
  export default{
    data(){
      return{
        time : 0,//验证码计时器
      }
    },
    methods:{
      getRand(){
        if(this.time === 0){
          //发送验证码
          this.time = 10
          Randinterval = setInterval(() => {
            this.time--
          },1000)
        }
      }
    },
    computed:{
      randBtn(){
        if(this.time === 0){
          clearInterval(Randinterval)
          return '重新获取'
        }
        if(this.time === 0)
          return '获取验证码'
        else{
          if(this.time < 10)
            return `0${this.time}s`
          else
            return `${this.time}s`
        }
      }
    },
  }
</script>

<style>
  .getrand{
    width: 90%;
    display: flex;
    align-items: center;
  }
  .getrand input{
    width: 130px;
    flex: 1;
  }
  .getrand .get-rand{
    margin-left: 10px;
    width: 95px;
    height: 35px;
    padding: 7px 0;
    border: 1px solid #DCDFE6;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .getrand .ready:hover{
    color: #F4F4F4;
    background-color: rgba(104,48,213,0.7);
    border-color: rgba(104,48,213,0.7);
  }
  .getrand .wait{
    color: #505050;
    background-color: rgba(197,197,197,0.5);
    cursor: not-allowed;
  }
</style>
