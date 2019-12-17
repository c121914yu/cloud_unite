<template>
  <div class="check">
    <div class="mask"></div>
    <div class="Popup">
      <header>
        <i class="el-icon-circle-close" @click="closeCheck"></i>
        <p>选择作品类型</p>
      </header>

      <div class="type">
        <div
          class="item"
          :class="item.check ? 'checked' : ''"
          v-for="(item,index) in types"
          :key="index"
          @click="item.check=!item.check"
        >
          {{item.type}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        types : [
          {type:'平面',check:false},
          {type:'交互',check:false},
          {type:'摄影',check:false},
          {type:'书籍',check:false},
          {type:'包装',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
          {type:'平面',check:false},
          {type:'交互',check:false},
          {type:'摄影',check:false},
          {type:'书籍',check:false},
          {type:'包装',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
          {type:'字体',check:false},
        ]
      }
    },
    methods:{
      closeCheck(){
        const type = []
        this.types.forEach(item => {
          if(item.check)
            type.push(item.type)
        })
        this.$emit('closeCheck',type)
      }
    }
  }
</script>

<style scoped>
  .Popup{
    width: 40%;
    left: 30%;
    padding: 10px 0;
  }

  header{
    border-bottom: 1px solid #c8c8c8;
    text-align: center;
    padding-bottom: 5px;
  }
  header i{
    color: #c8c8c8;
    font-size: 25px;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }

  .type{
    color: #525252;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .type .item{
    padding: 2px 15px;
    border: 1px solid #b6b6b6;
    border-radius: 10px;
    margin: 8px 3px;
    cursor: pointer;
  }
  .type .checked{
    background: rgba(200,200,200,0.6);
    border-color: #FFFFFF;
  }
</style>
