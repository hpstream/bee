<template>
  <div class = "routes-container app-container">
    <el-card style="width:400px;">
      <el-form  label-width="80px" :model="formPageconfig" ref="pageForm">
      <el-form-item label="权限名称">
        <el-input v-model="formPageconfig.resourceName"></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="formPageconfig.requestUrl"></el-input>
      </el-form-item>
      <el-form-item label="权限方式">
        <el-select v-model="formPageconfig.permissionType" placeholder="请选择权限">
          <el-option label="admin" value="admin"></el-option>
          <el-option label="client" value="client"></el-option>
        </el-select>
        
      </el-form-item>
      <el-form-item label="图标">
        <el-select v-model="formPageconfig.iconClass" placeholder="图标">
            <el-option
              v-for="item of iconsMap"
              :key="item"
              :label="item"
              :value="item">
              <svg-icon :icon-class="item" style="float:left;height:100%;" />
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item }}</span>
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitPageForm" >立即创建</el-button>
        <el-button @click="resetPageForm('pageForm')" >重置</el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import icons from '../svg-icons/generateIconsView'
  export default {
    name: 'addRoutes',
    components: {
    },
    data() {
      return {
        iconsMap: [],
        formPageconfig: {
          iconClass: '',
          resourceCode: '',
          resourceName: '',
          id: '',
          parentId: '',
          requestUrl: '',
          permissionType: ''
        }
      }
    },
    mounted() {
      this.renderIconsOptions()
    },
    methods: {
      renderIconsOptions() {
        this.iconsMap = icons.state.iconsMap.map((i) => i.default.id.split('-')[1])
      },
      submitPageForm() {
        Cookies.set('routes', JSON.stringify(this.formPageconfig))
        location.reload()
      },
      resetPageForm(formName) {
        this.formPageconfig = ''
      }
    }
  }
</script>

<style scoped>
</style>

