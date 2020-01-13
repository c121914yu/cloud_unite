<template>
  <div class="findPsw">
    <router-link
      class="back"
      :to="{name:'login'}"
    >
      返回登录
    </router-link>
    <header>找回密码</header>
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
        @input="inputing(index)"
      >
      <i v-if="item.icon" :class="item.icon" @click="clearText(index)"></i>
      <i v-else-if="values[index]" class="el-icon-circle-close" @mousedown="clearText(index)"></i>
      <p v-if="item.remind" class="remind">{{item.remind}}</p>
		</div>
    <div class="input">
      <getRand></getRand>
    </div>
    <div class="btn" @click="findPsw">
      {{btnText}}
      <i v-if="finding" class="el-icon-loading"></i>
    </div>
  </div>
</template>

<script>
  import getRand from './getRand.vue'
  export default{
		data(){
			return{
        inputs : [
          {placeholder:'输入用户名/手机号/邮箱',icon:'',remind:'',type:'text'},
          {placeholder:'输入密码',icon:'',remind:'',type:'password'},
          {placeholder:'再次输入密码',icon:'',remind:'',type:'password'},
        ],
        values : ['','',''],
        finding : false,
        btnText : '修改'
			}
		},
		methods:{
      InspectPsw(index){
        if(this.values[index] != ''){
          //检查密码是否正确
          if(index === 1){
              if(this.values[index].length < 6){
                this.RemindErr(index,'密码长度不能小于6')
              }
              else{
                this.inputs[index].icon = 'el-icon-success'
                if(this.values[2] != ''){//判断二次密码是否一致
                  if(this.values[1] != this.values[2]){
                    this.RemindErr(2,'两次密码不一致')
                  }
                  else{
                    this.inputs[2].icon = 'el-icon-success'
                    this.inputs[2].remind = ''}}
              }
          }
          //检查二次密码
          else if(index === 2){
            if(this.values[1] != this.values[2]){
              this.RemindErr(2,'两次密码不一致')
            }
            else
              this.inputs[2].icon = 'el-icon-success'
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
			findPsw(){
        this.finding = true
        this.btnText = '修改中'
        let ready = this.inputs.every(item => {
          return item.remind === ''
        })
        if(this.values[0] === '')
          this.RemindErr(0,'账号不能为空')
        else if(this.values[1] === '')
          this.RemindErr(1,'密码不能为空')
        else if(this.SurePsw === '')
          this.RemindErr(2,'请再次输入密码')
        else if(ready){
          const data = {
            number : this.values[0],
            NewPsw : this.values[1]
          }
          this.$axios.post('/cloud_unite/user/findPsw',data)
          .then(res => {
            if(res.data.status === 300)
              this.RemindErr(0,res.data.text)
            else{
              this.finding = false
              global.Router(this,'login')
              global.Message(this,'success',res.data.text)
            }
          })
          .catch(err => {
            console.log(err)
            global.Message(this,'warning','网络错误')
          })
        }
        else{
          this.finding = false
          this.btnText = '修改'
        }
			},
      RemindErr(index,text){
        this.finding = false
        this.btnText = '修改'
        this.inputs[index].icon = 'el-icon-error'
        this.inputs[index].remind = text
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
    margin-left: 5%;
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
  .findPsw header{
    font-size: 20px;
    margin-bottom: 5px;
  }

  .findPsw .input{
    margin: 15px 0;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .findPsw .input .err{
    border-color: #F56C6C;
  }
  .findPsw .input i{
    position: absolute;
    right: 30px;
    font-size: 20px;
    z-index: 10;
  }
  .findPsw .input .remind{
    font-size: 13px;
    color: #e91e1e;
    margin-left: 8%;
  }

  .findPsw .btn{
    width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .findPsw .btn i{
    position: absolute;
    margin-left: 40px;
  }
</style>
