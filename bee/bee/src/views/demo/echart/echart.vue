<template>
  <div class = "app-container">
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click = "getVbar1Data">刷新</el-button>
        <fd-echart :option = optionVbar></fd-echart>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click = "getLine1Data">刷新</el-button>
        <fd-echart :option = optionLine></fd-echart>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click = "getVbar2Data">刷新</el-button>
        <fd-echart :option = optionVbarDataZoom></fd-echart>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click = "getLine2Data">刷新</el-button>
        <fd-echart :option = optionLineDataZoom></fd-echart>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button type="primary" @click = "getPieData">刷新</el-button>
        <fd-echart :option = optionPie></fd-echart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'fd/echarts/echarts'
  export default {
    name: 'workspace',
    components: {
      echarts
    },
    data() {
      return {
        handCount: 0,
        optionVbar: {
          data: [],
          type: 'vbar',
          stack: true,
          opt: {
            yAxis: {
              name: '案件量'
            },
            title: {
              text: '堆积图的柱状图'
            }
          }
        },
        optionVbarDataZoom: {
          data: [],
          type: 'vbar',
          dataZoom: true,
          end: true,
          stack: true,
          opt: {
            yAxis: {
              name: '案件量'
            },
            title: {
              text: '带拖动条的柱图'
            }
          }
        },
        optionLine: {
          data: [],
          type: 'line',
          opt: {
            yAxis: {
              name: '案件量'
            },
            title: {
              text: '拖动条显示后20条'
            }
          }
        },
        optionLineDataZoom: {
          data: [],
          type: 'line',
          dataZoom: true,
          opt: {
            yAxis: {
              name: '案件量'
            },
            title: {
              text: '拖动条显示前20条'
            }
          }
        },
        optionPie: {
          data: [],
          type: 'pie',
          opt: {
            title: {
              text: '饼图1'
            }
          }
        }
      }
    },
    methods: {
      getVbar1Data() {
        this.fd.req({
          type: 'get',
          url: 'api/echarts'
        }).then(response => {
          this.optionVbar.data = response
        }).catch(error => {
          console.log('api/charts', error)
        })
      },
      getVbar2Data() {
        this.fd.req({
          type: 'get',
          url: 'api/echarts'
        }).then(response => {
          this.optionVbarDataZoom.data = response
        }).catch(error => {
          console.log('api/charts', error)
        })
      },
      getPieData() {
        this.fd.req({
          type: 'get',
          url: 'echart-pie/'
        }).then(response => {
          this.optionPie.data = response
        }).catch(error => {
          console.log('api/charts', error)
        })
      },
      getLine1Data() {
        this.fd.req({
          type: 'get',
          url: 'echarts'
        }).then(response => {
          this.optionLine.data = response
        }).catch(error => {
          console.log('api/charts', error)
        })
      },
      getLine2Data() {
        this.fd.req({
          type: 'get',
          url: 'echarts'
        }).then(response => {
          this.optionLineDataZoom.data = response
        }).catch(error => {
          console.log('api/charts', error)
        })
      }
    },
    mounted() {
      this.getVbar1Data()
      this.getVbar2Data()
      this.getLine1Data()
      this.getLine2Data()
      this.getPieData()
    }
  }
</script>

<style scoped>
</style>

