<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="com">
      <div class="demo">
        <h2>演示对话框</h2>
        <p>
          <button type="button" class="btn btn-primary" @click="show">点击弹窗</button>
        </p>
        <demo-window v-if="showModal"></demo-window>
      </div>
      <div class="chart">
        <chart v-if="showModal"></chart>
      </div>
    </div>
  </div>
</template>

<script>
// import DemoWindow from './DemoWindow.vue'
// import Chart from './Chart.vue'
export default {
  name: 'HelloWorld',

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal: false
    }
  },
  components: {
    // DemoWindow,
    // Chart
    DemoWindow: () => import('./DemoWindow.vue'),
    Chart: () => import('./Chart.vue')
  },

  methods: {
    show() {
      this.showModal = true
      this.$modal.open('DemoWindow')
    }
    // async show() {
    //   const result = await this.$modal.open('DemoWindow')

    //   console.log('父页面获取的对话框返回值：')
    //   console.log(result)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.com {
  overflow: hidden;
}
.demo {
  float: left;
  width: 30%;
}
.chart {
  float: left;
}
</style>
