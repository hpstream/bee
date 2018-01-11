<template>
  <div>
    <div class="pd-2-4" style="background-color: #fff;height:60px;">
      <div class = "f-left pd-2-1">服务名称:</div>
      <div class = "f-left" style = "margin-right:20px;">
        <el-input v-model="serviceName" placeholder="请输入服务名称" style = "width:200px;"></el-input>
      </div>
      <div class = "f-left pd-2-1">供应商:</div>
      <div class = "f-left" style = "margin-right:20px;">
        <el-select v-model="supplierId" clearable placeholder="请选择供应商" style = "width:200px;">
          <el-option v-for="item in supplier" :key="item.id" :value="item.id" :label="item.supplier"></el-option>
        </el-select>
      </div>
      <div class = "f-left" style = "margin-right:10px;"><el-button type="primary" @click = getServices>查询</el-button></div>
      <div class = "f-left"><el-button type="default" @click = resetQuery>重置</el-button></div>
    </div>
    <div class="app-container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item of list" style="margin: 10px 0;" :key="item.id">
          <fd-card :option='option' :cardData="item">
            <div slot='body'>
              <div style="height: 100px;padding: 20px 30px;border: solid 1px #e9e9e9;">
                <el-row>
                  <el-col :span = "12">
                    <div style="color: #999">在租用户</div>
                    <div class="font-18">{{item.hirer}}</div>
                  </el-col>
                  <el-col :span = "12">
                    <div style="color: #999">运行时长</div>
                    <div class="font-18">{{item.duration}}h</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </fd-card>
        </el-col>
      </el-row>
      <div class = "pd-2-2 t-right">
        <el-pagination
          :page-size="limit"
          @current-change="handleCurrentChange"
          layout="total , prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import FdCard from 'fd/card'
  // import store from '@/store'
  const status = {
    up: '运行中',
    down: '停止'
  }
  export default {
    name: 'center',
    components: {
      FdCard
    },
    data() {
      return {
        supplierId: '',
        serviceName: '',
        supplier: [],
        status,
        currentPage: 1,
        limit: 20,
        offset: 0,
        list: [],
        total: 0
      }
    },
    computed: {
      option() {
        return {
          header: {
            title: {
              field: 'serviceName', text: '', click(d) {}
            },
            status: 'status',
            bottoms: [
              {
                field: 'id', text: '管理', click: this.manage
              }
            ]
          }
        }
      }
    },
    methods: {
      manage(d, item) {
        this.$router.push({ name: 'detail', params: item })
      },
      getSupplier() {
        this.fd.req({
          url: 'suppliers',
          method: 'get'
        }).then(res => {
          this.supplier = res.data
        })
      },
      handleCurrentChange(page) {
        this.currentPage = page
        this.offset = (page - 1) * this.limit
        this.getServices()
      },
      resetQuery() {
        this.serviceName = ''
        this.supplierId = ''
        this.getServices()
      },
      getServices() {
        this.fd.req({
          url: 'services/back',
          method: 'get',
          params: {
            serviceName: this.serviceName,
            supplierId: this.supplierId,
            offset: this.offset,
            limit: this.limit
          }
        }).then(res => {
          const data = res.data.data || []
          for (const item of data) {
            item.status = this.status[item.status] || '停止'
          }
          this.list = data
          this.total = res.data.total
        })
      }
    },
    mounted() {
      this.getSupplier()
      this.getServices()
    }
  }
</script>

<style scoped>
</style>

