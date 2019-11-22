<template>
  <div class="app">
    <mt-header fixed title="blackhorse"></mt-header>
    <transition name="app">
       <router-view/>
    </transition>
    <div class="nav">
      <router-link to="/home" tag="div" class="nav_bar">首页</router-link>
      <router-link to="/member" tag="div" class="nav_bar">会员</router-link></router-link>
      <router-link to="/shopcart" tag="div" class="nav_bar">购物车</router-link>
      <router-link to="/search" tag="div" class="nav_bar">搜索</router-link>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        selected:false
      }
    }
  }
</script>
<style>
*{
  margin:0;
  padding:0;
}
.app {
  padding-top:40px;
  padding-bottom:44px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.nav{
  width:100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  left:0;
  bottom:0;
  border-top:1px solid #e2e2e2;
  /* z-index: 999999; */
  background-color: #FFF;
}
.nav_bar{
  width:25%;
  height: 44px;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size:16px;
  color:#333;
}
.router-link-active{
  color:#26A2FF;
}
.app-enter{
  opacity: 0;
  transform: translateX(100%);
}
.app-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.app-leave-active,
.app-enter-active{
  transition: all 0.6s ease;
}
</style>
