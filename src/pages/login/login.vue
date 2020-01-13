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

    <div class="info">
      <!-- 密码登录 -->
      <div
        v-if="mode===0"
        class="psw"
      >
        <div class="input">
          <input
            :class="number.err ? 'err':''"
            type="text"
            placeholder="用户名/手机号/邮箱"
            v-model="number.value"
            @input="number.err=false"
          >
          <i v-if="number.err" class="el-icon-error" @click="clearText(number)"></i>
          <i v-else-if="number.value" class="el-icon-circle-close" @mousedown="clearText(number)"></i>
          <p v-if="number.err" class="remind">{{number.remind}}</p>
        </div>

        <div class="input">
          <input
            :class="password.err ? 'err':''"
            type="password"
            placeholder="密码"
            v-model="password.value"
            @input="password.err=false"
          >
          <i v-if="password.err" class="el-icon-error" @click="clearText(password)"></i>
          <i v-else-if="password.value" class="el-icon-circle-close" @mousedown="clearText(password)"></i>
          <p v-if="password.err" class="remind">{{password.remind}}</p>
        </div>
      </div>

      <!-- 短信登录 -->
      <div
        v-if="mode===1"
        class="phone"
      >
        <div class="input">
          <input type="text" placeholder="手机号" v-model="phone">
        </div>
        <div class="input" style="margin-left: 5%;">
          <getRand></getRand>
        </div>
      </div>

      <div class="btn" @click="login">
        登录
        <i v-if="logining" class="el-icon-loading"></i>
      </div>
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
        mode : 0,
        number : {value:'',err:false,remind:''},
        password : {value:'',err:false,remind:''},
        phone : {value:'',err:false,remind:''},
        rand : '',
        save : false,
        logining : false
      }
    },
    methods:{
      clearText(type){
        type.value = ''
        type.err = false
        type.remind = ''
      },
      RemindErr(type,text){
        type.err = true
        type.remind = text
      },
      login(){
        if(!this.logining){
          if(this.number.value === '')
             this.RemindErr(this.number,'账号不能为空')
          else if(this.password.value === '')
            this.RemindErr(this.password,'密码不能为空')
          else{
            this.logining = true
            const data = {
              number : this.number.value,
              password : this.password.value
            }
            this.$axios.post('/cloud_unite/user/login',data)
              .then(res => {
                if(res.data.status === 300)
                  this.RemindErr(this.number,'账号不存在')
                else if(res.data.status === 301)
                  this.RemindErr(this.password,'密码错误')
                else if(res.data.status === 200){
                  if(this.save)
                    localStorage.setItem("UserInfo",JSON.stringify(res.data.userInfo))
                  else
                    sessionStorage.setItem('UserInfo',JSON.stringify(res.data.userInfo))
                  global.Router(this,'my')
                  global.Message(this,'success','登录成功')
                }
                this.logining = false
              })
              .catch(err => {
                console.log(err)
                this.logining = false
              })
          }
        }
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
  .login input{
    margin-left: 5%;
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

  .login .info{
    width: 100%;
  }
  .login .info .input{
    margin: 20px 0;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .login .info .input .err{
    border-color: #F56C6C;
  }
  .login .info .input i{
    position: absolute;
    right: 30px;
    font-size: 20px;
    z-index: 10;
  }
  .login .info .input .remind{
    font-size: 13px;
    color: #e91e1e;
    margin-left: 8%;
  }

  .login .info .btn{
    margin: 0 auto;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login .info i{
    position: absolute;
    margin-left: 35px;
  }

  .login .assist{
    padding: 10px 5%;
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
    color: #8b8b8b;
    display: flex;
    white-space: nowrap;
  }
  .login .assist .number-ctr .router{
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
