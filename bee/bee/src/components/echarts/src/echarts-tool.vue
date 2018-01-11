<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'FdEchart',
  props: {
    option: {
      type: Object,
      default: {
        data: [],
        type: 'vbar',
        opt: {}
      }
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      chartOption: {}
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chartOption = this.fd.echart.getDefaultOption(this.option.type, this.option.opt)
      this.chart = echarts.init(this.$el)
      this.chart.setOption(this.chartOption)
    }
  },
  watch: {
    'option.data'() {
      this.chartOption = this.fd.echart.refreshOption(this.option, this.chartOption)
      this.chart.setOption(this.chartOption, true)
    }
  }
}
</script>
