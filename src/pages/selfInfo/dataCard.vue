<template>
  <div class="card">
    <div class="left">
      <div class="name">
        <span class="name">Hannie</span>
        <i class="el-icon-edit-outline hover"></i>
      </div>
      <div class="count">
        <div class="item">
          <p class="amount">0</p>
          <p class="text">作品</p>
        </div>
        <div class="item">
          <p class="amount">0</p>
          <p class="text">粉丝</p>
        </div>
        <div class="item">
          <p class="amount">0</p>
          <p class="text">获赞</p>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../../static/loginBkg.jpg">
      <button class="btn">修改资料</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.card{
  height: 200px;
  background-color: #FFFFFF;
  box-shadow: var(--box-shadow2);
  border-radius: 10px;
  padding: 0 50px;
  display: flex;
  box-sizing: border-box;
}

.card .left{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.card .left .name span{
  margin-right: 5px;
  font-size: 1.2em;
  color: var(--purple2);
}
.card .left .name i{
  font-size: 1.2em;
}
.card .left .count{
  margin-top: 20px;
  margin-left: -20px;
  display: flex;
  text-align: center;
  user-select: none;
}
.card .left .count .item{
  margin: 0 10px;
}
.card .left .count .item .amount{
  font-size: 1.2em;
  font-weight: 500;
}
.card .left .count .item .text{
  color: var(--purple2);
}

.card .right{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.card .right img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.card .right .btn{
  margin-top: 15px;
  background-color: var(--purple3);
}
</style>
