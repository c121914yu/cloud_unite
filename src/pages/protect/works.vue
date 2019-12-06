<template>
  <div class="works">
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
</template>

<script>
	export default{
		data(){
      return{
        routers : [
          {name:'upworks',text:"上传作品"},
          {name:'manageworks',text:"作品管理"},
          {name:'applyProtect',text:"申请保护"},
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
  .works{
    padding: 20px 10%;
    display: flex;
    align-items: flex-start;
  }

  .works .nav{
    background: #FFFFFF;
    letter-spacing:1px;
    padding: 5px 40px 5px 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .works .nav .item{
    padding: 5px 0 5px 19px;
    margin: 5px 0;
  }
  .works .nav .item:hover{
    color: #6830d5;
  }
  .works .nav .current{
    padding: 5px 0 5px 15px;
    border-left: 4px solid #6830d5;
    transition: 0.2s all linear;
  }

  .works .body{
    margin-left: 20px;
    flex: 1;
  }
</style>
