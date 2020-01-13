<template>
  <div id="app">
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Nav from './pages/nav/nav'
export default {
  components:{
    Nav
  },
}
global.Router = (that,name) => that.$router.push({name:name})

global.Alert = (that,text) => {
  that.$alert(text, '提示', {
    confirmButtonText: '确认'
  })
}
global.Message = (that,type,text) => {
  that.$message({
    message: text,
    type: type,
    duration : 2000
  });
}
</script>

<style>
  html, body {
    min-width: 800px;
  }
  *{
    font-size: 17px;
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
    outline: none;
    position: relative;
  }
  #app {
    min-height: 100vh;
    cursor: default;
    background: #f4f4f4;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* 统一样式*/
  input{
    color: #555555;
    background-color: #ffffff;
    border: 1px solid #DCDFE6;
    border-radius: 10px;
    height: 40px;
    padding: 5px 10px;
  }
  input:focus{
    border-color: #6830d5;
  }
  textarea{
    color: #555555;
    background-color: #ffffff;
    border: 1px solid #DCDFE6;
    border-radius: 10px;
    padding: 5px 10px;
    resize: none;
  }
  textarea:focus{
    border-color: #6830d5;
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
    font-size: 14px;
    color: #C0C4CC;
  }
  /* 通用按键 */
  .btn{
    color: #F4F4F4;
    background-color: rgba(104,48,213,0.9);
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .btn:hover{
    background-color: #6830d5;
    box-shadow: 0 0 5px #6830d5;
  }
  /* 备注样式 */
  .remark{
    font-size: 13px;
    color: #C0C4CC;
  }

  /* UI库颜色修改*/
  /* select样式 */
  .el-select .el-input__inner{
    border-radius: 10px;
  }
  /* 气泡弹窗 */
  .el-popover{
    padding: 5 12px;
    border-radius: 10px;
    box-shadow: 0 0 10px #a9a9a9;
    border: none;
  }
  /* 图标颜色*/
  .el-icon-error{
    color: #F56C6C;
    cursor: pointer;
  }
  .el-icon-success{
    color: #67C23A;
  }
  .el-icon-circle-close{
    color: #8b8b8b;
    cursor: pointer;
  }
  .el-icon-circle-close:hover{
    color: #6830d5;
  }

  .mask{
  	width:100%;
  	height:100%;
  	position:fixed;
  	background-color:#b2b2b2;
  	z-index:99;
  	top:0;
  	left:0;
  	opacity:0.8;
  }
  /* 弹框样式 */
  .Popup{
  	background: #FFFFFF;
  	width: 60%;
  	border-radius: 10px;
  	margin-bottom: 10%;
  	box-shadow:2px 2px 5px #7b7b7b;
  	position: fixed;
  	top: 20%;
  	left: 20%;
  	z-index: 999;
  	animation: appear 0.5s ease-out;
  }
  @keyframes appear{
    0%{
  		opacity: 0;
  		transform: translateY(-50%)
  	}
    100%{
    	opacity: 1;
    	transform: translateY(0)
    }
  }
  /* 弹框样式 */
</style>
