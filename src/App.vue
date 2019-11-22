<template>
  <div class="app">
    <mt-header fixed title="blackhorse"></mt-header>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.app {
  padding-top:40px;
  box-sizing: border-box;
}
</style>
