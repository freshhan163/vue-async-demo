<template>
  <div>
    <img src="../assets/logo.png">
    <h2>以下是关于路由懒加载、组件异步加载的部分参考文章</h2>
    <ul>
      <li><a target="_blank" href="http://www.cnblogs.com/zhanyishu/p/6587571.html">vue2路由懒加载&组件异步加载详细解析</a></li>
      <li><a target="_blank" href="https://www.cnblogs.com/hity-tt/p/7169307.html">vue性能渲染步骤</a></li>
      <li><a target="_blank" href="https://www.cnblogs.com/moqiutao/p/8328931.html">vue组件解析</a></li>
      <li><a target="_blank" href="https://www.jianshu.com/p/080e18fcf0e3">webpack入门实战--阮一峰教程</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      // msg: '子路由'
    }
  },
  created() {
    console.log('About子组件--created')
  },
  mounted() {
    console.log('About子组件--mounted')
  },

  methods: {
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 50px;
  /* text-align: left; */
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
  font-size: 20px;
}
</style>
