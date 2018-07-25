<template>
  <div class="echarts">
    <h2>echarts图表</h2>
    <div ref="myChart" class="my-chart" :style="{width: '700px', height: '300px'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      msg: 'Chart'
    }
  },
  created() {
    console.log('Third子组件--created')
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      let myChart = echarts.init(this.$refs.myChart)
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#83bff6'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#188df0'}
                ]
              )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ]
              )
            }
          }
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }

  }
}
</script>
<style scoped>
.echarts {
  text-align: left;
}
h2 {
  font-weight: normal;
  padding-left: 300px;
}
a {
  color: #42b983;
}
</style>
