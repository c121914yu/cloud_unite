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
			<input :type="item.type" :placeholder="item.placeholder" v-model="values[index]"
        @blur="inspect(index)" @input="inputing(index)">
      <i v-if="item.icon" :class="item.icon" @click="clearText(index)"></i>
      <i v-else-if="values[index]" class="el-icon-circle-close" @click="clearText(index)"></i>
      <p v-if="item.remind" class="remind">{{item.remind}}</p>
		</div>
    <div class="input">
      <getRand></getRand>
    </div>
    <div class="btn" @click="register">注册</div>
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
        ready : false,
			}
		},
		methods:{
      inspect(index){
        
        if(index === 2){//检测密码是否正确
          if(this.values[index] === ''){
            this.inputs[index].icon = 'el-icon-error'
            this.inputs[index].remind = '密码不能为空'
          }
          else if(this.values[index].length < 6){
            this.inputs[index].icon = 'el-icon-error'
            this.inputs[index].remind = '密码长度不能小于6位'
          }
          else{
            this.inputs[index].icon = 'el-icon-success'
            if(this.values[3] != ''){
              if(this.values[2] != this.values[3]){
                this.inputs[3].icon = 'el-icon-error'
                this.inputs[3].remind = '两次密码不一致'
              }
              else{
                this.inputs[3].icon = 'el-icon-success'
                this.inputs[3].remind = ''
              }
            }
          }
        }
        else if(index === 3)//检测二次密码
          if(this.values[3] != ''){
            if(this.values[2] != this.values[3]){
              this.inputs[3].icon = 'el-icon-error'
              this.inputs[3].remind = '两次密码不一致'
            }
            else
              this.inputs[3].icon = 'el-icon-success'
          }
      },
      inputing(index){
        this.inputs[index].icon = ''
        this.inputs[index].remind = ''
      },
      clearText(index){
        this.values[index] = ''
        this.inputs[index].icon = ''
        this.inputs[index].remind = ''
        this.$forceUpdate()
      },
			register(){
        console.log(this.values)
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
  }
  .register .input i{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    font-size: 20px;
    z-index: 10;
  }
  .register .input .remind{
    font-size: 13px;
    color: #e91e1e;
    margin-left: 8%;
  }
  .register .input .el-icon-error{
    color: #F56C6C;
    cursor: pointer;
  }
  .register .input .el-icon-success{
    color: #67C23A;
  }
  .register .input .el-icon-circle-close{
    color: #8b8b8b;
    cursor: pointer;
  }
  .register .input .el-icon-circle-close:hover{
    color: #6830d5;
  }

  .register .btn{
    width: 200px;
    text-align: center;
    margin: 0 auto;
  }
</style>
