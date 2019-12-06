<template>
  <div class="upworks">
    <div class="info">
      <header>
        <span>作品信息</span>
        <span class="remark">注：标有<span style="color: #e91e1e;">&ensp;*&ensp;</span>的为必填项</span>
      </header>
      <div class="upcover">
        <img src="./img/upcover.jpg">
        <div class="content">
          <input class="input" type="text" placeholder="请输入作品名称">
          <textarea class="input" rows="20"
            placeholder="请输入作品说明"/>
        </div>
      </div>
    </div>

    <div class="info content">
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
          <p class="explain">添加说明</p>
          <img class="add" src="./img/add.png">
        </div>
        <div class="img">
          <img class="add" src="./img/add.png">
          <p>上传图片/视频</p>
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
    font-size: 13px;
    color: #c8c8c8;
    margin-left: 10px;
  }
  .upworks .info .upcover{
    padding: 20px 10px;
    display: flex;
  }
  .upworks .info .upcover .content{
    font-size: 16px;
    margin: 10px 0 10px 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .upworks .info .upcover .content .input{
    font-size: 16px;
    background: #F4F4F4;
    padding: 5px;
    border-radius: 5px;
    padding-left: 5px;
    outline: none;
    border: 1px solid #d6d5d7;
  }
  .upworks .info .upcover .content textarea{
    margin-top: 10px;
    max-height: 150px;
    resize:none
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
    background: #F4F4F4;
    width: 120px;
    height: 120px;
    border: 1px solid #d6d5d7;
    border-radius: 5px;
    margin: 10px 0 0 10px;
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
    opacity: 0.6;
  }
  .upworks .content .page .img .explain{
    background: rgba(214,213,215,0.5);
    color: #FFFFFF;
    width: 120px;
    text-align: center;
    line-height: 1;
    padding: 3px 0;
    position: absolute;
    margin-top: 100px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
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
