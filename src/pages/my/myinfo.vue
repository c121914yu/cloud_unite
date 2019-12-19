<template>
  <div class="myinfo">
    <!-- 基本信息 -->
    <div class="baseInfo">
      <div class="title">
        <span>基本信息</span>
        <span class="btn">保存</span>
      </div>
      <div class="inputInfo">
        <span>用户昵称:</span>
        <input type="text" v-model="userInfo.name" placeholder="你的社交昵称">
      </div>

      <div class="inputInfo">
        <span>个性签名:</span>
        <input type="text" style="flex: 1;max-width: 70%;"
          v-model="userInfo.individuality" placeholder="展示你的个性">
      </div>

      <div class="sex">
        <span style="margin-right: 50px;">性别:</span>
        <el-radio-group v-model="sex">
          <el-radio label='man'>男</el-radio>
          <el-radio label='woman'>女</el-radio>
        </el-radio-group>
      </div>

      <div class="birthday">
        <span style="width: 90px;">生日:</span>
        <el-date-picker
          v-model="userInfo.birthday"
          :editable="false"
          type="date"
          placeholder="选择生日"
        >
        </el-date-picker>
      </div>

      <div class="region">
        <span style="width: 90px;">地区:</span>
        <div class="checkReg">选择地区</div>
      </div>

      <div class="inputInfo">
        <span>单位/院校:</span>
        <input type="text" style="min-width: 300px;"
          v-model="userInfo.org" placeholder="例如:浙江工业大学">
      </div>
    </div>

    <!-- 安全信息 -->
    <div class="safeInfo">
      <header>
        <span>安全信息</span>
        <span class="remark">*用于找回账户</span>
      </header>

      <div class="inputInfo">
        <span>手机号:</span>
        <input style="background-color: rgba(104,48,213,0.7);" type="number" disabled :value="userInfo.phone"/>
      </div>

      <div class="inputInfo">
        <span>密&emsp;码:</span>
        <input type="password" v-model="userInfo.psw" placeholder="**********">
        <div class="btn">修改</div>
      </div>

      <div class="inputInfo">
        <span>邮&emsp;箱:</span>
        <input type="text" v-model="userInfo.email" placeholder="绑定你的邮箱">
        <div class="btn">修改</div>
      </div>
    </div>

    <div class="identity">
      <div class="title">
        <span>身份验证</span>
        <span class="condition">未审核</span>
        <span class="btn">提交</span>
        <span class="remark">*审核后不会显示相关信息，如需更改直接添加信息后点击提交</span>
      </div>

      <div class="inputInfo">
        <span>真实姓名:</span>
        <input type="text" v-model="identity.name" placeholder="输入您的真实姓名">
      </div>

      <div class="inputInfo">
        <span>身份证号码:</span>
        <input type="text" v-model="identity.id" placeholder="输入您的身份证号码">
      </div>

      <p style="margin-top: 5px;">手持身份证正面照：</p>
      <div class="id-img">
        <img src="./img/add.png"/>
        <p>手持身份证正面照</p>
      </div>
    </div>

    <div class="relevance">
      <div>账号关联</div>
      <div class="remark">——第三方账号关联GenDoo</div>
      <img src="./img/relative.png">
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        userInfo : {
          phone : '15677751219',
          birthday  : '',
          psw : ''
        },
        identity : {
          name : '',
          id : ''
        },
        sex : 'man'
      }
    }
  }
</script>

<style>
  .myinfo{
    background: #FFFFFF;
    border-radius: 10px;
    position: relative;
    padding: 10px 20px;
  }
  .myinfo input{
    letter-spacing:1px;
    background-color: rgba(104,48,213,0.4);
    color: #F4F4F4;
    border: none;
  }
  .myinfo input::-webkit-input-placeholder {
    font-size: 13px;
    color: #dadada;
  }

  /* 公共按键样式*/
  .myinfo .btn{
    color: #F4F4F4;
    background: rgba(104,48,213,0.5);
    padding: 5px 15px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
  .myinfo .btn:hover{
    background: rgba(104,48,213,1);
  }

  .myinfo .title{
    border-bottom: 1px solid #d7d7d7;
    padding-bottom: 10px;
    padding-left: 5px;
    margin-bottom: 5px;
  }

  .myinfo .inputInfo{
    margin: 5px;
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  .myinfo .baseInfo .inputInfo span{
    width: 90px;
  }
  .myinfo .inputInfo input{
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
  }

  .myinfo .baseInfo .sex{
    margin: 5px 0;
  }

  .myinfo .baseInfo .birthday{
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  .myinfo .baseInfo .birthday .el-icon-date{
    color: #f3f3f3;
  }
  .myinfo .baseInfo .birthday .el-input--prefix .el-input__inner{
    cursor: pointer;
    width: 200px;
  }
  .myinfo .baseInfo .birthday .el-input--suffix .el-input__inner{
    padding-right: 5px;
  }
  .myinfo .baseInfo .birthday .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 200px;
  }

  .myinfo .baseInfo .region{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .myinfo .baseInfo .region .checkReg{
    color: #dcdcdc;
    background: rgba(104,48,213,0.4);
    min-width: 200px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  .myinfo .safeInfo header{
    border-bottom: 1px solid #d7d7d7;
    padding: 5px 5px;
  }

  .myinfo .safeInfo .inputInfo div{
    font-size: 17px;
    background: rgba(104,48,213,0.4);
    border-radius: 5px;
    color: #F4F4F4;
    margin-left: 15px;
    padding: 5px 10px;
  }
  .myinfo .safeInfo .inputInfo input{
    height: 30px;
    padding-left: 10px;
    margin-left: 15px;
    border-radius: 5px;
  }
  .myinfo .safeInfo .inputInfo .btn{
    margin-left: 10px;
  }
  .myinfo .safeInfo .inputInfo .btn:hover{
    background: #6830d5;
  }

  .myinfo .identity{
    margin-top: 15px;
  }
  .myinfo .identity .inputInfo span{
    width: 100px;
  }
  .myinfo .identity .condition{
    font-size: 13px;
    color: #e91e1e;
    margin: 0 5px;
  }
 .myinfo .identity .id-img{
    background-color: rgba(104,48,213,0.3);
    width: 320px;
    height: 180px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .myinfo .identity .id-img img{
    width: 50px;
    height: 50px;
    margin-top: 40px;
    opacity: 0.8;
  }
  .myinfo .identity .id-img p{
    color: #505050;
    margin-top: 10px;
  }

  .myinfo  .relevance{
    margin-top: 10px;
    padding-left: 5px;
  }
  .myinfo  .relevance .remark{
    font-size: 15pxc;
    color: #888787;
    border-bottom: 1px solid #d7d7d7;
    padding: 5px 20px;
  }
  .myinfo  .relevance img{
    width: 90%;
    margin-top: 10px;
  }
</style>
