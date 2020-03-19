<template>
  <div class="login">
    <div class="title">
      <h1>GenDoo更多</h1>
      <p>登录更多网, 保护你的作品权益, 营造良好的设计市场</p>
    </div>

    <div class="main">
      <!-- 登录界面-->
      <div class="item in">
        <header>
          <span 
            class="psw-in" 
            :class="loginType===0?'active':''" 
            @click="loginType=0">
            密码登录
          </span>
          <span 
            class="phone-in" 
            :class="loginType===1?'active':''" 
            @click="loginType=1">
            手机登录
          </span>
        </header>
        <input type="text" placeholder="手机号/邮箱/账号" v-model="loginInfo.number">
        <input type="password" placeholder="密码" v-model="loginInfo.password">
        <button class="btn" @click="login">登录</button>
        <div class="control">
          <div class="remenber iconfont">
            <i
              :class="autoLogin?'checked el-icon-check':'el-icon-minus'"
               @click="autoLogin=!autoLogin"
            ></i>
            <span>下次自动登录</span>
          </div>
          <span class="hover" @click="pageType=1">忘记密码</span>
          <span>&ensp;|&ensp;</span>
          <span class="hover" @click="pageType=2">注册账号</span>
        </div>
        <footer>
          <p class="remark">第三方账号登录</p>
          <div class="icons">
            <i class="iconfont icon-QQ"></i>
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-weibo"></i>
          </div>
        </footer>
      </div>
      <!-- 找回密码-->
      <div class="item find-psw">
        <div class="back" @click="pageType=0">返回登录</div>
        <h3 class="center">找回密码</h3>
        <input type="text" placeholder="手机号" v-model="loginInfo.number">
        <input type="password" placeholder="新密码" v-model="loginInfo.password">
        <input type="password" placeholder="再次输入密码" v-model="surePsw">
        <getRand :number="loginInfo.number" ref="FindPsw"></getRand>
        <button class="btn" @click="numberCtr('findPsw')">找回密码</button>
      </div>
      <!-- 注册账号 -->
      <div class="item register">
        <div class="back" @click="pageType=0">返回登录</div>
        <h3 class="center">注册账号</h3>
        <input type="text" placeholder="手机号" v-model="loginInfo.number">
        <input type="password" placeholder="新密码" v-model="loginInfo.password">
        <input type="password" placeholder="再次输入密码" v-model="surePsw">
        <getRand :number="loginInfo.number" ref="Register"></getRand>
        <button class="btn" @click="numberCtr('register')">注册账号</button>
      </div>
    </div>
  </div>
</template>

<script>
import getRand from '../components/getRand.vue'
export default{
  data(){
    return{
      loginType : 0,//0密码登录
      autoLogin : false,
      pageType : 0,//0登录，1找回密码，2注册
      loginInfo : {
        number : '',
        password : '',
        rand : ''
      },
      surePsw : ""
    }
  },
  watch:{
    pageType : "pageChange"
  },
  methods:{
    initData() {
      this.loginInfo = {
        number : '',
        password : '',
        rand : ''
      },
      this.surePsw = ""
      this.$refs.FindPsw.rand = ""
      this.$refs.Register.rand = ""
    },
    pageChange(){
      var x1,x2,x3
      switch(this.pageType){
        case 0:x1='0';x2='-205%',x3='-95%';break;
        case 1:x1='105%';x2='-100%',x3='-95%';break;
        case 2:x1='-105%';x2='-205%',x3='-200%';break;
      }
      this.initData()
      document.querySelector('.main .in').style.transform = `translateX(${x1})`
      document.querySelector('.main .find-psw').style.transform = `translateX(${x2})`
      document.querySelector('.main .register').style.transform = `translateX(${x3})`
    },
    login(){
      if(this.loginInfo.number === "")
        global.Message(this,'error',"请输入账号")
      else if(this.loginInfo.password === '')
        global.Message(this,'error',"请输入密码")
      else{
        this.$axios.post('api/user/login',{
          number : this.loginInfo.number,
          password : this.loginInfo.password
        })
        .then(res => {
          const info = res.data.userInfo
          const loginInfo = JSON.stringify({
            phone : info.phone,
            id : info.id
          })
          if(this.autoLogin)
            localStorage.setItem('loginInfo',loginInfo)
          global.Message(this,'success','登录成功')
          this.$store.commit('changeUserInfo',info)
          global.Router(this,'my')
          this.initData()
        })
      }
    },
    numberCtr(name){
      const reg = /^1[3456789]\d{9}$/
      this.loginInfo.rand = name === 'findPsw' ? this.$refs.FindPsw.rand : this.$refs.Register.rand
      if(this.loginInfo.number === '')
        global.Message(this,'error',"请输入手机号")
      else if(!reg.test(this.loginInfo.number))
        global.Message(this,'error',"手机格式错误")
      else if(this.loginInfo.password === '')
        global.Message(this,'error',"请输入密码")
      else if(this.surePsw === '')
        global.Message(this,'error',"请再次输入密码")
      else if(this.loginInfo.password != this.surePsw)
        global.Message(this,'error',"两次密码不一致")
      else if(this.loginInfo.rand === '')
        global.Message(this,'error',"请输入验证码")
      else{
        this.$axios.post('/api/user/'+name,{
          phone : this.loginInfo.number,
          password : this.loginInfo.password,
          rand : this.loginInfo.rand
        })
        .then(res => {
          if(res.data.status === 200){
            const number = this.loginInfo.number
            this.pageType = 0
            const text = name==='findPsw' ? "修改密码成功" : "注册成功"
            global.Message(this,'success',text)
          }
        })
      }
    }
  },
  components:{
    getRand
  }
}
</script>

<style>
.login{
  height: 100vh;
  background: url(../../static/loginBkg.jpg) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select:none;
}

.login .title{
  margin-top: 90px;
  color: #F4F4F4;
  text-align: center;
}
.login .title p{
  margin: 15px 0;
}

.login .main{
  width: 360px;
  height: 360px;
  background-color: #F4F4F4;
  border-radius: 5px;
  padding: 5px;
  overflow: hidden;
  display: flex;
}
.login .main .item{
  flex-shrink: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  transition: var(--transition-speed);
}
.login .main .item input{
  background-color: var(--tint-gray);
  margin: 10px 0;
  width: 100%;
}
.login .main .item .btn{
  margin-left: 25%;
  width: 50%;
}
.login .main .item .back{
  position: absolute;
  top: 5px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: var(--purple2);
  cursor: pointer;
}
.login .main .item .back:hover{
  background-color: var(--purple2);
}

.login .main .find-psw{
  transform: translateX(-205%);
}
.login .main .find-psw .back{
  right: -5px;
  padding: 2px 2px 2px 5px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.login .main .register{
  transform: translateX(-95%);
}
.login .main .register .back{
  left: -5px;
  padding: 2px 5px 2px 2px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.login .in header{
  margin-bottom: 15px;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: var(--border1);
}
.login .in header span{
  margin-right: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}
.login .in header span:hover{
  color: var(--purple2);
}
.login .in header span.active{
  border-color: var(--purple2);
}
.login .in .control{
  margin: 15px 0;
  display: flex;
  color: var(--font-dark-remark);
}
.login .in .control span{
  font-size: 14px;
}
.login .in .control .remenber{
  flex: 1;
  display: flex;
  align-items: center;
}
.login .in .control .remenber i{
  margin-right: 5px;
  font-size: 12px;
  padding: 2px;
  border-radius: 50%;
  background-color: var(--tint-gray);
  cursor: pointer;
}
.login .in .control .remenber i.checked{
  background-color: var(--purple2);
  color: #FFFFFF;
}
.login .in footer .remark{
  text-align: center;
}
.login .in footer .icons{
  display: flex;
  justify-content: space-around;
}
.login .in footer .icons i{
  color: var(--font-dark-remark);
  font-size: 2.5em;
  cursor: pointer;
}
.login .in footer .icons i:hover{
  color: var(--purple2);
}
</style>
