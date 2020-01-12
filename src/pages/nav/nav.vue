<template>
  <div class="navigation">
    <div @click="routerTo(0,'home')">
      <img class="logo" src="../../assets/logo.png">
    </div>

    <div class="nav" id="router">
      <div
        :class="router.class"
        v-for="(router,index) in routers"
        :key="index"
        @click="routerTo(index,router.name)"
      >
        <p v-if="index<5">GenDoo</p>
        <p>{{router.text}}</p>
        <p v-if="index===7">GenDoo</p>
      </div>
      <div class="border" :style="'margin-left:' + border_left + '%;' + transition"></div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        screenWidth : document.body.clientWidth,
        transition : 'transition: 0.3s all;',
        border_left : 5,
        routers: [
          {name:'home',text:'首页',class:'router'},
          {name:'protect',text:'保护',class:'router'},
          {name:'discover',text:'发现',class:'router'},
          {name:'business',text:'商业',class:'router'},
          {name:'circle',text:'圈子',class:'router'},
          {name:'',text:'',class:'white'},
          {name:'my',text:'',class:'avatar'},
          {name:'my',text:'我的',class:'myrouter'}
        ],
      }
    },
    watch: {
      '$route' : 'borderChange',
      screenWidth(val){//监听窗口变化，改变border位置
        this.transition = 'transition: 0s all;'
        this.borderChange()
        setTimeout(() => {
          this.transition = 'transition: 0.3s all;'
        },300)
      }
    },
    mounted(){
      this.borderChange()
      window.onresize = () => {
          return (() => {
              window.screenWidth = document.body.clientWidth
              this.screenWidth = window.screenWidth
          })()
      }
    },
    methods:{
      routerTo(index,name){
        global.Router(this,name)
      },
      borderChange(){
        let routerWidth = document.getElementById('router').offsetWidth
        let index = 0
        switch(this.$route.name){
          case 'home' : index=0;break;
          case 'protect' : index=1;break;
          case 'discover' : index=2;break;
          case 'business' : index=3;break;
          case 'circle' : index=4;break;
          case 'my' : index=7;break;
          case 'myworks' : index=7;break;
        }
        let dom = document.getElementById('router').children[index]
        this.border_left = dom.offsetLeft / routerWidth * 100
      }
    }//methods结束
  }
</script>

<style>
  .navigation{
    background:#fdfdfd;
    width:100%;
    height: 60px;
    display: flex;
    align-items: center;
    user-select:none;
  }
  .navigation .logo{
    margin-left: 20px;
    cursor: pointer;
  }

  .navigation .nav{
    flex: 1;
    height: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  /* .navigation .nav .active{
    border-bottom: 4px solid #6830D5;
    transition: 0.2s all;
  } */
  .navigation .nav .border{
    position: absolute;
    bottom: 0;
    height: 4px;
    background-color: #6830D5;
    width: 80px;
  }

  .navigation .nav .router{
    color: #6830d5;
    font-weight:bold;
    font-size:16px;
    letter-spacing:2px;
    margin-left: 5%;
    text-align: center;
    cursor: pointer;
  }
  .navigation .nav .router:hover{
    color: #8500ff;
  }
  .navigation .nav .white{
    flex: 1;
    border: none;
    cursor: default;
  }

  .navigation .nav .avatar{
    background: #8500ff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: none;
    cursor: pointer;
  }

  .navigation .nav .myrouter{
    color: #6830d5;
    font-weight:bold;
    font-size:16px;
    letter-spacing:2px;
    text-align: center;
    height: 100%;
    margin-right: 2%;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px){
    .navigation .logo{
      margin-left: 5px;
      width: 150px;
      height: 30px;
    }
    .navigation .nav{
      margin-left: 5px;
    }
    .navigation .avatar{
      display: none;
    }
  }
</style>
