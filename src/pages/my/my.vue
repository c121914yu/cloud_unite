<template>
  <div class="my">
    <div class="self">
      <div class="avatar">
        <div>
          <img src="./img/introduct.jpg">
        </div>
        <span class="setInfo">修改资料</span>
      </div>

      <div class="name">
        <span>Hanniv</span>
        <i class="el-icon-edit-outline"></i>
      </div>

      <div class="social">
        <div
          class="item"
          v-for="(item,index) in socials"
          :key="index"
        >
          <p>{{item.amount}}</p>
          <p class="type">{{item.type}}</p>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="nav">
        <router-link
          class="item"
          active-class="current"
          v-for="(router,index) in routers"
          :key="index"
          :to="{name:router.name}"
        >
          {{router.text}}
        </router-link>
      </div>

      <keep-alive>
        <router-view class="body"></router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
	export default{
		data(){
      return{
        socials : [
          {type:'获赞',amount:0},
          {type:'关注',amount:0},
          {type:'粉丝',amount:0}
        ],

        routers : [
          {name:'myworks',text:"我的作品"},
          {name:'upworks',text:"上传作品"},
          {name:'myinfo',text:"个人资料"},
        ],
        current : 0
      }
    },
    methods:{
      currentTab(index){
        console.log(index)
      }
    }
	}
</script>

<style>
  .my{
    padding: 10px 10%;
  }

  .self{
    letter-spacing:2px;
    background: #FFFFFF;
    height: 140px;
    border-radius: 10px;
    position: relative;
  }
  .self .name{
    color: rgba(104,48,213,0.7);
    font-size: 20px;
    padding-top: 20px;
    margin-left: 50px;
  }
  .self .name i{
    color: #2a2a2a;
    margin-left: 5px;
    cursor: pointer;
  }
  .self .name i:hover{
    color: rgba(104,48,213,1);
  }
  .self .social{
    margin-top: 10px;
    margin-left: 50px;
    display: flex;
  }
  .self .social .item{
    line-height: 1.5;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
  }
  .self .social .item .type{
    color: rgba(104,48,213,0.7);
  }
  .self .avatar{
    float: right;
    margin-right: 30px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .self .avatar img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
  .self .avatar .setInfo{
    font-size: 15px;
    color: #F4F4F4;
    background: rgba(104,48,213,0.7);
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
  .self .avatar .setInfo:hover{
    background: #6830d5;
  }

  .my .main{
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
  }
  .my .main .nav{
    background: #FFFFFF;
    min-width: 130px;
    letter-spacing:1px;
    padding: 5px 40px 5px 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .my .main .nav .item{
    padding: 5px 0 5px 19px;
    margin: 5px 0;
  }
  .my .main .nav .item:hover{
    color: #6830d5;
  }
  .my .main .nav .current{
    padding: 5px 0 5px 15px;
    border-left: 4px solid #6830d5;
    transition: 0.2s all linear;
  }

  .my .main .body{
    margin-left: 20px;
    flex: 1;
  }
</style>
