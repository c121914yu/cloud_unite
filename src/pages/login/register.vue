<template>
  <div class="register">
    <router-link
      class="back"
      :to="{name:'login'}"
    >
      返回登录
    </router-link>
    <header>用户注册</header>
		<div
      class="input"
      v-for="(item,index) in inputs"
      :key="index"
    >
			<input :class="item.remind === '' ? '' : 'err'"
        :type="item.type"
        :placeholder="item.placeholder"
        v-model="values[index]"
        @blur="InspectPsw(index)"
        @change="AxiosInspect(index)"
        @input="inputing(index)"
      >
      <i v-if="item.icon" :class="item.icon" @click="clearText(index)"></i>
      <i v-else-if="values[index]" class="el-icon-circle-close" @mousedown="clearText(index)"></i>
      <p v-if="item.remind" class="remind">{{item.remind}}</p>
		</div>
    <div class="input">
      <getRand></getRand>
    </div>
    <div class="btn" @click="register">
      {{btnText}}
      <i v-if="registering" class="el-icon-loading"></i>
    </div>
  </div>
</template>

<script>
  import getRand from './getRand.vue'
  export default{
		data(){
			return{
        inputs : [
          {placeholder:'输入用户名',icon:'',remind:'',type:'text'},
          {placeholder:'输入手机号',icon:'',remind:'',type:'text'},
          {placeholder:'输入密码',icon:'',remind:'',type:'password'},
          {placeholder:'再次输入密码',icon:'',remind:'',type:'password'},
        ],
        values : ['','','',''],
				userInfo : {
					username : '',
					phone : '',
					password : '',
					email : '',
					baseInfo : '',
					unitNumber : ''
				},
				SurePsw : '',
        registering : false,
        btnText : '注册'
			}
		},
		methods:{
      AxiosInspect(index){//检查用户名/手机号
        let axiosInspect = (data) => {//请求
          this.inputs[index].icon = 'el-icon-loading'
          this.$axios.post('/cloud_unite/user/inspect',data)
          .then(res => {
            if(res.data.status === 200){
              this.inputs[index].icon = 'el-icon-success'
              this.inputs[index].remind = ''
            }
            else{
              this.inputs[index].icon = 'el-icon-error'
              this.inputs[index].remind = res.data.text
            }
          })
          .catch(err => {
            console.log(err)
            this.inputs[index].icon = 'el-icon-error'
            this.inputs[index].remind = '网络错误'
          })
        }
        if(this.values[index] != ''){
          const value = this.values[index]
          let letter = /[a-z]/i;  //必须含字母，防止与手机号重叠
          let NumLet = /^[0-9a-zA-Z]+$/  //只含字母跟数字
          let phone = /^[1][3,4,5,7,8,9][0-9]{9}$/
          //检查用户名
          if(index === 0){
            if(!letter.test(value)){
              this.inputs[index].icon = 'el-icon-error'
              this.inputs[index].remind = '用户名需包含字母'
            }
            else if(!NumLet.test(value)){
              this.inputs[index].icon = 'el-icon-error'
              this.inputs[index].remind = '用户名只能含字母跟数字'
            }
            else
              axiosInspect({
                type : 'username',
                text : value
              })
          }
          //检查手机号
          else if(index === 1){
      			if(!phone.test(value)){
              this.inputs[index].icon = 'el-icon-error'
              this.inputs[index].remind = '手机号格式错误'
            }
            else
              axiosInspect({
                type : 'phone',
                text : value
              })
          }

        }
      },
      InspectPsw(index){
        if(this.values[index] != ''){
          //检查密码是否正确
          if(index === 2){
              if(this.values[index].length < 6){
                this.inputs[index].icon = 'el-icon-error'
                this.inputs[index].remind = '密码长度不能小于6位'
              }
              else{
                this.inputs[index].icon = 'el-icon-success'
                if(this.values[3] != ''){//判断二次密码是否一致
                  if(this.values[2] != this.values[3]){
                    this.inputs[3].icon = 'el-icon-error'
                    this.inputs[3].remind = '两次密码不一致'
                  }
                  else{
                    this.inputs[3].icon = 'el-icon-success'
                    this.inputs[3].remind = ''}}
              }
          }
          //检查二次密码
          else if(index === 3){
            if(this.values[2] != this.values[3]){
              this.inputs[3].icon = 'el-icon-error'
              this.inputs[3].remind = '两次密码不一致'
            }
            else
              this.inputs[3].icon = 'el-icon-success'
          }
        }
      },
      inputing(index){
        this.inputs[index].icon = ''
        this.inputs[index].remind = ''
      },
      clearText(index){
        if(this.inputs[index].icon != 'el-icon-success'){
          this.values[index] = ''
          this.inputs[index].icon = ''
          this.inputs[index].remind = ''
          this.$forceUpdate()
        }
      },
			register(){
        this.registering = true
        this.btnText = '注册中'
        let ready = true
        this.inputs.forEach(item => {
          if(item.remind != '' || item.icon != 'el-icon-success')
            ready = false
        })
        if(ready){
          this.userInfo.username = this.values[0]
          this.userInfo.phone = this.values[1]
          this.userInfo.password = this.values[2]
          this.$axios.post('/cloud_unite/user/register',this.userInfo)
            .then(res => {
              if(res.data.status === 200){
                let data = {
                  id : res.data.id,
                  ...this.userInfo
                }
                delete data.password
                localStorage.setItem("UserInfo",JSON.stringify(data))
                global.Router(this,'myinfo')
              }
              else{
                if(res.data.text === '该用户名已被使用'){
                  this.inputs[0].icon = 'el-icon-error'
                  this.inputs[0].remind = res.data.text
                }
                else{
                  this.inputs[1].icon = 'el-icon-error'
                  this.inputs[1].remind = res.data.text
                }
              }
              this.registering = false
              this.btnText = '注册'
            })
            .catch(err => {
              console.log(err)
              this.registering = false
              this.btnText = '注册'
            })
        }
        else{
          this.registering = false
          this.btnText = '注册'
        }
			}
		},
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
    margin-left: 5%;
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
    margin-bottom: 5px;
  }

  .register .input{
    margin: 10px 0;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .register .input .err{
    border-color: #F56C6C;
  }
  .register .input i{
    position: absolute;
    right: 30px;
    font-size: 20px;
    z-index: 10;
  }
  .register .input .remind{
    font-size: 13px;
    color: #e91e1e;
    margin-left: 8%;
  }

  .register .btn{
    width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register .btn i{
    position: absolute;
    margin-left: 40px;
  }
</style>
