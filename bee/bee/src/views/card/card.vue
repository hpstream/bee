<!-- by your name -->
<template>
  <div>
   
    <div class="p2">
      <div>单个卡片使用方式</div>
      <fd-card :option='option'>
        <div slot='body' >
          <div style="height: 200px;padding: 30px" class="bd color-border">
            {{data.remarks}}
          </div>
        </div>
        <div slot='footer'>
          <div style="padding:10px 30px">
          </div>
        </div>
      </fd-card>
    </div>
    <div class="p2">
      <span>多个卡片使用方式(需要把卡片配置写在computed里面)</span>
      <div >
        <el-row :gutter="20" >
          <el-col :span="12" v-for="item of mutiData" style="margin: 10px 0;" :key="item.id">
            <fd-card :option='mutiOption' :cardData="item">
              <div slot='body' >
                <div style="height: 200px;padding: 30px;border: solid 1px #e9e9e9;" @click="crad(item)">
                  <div>
                    {{item.serviceDescribe}}
                  </div>
                  <div>
                    {{item.applicationName}}
                    <el-button type="text">{{item.workTelephone}}</el-button>
                    {{item.serviceOnlineDate?'发布与'+item.serviceOnlineDate:''}}
                  </div>
                </div>
              </div>
            </fd-card>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  import FdCard from 'fd/card'
  export default {
    name: 'card',
    data() {
      return {
        option: {
          header: {
            status: 'status',
            title: {
              field: 'titleName', text: '', click(d) { console.log(d) }
            },
            subTitle: { field: 'subTitle', text: '更新时间:' },
            custom: { field: 'sxbb', text: '生效版本', type: 'switch' },
            bottoms: [
              { field: '编辑', text: '编辑', click(d) { console.log(d) } },
              { field: '编辑', text: '复制', click(d) { console.log(d) } },
              { field: '编辑', text: '下载', click(d) { console.log(d) } },
              { field: '编辑', text: '下载', click(d) { console.log(d) } }
            ]
          },
          data: {
            id: '123',
            titleName: '2017考评版本第一版已生效状态',
            subTitle: '2017-10至2017-12',
            sxbb: false,
            gxsj: '2017-12-01',
            status: '已定制',
            remarks: '第一期考评信息配置按照上次开会的来进行配置的。第一期考评信息配置按照上次开会的来进行配置的。第一期考'
          }
        },
        data: [],
        mutiData: []
      }
    },

    components: {
      FdCard
    },

    computed: {
      mutiOption() {
        return {
          header: {
            title: {
              field: 'serviceName', text: '', click(d) {
                console.log(d)
              }
            },
            bottoms: [
              {
                field: '', text: '申请', click: this.apply
              },
              {
                field: '', text: '反馈', click: this.feedback
              }
            ]
          }
        }
      }
    },
    methods: {
      Tooclick(e) {
        console.log(e)
      }
    },
    mounted() {
      this.data = this.option.data

      this.$nextTick(() => {
        var arr = []
        for (let i = 0; i < 10; i++) {
          arr.push({
            'id': i,
            'serviceName': 'seacheUsers2' + i,
            'serviceDescribe': '统一接口',
            'serviceOnlineDate': '2017-01-02',
            'workTelephone': '0551-123456',
            'applicationName': 'API-PLATFORM'
          })
          this.mutiData = arr
        }
      })
    }
  }

</script>
<style scoped>

  .el-dropdown {
    margin-left: 10px;
  }

  .el-dropdown > span {
    color: #409EFF;
  }
</style>
