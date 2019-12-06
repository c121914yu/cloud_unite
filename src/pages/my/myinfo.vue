<template>
  <div class="myinfo">
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
        <input type="text" style="flex: 1;max-width: 60%;"
          v-model="userInfo.individuality" placeholder="展示你的个性">
      </div>

      <div class="sex">
        <span style="margin-right: 20px;">性别:</span>
        <el-radio-group v-model="sex">
          <el-radio label='man'>男</el-radio>
          <el-radio label='woman'>女</el-radio>
        </el-radio-group>
      </div>

      <div class="birthday">
        <span style="margin-right: 15px;">生日:</span>
        <el-date-picker
          v-model="userInfo.birthday"
          :editable="false"
          type="date"
          placeholder="选择生日"
        >
        </el-date-picker>
      </div>

      <div class="region">
        <span style="margin-right: 15px;">地区:</span>
        <div class="checkReg">选择地区</div>
      </div>

      <div class="inputInfo">
        <span>单位/院校:</span>
        <input type="text" style="min-width: 300px;"
          v-model="userInfo.org" placeholder="例如:浙江工业大学">
      </div>
    </div>

    <div class="safeInfo">
      <p>安全信息</p>

      <div class="inputInfo">
        <span>手机号:</span>
        <div>{{userInfo.phone}}</div>
      </div>

      <div class="inputInfo">
        <span>密&emsp;码:</span>
        <input type="password" v-model="psw" placeholder="**********">
        <div class="btn">修改</div>
      </div>

      <div class="inputInfo">
        <span>邮&emsp;箱:</span>
        <input type="text" v-model="userInfo.email" placeholder="绑定你的邮箱">
        <div class="btn">修改</div>
      </div>

      <div class="relevance">
        <div>账号关联</div>
        <div class="remark">——第三方账号关联GenDoo</div>

        <img src="./img/relative.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        userInfo : {
          phone : '15677751219',
          birthday  : ''
        },
        sex : 'man'
      }
    }
  }
</script>

<style>
  .myinfo input{
    border: none;
    outline: none;
    background: rgba(104,48,213,0.4);
    color: #F4F4F4;
    font-size: 17px;
  }
  .myinfo input::-webkit-input-placeholder {
    font-size: 13px;
    color: #dadada;
  }
  .myinfo{
    background: #FFFFFF;
    border-radius: 10px;
  }

  .myinfo .baseInfo{
    padding: 10px 30px;
  }
  .myinfo .baseInfo .title{
    border-bottom: 1px solid #d7d7d7;
    padding-bottom: 10px;
    padding-left: 5px;
    margin-bottom: 5px;
  }

  .myinfo .baseInfo .inputInfo{
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  .myinfo .baseInfo .inputInfo input{
    height: 30px;
    padding-left: 10px;
    margin-left: 15px;
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
    color: #dcdcdc;
  }
  .myinfo .baseInfo .birthday .el-input--prefix .el-input__inner{
    cursor: pointer;
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

  .myinfo .safeInfo{
    padding: 5px 30px;
  }
  .myinfo .safeInfo p{
    border-bottom: 1px solid #d7d7d7;
    border-top: 1px solid #d7d7d7;;
    padding: 5px 5px;
  }

  .myinfo .safeInfo .inputInfo{
    padding: 10px 0;
    display: flex;
    align-items: center;
    position: relative;
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
    position: absolute;
    right: 10px;
  }
  .myinfo .safeInfo .inputInfo .btn:hover{
    background: rgba(104,48,213,0.7);
  }

  .myinfo .safeInfo .relevance{
    margin-top: 30px;
  }
  .myinfo .safeInfo .relevance .remark{
    font-size: 15pxc;
    color: #888787;
    margin-left: 20px;
  }
  .myinfo .safeInfo .relevance img{
    margin-top: 10px;
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
    background: rgba(104,48,213,0.7);
  }
</style>
