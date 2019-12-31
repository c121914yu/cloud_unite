<template>
  <div class="navigation">
    <router-link  to="/home" style="border: none;">
      <img class="logo" src="../../assets/logo.png">
    </router-link>

    <div class="nav">
      <router-link
        class="router"
        v-for="(router,index) in routers"
        :key="index"
        :to="{name:router.name}"
      >
        <p>GenDoo</p>
        <p>{{router.text}}</p>
      </router-link>
    </div>

    <router-link
      class="avatar"
      style="border: none;"
      :to="{name:'my'}"
    >
    </router-link>

    <router-link
      class="myrouter router"
      :to="{name:'my'}"
    >
      <p>我的</p>
      <p>GenDoo</p>
    </router-link>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        routers: [
          {name:'home',text:'首页'},
          {name:'protect',text:'保护'},
          {name:'discover',text:'发现'},
          {name:'business',text:'商业'},
          {name:'circle',text:'圈子'}
        ]
      }
    }
  }
</script>

<style>
  .navigation{
    background:#fdfdfd;
    width:100%;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .navigation .logo{
    margin-left: 20px;
  }

  .navigation .nav{
    flex: 1;
    height: 100%;
    margin-left: 5%;
    padding-top: 10px;
    display: flex;
  }
  .navigation .nav .active{
    border-bottom: 4px solid #6830d5;
    transition: 0.2s all linear;
  }
  .navigation .nav .router{
    color: #6830d5;
    font-weight:bold;
    font-size:16px;
    letter-spacing:2px;
    margin-left: 5%;
    text-align: center;
  }

  .navigation .avatar{
    background: #8500ff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .navigation .myrouter{
    color: #6830d5;
    font-weight:bold;
    font-size:16px;
    letter-spacing:2px;
    text-align: center;
    height: 100%;
    margin-right: 20px;
    padding-top: 10px;
  }
  .navigation .active{
    border-bottom: 4px solid #6830d5;
    transition: 0.2s all linear;
  }
  .navigation .router:hover{
    color: #8500ff;
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
