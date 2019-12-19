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
  }
}
</script>

<style>
  html, body { min-width: 1100px;}
  *{
    font-size: 17px;
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
    outline: none;
  }
  #app {
    cursor: default;
    background: #f4f4f4;
    min-height: 100vh;
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
  .remark{
    font-size: 13px;
    color: #C0C4CC;
  }

  /* UI库颜色修改*/
  /* 单选框颜色 */
  .el-radio__input.is-checked+.el-radio__label{
    color: #6830d5;
  }
  .el-radio__input.is-checked .el-radio__inner{
    border:none;
    background: rgba(104,48,213,0.7);
  }
  .el-radio__inner:hover{
    border-color: rgba(104,48,213,0.7);
  }
  /* select样式 */
  .el-select .el-input__inner{
    border-radius: 10px;
  }
  .el-select .el-input__inner:focus,.el-select .el-input.is-focus .el-input__inner{
    border-color: #6830d5;
  }
  .el-select-dropdown__item.selected{
    color: #6830d5;
  }
  /* 气泡弹窗 */
  .el-popover{
    padding: 5 12px;
    border-radius: 10px;
    box-shadow: 0 0 10px #a9a9a9;
    border: none;
  }
  /* 日期选择器 */
  .el-date-table td.current:not(.disabled) span{
    color: #F4F4F4;
    background-color: rgba(104,48,213,0.7);
  }
  .el-date-table td.today span,.el-date-table td.available:hover,.el-date-table td span:active{
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
