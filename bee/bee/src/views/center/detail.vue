<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">基本信息</el-menu-item>
      <el-menu-item index="2">规格参数</el-menu-item>
      <el-menu-item index="3">租户管理</el-menu-item>
    </el-menu>
    <div class="pd-1-2">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6" class="p0"  v-show="activeIndex === '1'">
          <div class="p2 m2" style="background-color: #fff">
            <el-form ref="serviceInfo" :model="serviceInfo" label-width="120px" :rules = 'basicRules'>
              <el-form-item label="服务名称" prop="serviceName" required>
                <el-input v-model="serviceInfo.serviceName" placeholder="请输入服务名称"></el-input>
              </el-form-item>
              <el-form-item label="服务类别" prop="serviceTypeId" required>
                <el-select v-model="serviceInfo.serviceTypeId" placeholder="请选择一个服务类别">
                  <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="服务提供方" prop="supplierId" required>
                <el-select v-model="serviceInfo.supplierId" placeholder="请选择一个供应方">
                  <el-option v-for="item in companies" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="服务上线时间" prop="serviceOnlineDate" required>
                <el-date-picker
                  v-model="serviceInfo.serviceOnlineDate"
                  type="date"
                  placeholder="上线时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="应用范围">
                <el-checkbox-group v-model="serviceInfo.serviceScopeIds">
                  <el-row>
                    <el-col :span="8"><el-checkbox label="scope-2" name="type">涉密办公</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="scope-3" name="type">法院内部</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="scope-4" name="type">社会公众</el-checkbox></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8"><el-checkbox label="scope-5" name="type">政府部门</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="scope-6" name="type">企事业单位</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="scope-7" name="type">律师律所</el-checkbox></el-col>
                  </el-row>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="服务描述">
                <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="请输入服务描述"
                  v-model="serviceInfo.serviceDescribe">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="basicSave('basic')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="12" :offset="6" class="p0"  v-show="activeIndex === '2'">
          <div class="p2 m2" style="background-color: #fff">
            <div>
              <el-form ref="serviceInfo" :model="serviceInfo" label-width="120px" :rules="paramRules">
                <el-form-item label="服务地址" prop="serviceAddress" required>
                  <el-input v-model="serviceInfo.serviceAddress" placeholder="请输入服务地址"></el-input>
                </el-form-item>
                <el-form-item label="请求方式" prop="requestMethodId" required>
                  <el-select v-model="serviceInfo.requestMethodId" placeholder="请选择请求方式">
                    <el-option v-for="item in methods" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="安全认证方式" prop="securityCertificateId" required>
                  <el-select v-model="serviceInfo.securityCertificateId" placeholder="请选择安全认证方式">
                    <el-option v-for="item in certificates" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="数据加密方式" prop="dataEncryptionId" required>
                  <el-select v-model="serviceInfo.dataEncryptionId" placeholder="请选择数据加密方式">
                    <el-option v-for="item in encryptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="服务时段">
                  <el-select v-model="serviceInfo.servicePeriodId" placeholder="请选择服务时段">
                    <el-option label="服务时段一" value="服务时段一"></el-option>
                    <el-option label="服务时段二" value="服务时段二"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="技术文件">
                  <el-upload
                    class="upload-demo"
                    ref="upload"
                    :action= "url"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :auto-upload="false"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button><i class="el-icon-upload2"></i>上传文件</el-button>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="basicSave('file')">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="20" :offset="2" class="p0"  v-show="activeIndex === '3'">
          <div class="p2 m2" style="background-color: #fff">
            <div>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="customer" label="租户名称" width="250"></el-table-column>
                <el-table-column prop="checkStatus" label="租用状态" width="150">
                  <template slot-scope="scope">
                    <svg-icon icon-class="sign" :style = "checkStatusColor[scope.row.checkStatus]"/>
                    <span style="margin-left: 10px">{{ checkStatus[scope.row.checkStatus] }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="租用时间" width="150">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.rentStartDate }} ~ {{ scope.row.rentEndDate }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="applyPurpose" label="租户简介"></el-table-column>
                <el-table-column fixed="right" label="操作" width="150">
                  <template slot-scope="scope">
                    <el-button @click="back(scope.row)" type="text" size="small">退租</el-button>
                    <el-button @click="stop(scope.row)" type="text" size="small">暂停租用</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class = "pd-2-2 t-right">
                <el-pagination
                  :page-size="limit"
                  @current-change="handleCurrentChange"
                  layout="total , prev, pager, next"
                  :total="tableTotal">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import store from '@/store'
  import moment from 'moment'
  const checkStatusColor = {
    '0': 'color: blue',
    '1': 'color: green',
    '2': 'color: red',
    '3': 'color: gray',
    '4': 'color: yellow'
  }
  const checkStatus = {
    '0': '待审批',
    '1': '同意',
    '2': '拒绝',
    '3': '退租',
    '4': '停用'
  }
  export default {
    components: {
    },
    data() {
      return {
        url: '',
        moment,
        activeIndex: '1',
        serviceInfo: {
          id: '',
          serviceScopeIds: [],
          serviceName: '',
          serviceTypeId: '',
          supplierId: '',
          applicationId: '',
          serviceDescribe: '',
          serviceAddress: '',
          requestMethodId: '',
          serviceOnlineDate: new Date(),
          securityCertificateId: '',
          dataEncryptionId: '',
          servicePeriodId: ''
        },
        serviceScopeIds: [],
        tableData: [],
        tableTotal: 0,
        offset: 0,
        limit: 10,
        checkStatus,
        checkStatusColor,
        currentPage: 1,
        serviceId: '',
        options: [],
        companies: [],
        applyRanges: [],
        encryptions: [],
        methods: [],
        certificates: [],
        fileList: [],
        basicRules: {
          applicationId: [{ required: true, message: '请选择服务所属工程', trigger: 'change' }],
          serviceName: [{ required: true, message: '请输入服务名称', trigger: 'blur' }],
          supplierId: [{ required: true, message: '请选择服务供应方', trigger: 'change' }],
          serviceTypeId: [{ required: true, message: '请选择服务类别', trigger: 'change' }],
          serviceOnlineDate: [{ type: 'date', required: true, message: '服务上线时间', trigger: 'change' }]
        },
        paramRules: {
          serviceAddress: [{ required: true, message: '请输入服务地址', trigger: 'blur' }],
          securityCertificateId: [{ required: true, message: '请选择安全认证方式', trigger: 'change' }],
          dataEncryptionId: [{ required: true, message: '请选择数据加密方式', trigger: 'change' }],
          requestMethodId: [{ required: true, message: '请选择请求方式', trigger: 'change' }]
        }
      }
    },
    methods: {
      save() {

      },
      handlePreview(file) {},
      handleRemove(file, fileList) {
        this.fd.req({
          method: 'DELETE',
          url: 'attachments/' + file.id
        })
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      handleSelect(key) {
        this.activeIndex = key
        if (key === '3' && this.tableData.length === 0) {
          this.getTableData()
        }
      },
      handleCurrentChange(page) {
        this.currentPage = page
        this.offset = (page - 1) * this.limit
        this.getTableData()
      },
      getTableData() {
        this.fd.req({
          url: 'applys/' + this.serviceId,
          method: 'get',
          params: {
            offset: this.offset,
            limit: this.limit
          }
        }).then(res => {
          this.tableData = res.data.data
          this.tableTotal = res.data.total
        })
      },
      basicSave(type) {
        this.serviceInfo.serviceOnlineDate = moment(this.serviceInfo.serviceOnlineDate).format('YYYY-MM-DD')
        this.fd.req({
          url: 'services/' + this.serviceId,
          method: 'put',
          data: this.serviceInfo
        }).then(res => {
          if (res.code === 200) {
            this.$message({
              message: '服务信息修改成功',
              type: 'success'
            })
            if (type === 'file') {
              this.$refs.upload.submit()
            }
          }
        })
      },
      getCompanies() {
        this.companies = store.getters.selects.supplier
      },
      getTypes() {
        this.options = store.getters.selects.service_type
      },
      getApplyRange() {
        this.applyRanges = store.getters.selects.scope
      },
      getEncryptions() {
        this.encryptions = store.getters.selects['data_encryption']
      },
      getCertificate() {
        this.certificates = store.getters.selects['security_certificate']
      },
      getMethods() {
        this.methods = store.getters.selects['request_method']
      },
      getServiceInfo() {
        this.fd.req({
          url: 'services/back/' + this.serviceId,
          method: 'get'
        }).then(res => {
          this.fd.tools.merge(false, this.serviceInfo, res.data)
          this.fd.req({
            url: 'scopes/' + this.serviceId,
            method: 'get'
          }).then(response => {
            this.serviceInfo.serviceScopeIds = response.data || []
          })
          this.fd.req({
            url: 'attachments/owners/' + this.serviceId,
            method: 'get'
          }).then(response => {
            this.fileList = this.fd.data.changeListKey(response.data, { attachmentName: 'name' })
          })
        })
      },
      back(row) {
        this.fd.req({
          url: 'applys/back/' + row.id,
          method: 'put',
          data: {
            checkStatus: '3',
            id: row.id
          }
        }).then(res => {
          this.getTableData()
        })
      },
      stop(row) {
        this.fd.req({
          url: 'applys/back/' + row.id,
          method: 'put',
          data: {
            checkStatus: '4',
            id: row.id
          }
        }).then(res => {
          this.getTableData()
        })
      }
    },
    mounted() {
      this.serviceId = this.$route.params.id
      this.url = 'http://192.168.0.212:8007/api/attachments/owners/' + this.serviceId + '?access_token=' + store.getters.token
      //      this.url = process.env.BASE_API + '/data/api/attachments/owners/' + this.serviceId + "?access_token=" + store.getters.token
      console.log('this.url', this.url)
      this.getServiceInfo()
      this.getCompanies()
      this.getTypes()
      this.getEncryptions()
      this.getMethods()
      this.getCertificate()
      this.getApplyRange()
    }
  }
</script>
