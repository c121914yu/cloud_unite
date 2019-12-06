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
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
    box-sizing: border-box;
  }
  #app {
    cursor: default;
    background: #f4f4f4;
    min-height: 100vh;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
	input::-webkit-input-placeholder {
    font-size: 13px;
	  color: #a9a9a9;
	}

  /* 单选框颜色 */
  .el-radio__input.is-checked .el-radio__inner{
    border-color: rgba(104,48,213,0.7);
    background: rgba(104,48,213,0.7);
  }
  .el-radio__inner:hover{
    border-color: rgba(104,48,213,0.7);
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
