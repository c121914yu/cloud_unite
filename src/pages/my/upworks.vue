<template>
  <div class="upworks">
    <div class="info">
      <header>
        <span>作品信息</span>
        <span class="remark">注：标有<span style="color: #e91e1e;">&ensp;*&ensp;</span>的为必填项</span>
      </header>
      <div class="upcover">
        <div class="cover">
          <div v-if="work.cover===''" class="none-cover">
            <img src="./img/add.png"/>
            <p style="color: #505050;margin-top: 10px;">上传封面</p>
            <p class="remark" style="margin-top: 5px;">支持jpg/png格式,小于10M</p>
          </div>
          <img v-else :src="work.cover">
        </div>
        <div class="content">
          <el-select
            class="check-kind"
            placeholder="请选择作品类型"
            filterable
            v-model="work.kind"
          >
            <el-option
              v-for="(item,index) in kinds"
              :key="index"
              :label="item.text"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <input
            type="text"
            class="name"
            v-model="work.name"
            placeholder="输入作品名称"
          >
          <textarea
            class="introduction"
            rows="3"
            placeholder="输入作品说明"
            v-model="work.introduction"
          />
        </div>
      </div>
    </div>

    <div v-if="work.kind!=2" class="info content">
      <header>
        <span>内容界面</span>
        <span class="remark">注：不要在图片上放置商业推广信息（案例信息除外），长按拖动调整顺序</span>
      </header>
      <div class="page">
        <div
          class="img"
          v-for="(img,index) in imgs"
          :key="index"
        >
          <el-popover
            class="explain"
            width="400"
            trigger="click"
          >
            <p style="font-size: 13px;color: #FFFFFF;line-height: 1.8;" slot="reference">添加说明</p>
            <div class="page-introduction">
              <input type="text" placeholder="输入该图片/视频说明"/>
              <div class="sure">确定</div>
            </div>
          </el-popover>
          <img class="user-content" src="./img/introduct.jpg">
        </div>
        <div class="img">
          <img class="add" src="./img/add.png">
          <p class="remark">上传图片/视频</p>
        </div>
      </div>
    </div>

    <div class="info lable">
      <header>
        <span>添加标签</span>
        <span class="remark">注：标签分为内容和类型，主要用于搜索。</span>
      </header>
      <div class="check-lable">
        <div class="content">
          <span>内容</span>
          <div class="check">
            <input type="text" placeholder="天空,摄影">
          </div>
        </div>
        <div class="content" style="margin-left: 5%;">
          <span>类型</span>
          <div class="check" @click="checktype=true">
            <span
              v-for="(item,index) in types"
              :key="index"
            >
              {{item}},
            </span>
            <span v-if="types.length===0" style="color: #c8c8c8;">摄影,绘画</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择类型组件-->
    <checkType v-if="checktype" @closeCheck="closeCheck"></checkType>

    <div class="info more">
      <header>
        <span>更多设置</span>
      </header>
      <div class="content">
        <div class="share">
          <span style="margin-right: 10px;">是否共享</span>
          <el-radio-group v-model="share" :fill="fill" >
            <el-radio label='true'>是</el-radio>
            <el-radio label='false'>否</el-radio>
          </el-radio-group>

        </div>
      </div>
    </div>

    <div class="btn">
      <div class="save" @click="save">保存</div>
      <div class="save">预览</div>
      <div class="uploading" style="background: #6830d5;" @click="up">上传</div>
    </div>
    <upsuccess v-if="successMes" @closemessage="successMes=false"></upsuccess>
  </div>
</template>

<script>
  import checkType from './components/checkType'
  import upsuccess from './components/upsuccess'
  export default{
    data(){
      return{
        work : {
          cover : ''
        },

				kinds : [
         {value:0,text:'图片'},
         {value:1,text:'视频'},
         {value:2,text:'3D模型'},
        ],

        imgs : [
          {src:'./img/add.png'},
          {src:'./img/add.png'},
          {src:'./img/add.png'},
          {src:'./img/add.png'},
          {src:'./img/add.png'}
        ],
        share  : 'false',
        fill : '#6830d5',

        types : [],
        checktype : false,
        successMes : false
      }
    },
    methods:{
      closeCheck(e){
        if(this.checktype){
          this.types = e
          this.checktype = false
        }
      },
      save(){
        this.$message({
          message: '以保存为草稿',
          type: 'success'
        });
      },
      up(){
        this.successMes = true
      }
    },
    components:{
      checkType,
      upsuccess
    }
  }
</script>

<style>
  .upworks .info{
    background: #FFFFFF;
    border-radius: 10px;
    cursor: default;
  }
  .upworks .info header{
    padding: 10px;
    border-bottom: 1px solid #c8c8c8;
  }
  .upworks .info .remark{
    margin-left: 10px;
  }

  .upworks .info .upcover{
    padding: 20px 10px;
    display: flex;
  }
  .upworks .info .upcover .cover{
    width: 240px;
    height: 180px;
    position: relative;
    cursor: pointer;
  }
  .upworks .info .upcover .cover img{
    width: 100%;
    height: 100%;
    margin-top: 40px;
  }
  .upworks .info .upcover .cover .none-cover{
    background-color: rgba(235,235,235,0.7);
    width: 100%;
    height: 100%;
    border: 1px solid #DCDFE6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .upworks .info .upcover .cover .none-cover img{
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }
  .upworks .info .upcover .content{
    font-size: 16px;
    margin: 10px 0 10px 15px;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .upworks .info .upcover .content .check-kind{
    width: 40%;
  }
  .upworks .info .upcover .content .name{
    margin-top: 10px;
  }
  .upworks .info .upcover .content .introduction{
    margin-top: 10px;
  }

  .upworks .content{
    margin-top: 10px;
  }
  .upworks .content .page{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .upworks .content .page .img{
    font-size: 14px;
    background: rgba(235,235,235,0.7);
    width: 120px;
    height: 120px;
    border-radius: 5px;
    margin: 10px 0 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .upworks .content .page .img .add{
    border: none;
    height: 50px;
    width: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    opacity: 0.5;
  }
  .upworks .content .page .img .user-content{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .upworks .content .page .img .explain{
    background: rgba(182,182,182,0.7);
    width: 120px;
    text-align: center;
    position: absolute;
    bottom: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .page-introduction input{
    height: 30px;
    width: 90%;
    margin-left: 5%;
  }
  .page-introduction .sure{
    text-align: center;
    letter-spacing:2px;
    background: #6830d5;
    color: #FFF;
    width: 20%;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 40%;
    padding: 0 10px;
    cursor: pointer;
  }

  .upworks .lable{
    margin-top: 10px;
  }
  .upworks .lable .check-lable{
    width: 100%;
    padding: 10px;
    display: flex;
  }
  .upworks .lable .check-lable .content{
    width: 45%;
    display: flex;
    align-items: center;
  }
  .upworks .lable .check-lable .content span{
    margin-right: 10px;
  }
  .upworks .lable .check-lable .content .check{
    flex: 1;
    background: #F4F4F4;
    border: 1px solid #d6d5d7;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    position: relative;
  }
  .upworks .lable .check-lable .content .check span{
    color: #434343;
    font-size: 14px;
    margin: 0;
  }
  .upworks .lable .check-lable .content .check input{
    font-size: 17px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
  }

  .upworks .more{
    margin-top: 10px;
  }
  .upworks .more .content{
    padding: 10px;
    margin: 0;
    line-height: 2;
  }

  .upworks .btn{
    width: 50%;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
  }
  .upworks .btn div{
    background: #d6d5d7;
    color: #FFFFFF;
    border-radius: 10px;
    letter-spacing:2px;
    padding: 5px 20px;
    cursor: pointer;
  }
</style>
