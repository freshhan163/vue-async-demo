<template>
  <div id="app">
    <div class="header">
      <router-link :to="{path: '/'}" active-class="active">首页</router-link>
      <router-link :to="{path: '/about'}" active-class="active">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.header {
  background-color: grey;
  color: #eee;
  height: 300px;
  padding: 250px 50px 0 50px;
  font-size: 20px;
  text-align: left;
}
a {
  color: #eee;
  display: inline-block;
  margin-left: 50px;
  text-decoration: none;
}
a:hover {
  color: #333;
  text-decoration: none;
}
a:visited {
  color: #eee;
  text-decoration: none;
}
</style>
