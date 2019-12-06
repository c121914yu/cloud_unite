<template>
  <div class="myworks">
    <div class="type">
      <span :class="current===1 ? 'current':''" @click="current=1">已发布作品</span>
      <span :class="current===2 ? 'current':''" @click="current=2">&emsp;草稿箱&emsp;</span>
    </div>

    <div class="words">
      <div
        class="word"
        v-for="(word,index) in words"
        :key="index"
      >
        <img src="./img/test.png">
        <div class="info">
          <span :class="word.applied ? 'applied' : 'unapply '">{{word.applied ? '已上链':'未上链'}}</span>
          <span style="flex: 1;"></span>
          <i class="el-icon-view readed">{{word.readed}}</i>
          <span class="icon iconfont liked">&#xe600; {{word.liked}}</span>
        </div>
      </div>
    </div>

    <div class="page">
      <div
        :class="item===page ? 'currentPage' : 'item'"
        v-for="(item,index) in showpages"
        :key="index"
        @click="page=item"
      >
        {{item}}
      </div>

      <el-popover
        placement="top-end"
        v-model="morepage"
        width="205"
        offset="100"
      >
        <div
          class="item"
          v-for="(item,index) in showpages"
          :key="index"
          @click="page=item"
        >
          {{item}}
        </div>
        <div slot="reference" class="item">...</div>
      </el-popover>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        current : 2,
        words : [
          {cover:'../../assets/logo.png',applied:true,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:true,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:false,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:true,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:false,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:false,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:true,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:false,readed:100,liked:50},
          {cover:'../../assets/logo.png',applied:true,readed:100,liked:50},
        ],
        pages : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        page : 1,
        morepage : false
      }
    },
    computed:{
      showpages(){
        let show = []
        if(this.page <= 3)
          show = this.pages.slice(0,5)
        else if(this.pages.length - this.page <= 3)
          show = this.pages.slice(this.pages.length-5,this.pages.length)
        else{
          show = this.pages.slice(this.page-3,this.page).concat(this.pages.slice(this.page,this.page+2))
        }
        return show
      }
    }
  }
</script>

<style>
  .myworks{
    background: #FFFFFF;
    border-radius: 10px;
  }

  .myworks .type{
    text-align: center;
    padding: 15px 0;
    margin: 0 auto;
  }
  .myworks .type span{
    color: rgba(104,48,213,0.7);
    margin: 0 20px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .myworks .type .current{
    color: #F4F4F4;
    background: rgba(104,48,213,0.5);
  }

  .myworks .words{
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .myworks .words .word{
    width: 23%;
    position: relative;
    padding-bottom: 20px;
  }
  .myworks .words .word img{
    width: 100%;
    border-radius: 5px;
  }
  .myworks .words .word .info{
    font-size: 15px;
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
  .myworks .words .word .info .applied{
    color: #FFFFFF;
    background: #39ee84;
    padding: 2px 5px;
    border-radius: 5px;
  }
  .myworks .words .word .info .unapply{
    color: #FFFFFF;
    background: #c5c5c5;
    padding: 0 5px;
    border-radius: 5px;
  }
  .myworks .words .word .info .readed{
    font-size: 17px;
    color: #c8c8c8;
    margin-right: 5px;
  }
  .myworks .words .word .info .liked{
    font-size: 17px;
    color: #c8c8c8;
    line-height: 1;
  }

  .myworks .page{
    color: #FFFFFF;
    width: 40%;
    margin: 0 auto 40px auto;
    display: flex;
    justify-content: space-between;
  }
  .myworks .page .item{
    background-color: rgba(104,48,213,0.3);
    text-align: center;
    width: 30px;
    border-radius: 50%;
    padding: 5.8px 0;
    cursor: pointer;
  }
  .myworks .page .item:hover{
    background-color: rgba(104,48,213,0.5);
  }
  .myworks .page .currentPage{
    background-color: rgba(104,48,213,0.8);
    text-align: center;
    width: 30px;
    border-radius: 50%;
    padding: 5.8px 0;
    cursor: pointer;
  }
  .el-popover{
    align-items: flex-start;
    flex-wrap: wrap;
    width: 150px;
    padding: 0;
  }
  .el-popover .item{
    background-color: rgba(104,48,213,0.3);
    text-align: center;
    width: 30px;
    margin: 5px 5px;
    border-radius: 50%;
    padding: 5.8px 0;
    cursor: pointer;
  }
</style>
