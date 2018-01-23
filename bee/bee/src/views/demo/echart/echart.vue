<template>
  <div class = "app-container">
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click = "getVbarData">刷新</el-button>
        <fd-echart :option = optionVbar></fd-echart>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click = "getLineData">刷新</el-button>
        <fd-echart :option = optionLine></fd-echart>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click = "getVbarData">刷新</el-button>
        <fd-echart :option = optionVbarDataZoom></fd-echart>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click = "getLineData">刷新</el-button>
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
            }
          }
        },
        optionLine: {
          data: [],
          type: 'line',
          opt: {
            yAxis: {
              name: '案件量'
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
            }
          }
        },
        optionPie: {
          data: [],
          type: 'pie',
          opt: {

          }
        }
      }
    },
    methods: {
      getVbarData() {
        this.fd.req({
          type: 'get',
          url: 'api/echarts'
        }).then(response => {
          console.log('this.optionVbar.data', response.data)
          this.optionVbar.data = response
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
      getLineData() {
        this.fd.req({
          type: 'get',
          url: 'echarts'
        }).then(response => {
          this.optionLine.data = response
          this.optionLineDataZoom.data = response
        }).catch(error => {
          console.log('api/charts', error)
        })
      }
    },
    mounted() {
      this.getVbarData()
      this.getLineData()
      this.getPieData()
    }
  }
</script>

<style scoped>
</style>

