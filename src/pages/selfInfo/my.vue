<template>
  <div class="my">
    <dataCard></dataCard>
    <div class="main">
      <slidNav></slidNav>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import dataCard from './dataCard.vue'
import slidNav from './slidNav.vue'
export default{
  components:{
    dataCard,
    slidNav
  }
}

</script>

<style>
.my{
  padding: 80px 5% 20px 5%;
  height: 100vh;
}

.my .main{
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
}
.my .main .view{
  margin-left: 15px;
  flex: 1;
  padding: 10px;
  background-color: #FFFFFF;
  box-shadow: var(--box-shadow2);
  border-radius: 5px;
}
</style>
