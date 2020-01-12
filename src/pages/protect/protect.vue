<template>
  <div class="protect">
    <router-link :to="{name:'my'}">
      <img src="./img/introduct.jpg">
    </router-link>
  </div>
</template>

<script>
</script>

<style>
  .protect{
    width: 100%;
    height: 100%;
  }
  .protect img{
    width: 70%;
    margin: 0 auto;
    display: block;
  }
</style>
