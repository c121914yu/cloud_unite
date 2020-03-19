<template>
  <div class="slidNav">
    <router-link 
      class="nav"
      :class="currentIndex == index ? 'active' : ''"
      v-for="(item,index) in navs"
      :key="index"
      :to="{name:item.to}"
    >
      {{item.text}}
    </router-link>
  </div>
</template>

<script>
export default{
  data(){
    return{
      currentIndex : 0,
      navs : [
        {text:'我的作品',to:"mywork"},
        {text:'上传作品',to:"upwork"},
        {text:'个人资料',to:"mydata"}
      ]
    }
  },
  watch:{
    '$route' : 'routeChange'
  },
  methods:{
    routeChange(){
      switch(this.$route.name){
        case 'mywork' : this.currentIndex=0;break;
        case 'upwork' : this.currentIndex=1;break;
        case 'mydata' : this.currentIndex=2;break;
      }
    }
  },
  created() {
    this.routeChange()
  }
}
</script>

<style scoped>
.slidNav{
  width: 150px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: var(--box-shadow2);
  padding: 5px 0;
}
.slidNav .nav{
  display: block;
  margin: 5px 0;
  padding: 5px 15px;
  cursor: pointer;
  border-left: 3px solid transparent;
}
.slidNav .nav.active{
  border-color: var(--purple1);
}
</style>
