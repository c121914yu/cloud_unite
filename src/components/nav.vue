<template>
  <div class="Nav">
    <router-link :to="{name:'home'}">
      <img class="logo" src="../../static/logo.png">
    </router-link>
    
    <div class="routes">
      <router-link
      class="route"
      v-for="(router,index) in routers"
      :key="index"
      :to="{name:router.name}"
      >
        <p>GenDoo</p>
        <p>{{router.text}}</p>
      </router-link>
    </div>
    
    <div class="right">
      <router-link :to="{name:'login'}" v-if="userInfo===''">登录</router-link>
      <div v-else 
        class="avatar" 
        :class="canHover?'canHover':''"
        @mouseenter="canHover=true"
      >
        <img src="../../static/loginBkg.jpg">
        <div class="menu" @click="canHover=false">
          <router-link class="item" :to="{name:'my'}">
            <p>粉丝</p>
            <div class="amount">52</div>
          </router-link>
          <router-link class="item" :to="{name:'my'}">
            <p>作品</p>
            <div class="amount">10</div>
          </router-link>
          <router-link class="item" :to="{name:'my'}">
            上传作品
          </router-link>
          <router-link class="item" :to="{name:'my'}">
            个人资料
          </router-link>
          <p class="item" @click="loginOut">
            退出登录
          </p>
        </div>
      </div>
    </div>
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
          {name:'circle',text:'圈子'},
        ],
        canHover : true
      }
    },
    methods:{
      loginOut(){
        this.$store.commit('changeUserInfo','')
        localStorage.removeItem('loginInfo')
        global.Router(this,'home')
      }
    },
    computed:{
      userInfo(){
        return this.$store.state.userInfo
      }
    }
  }
</script>

<style scoped>
.Nav{
  position: fixed;
  top: 0;
  z-index: 10;
  color: var(--font-dark-common);
  background:#FFFFFF;
  width:100%;
  height: 60px;
  box-shadow: var(--box-shadow2);
  display: flex;
  align-items: center;
  user-select:none;
}
.Nav .logo{
  width: 200px;
  margin: 0 35px 0 20px;
  cursor: pointer;
}

.Nav .routes{
  flex: 2;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Nav .routes .route{
  margin: 0 30px;
  top: 2px;
  padding-bottom: 5px;
  text-align: center;
  border-bottom: 2px solid transparent;
}
.Nav .routes .route.currentNav{
  color: var(--purple2);
  border-color: var(--purple2)
}
.Nav .routes .route p{
  font-weight: 500;
}

.Nav .right{
  flex: 1;
  padding-right: 30px;
  text-align: end;
}
.Nav .right .avatar{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.Nav .right .avatar img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
}
.Nav .right .avatar .menu{
  height: 0;
  position: absolute;
  top: 60px;
  background-color: #FFFFFF;
  box-shadow: var(--box-shadow1);
  border-radius: 5px;
  overflow: hidden;
  transition: var(--transition-speed);
}
.Nav .right .avatar .menu .item{
  width: 120px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.Nav .right .avatar .menu .item p{
  flex: 1;
  text-align: start;
}
.Nav .right .avatar .menu .item .amount{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #FFFFFF;
  background-color: var(--purple2);
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}
.Nav .right .avatar .menu .item:hover{
  color: #FFFFFF;
  background-color: var(--purple2);
}
.Nav .right .avatar .menu .item:hover a{
  color: #FFFFFF;
}
.Nav .right .avatar .menu .item:hover .amount{
  background-color: var(--purple2);
}
.Nav .right .avatar.canHover:hover .menu{
  height: 232px;
}

@media (max-width:900px) {
  .Nav .logo{
    width: 120px;
  }
  
  .Nav .routes .route{
    margin: 0 15px;
  }
}
</style>
