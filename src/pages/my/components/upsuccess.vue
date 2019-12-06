<template>
  <div class="upsuccess">
    <div class="mask"></div>
    <div class="Popup">
      <i class="el-icon-close close" @click="close"></i>
      <p>上传成功</p>
      <span class="apply">申请时间戳保护</span>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      close(){
        this.$emit('closemessage')
      }
    }
  }
</script>

<style>
  .Popup{
    width: 30%;
    left: 35%;
    padding: 50px 0;
    text-align: center;
  }
  .Popup p{
    margin-bottom: 20px;
  }
  .Popup .close{
    color: #F4F4F4;
    font-size: 25px;
    border: 1px solid #F4F4F4;
    border-radius: 50%;
    position: absolute;
    right: -35px;
    top: 5px;
    cursor: pointer;
  }
  .Popup .apply{
    color: #FFFFFF;
    background: #6830d5;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
  }
</style>
