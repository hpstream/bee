<template>

  <div class="app-container">
    <el-row>
      <el-col :span="8">
        <el-tree :data="resources" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="16">

        <el-row>

          <el-form :model="resource" label-width="150px" :rules="resourceRules" ref='editForm' style="width: 500px">
            <el-form-item label="资源名:" prop="userName">
              <el-input v-model="resource.resourceName" placeholder="请输入资源名"></el-input>
            </el-form-item>
          </el-form>
        </el-row>

        <el-row>
          <el-table :data="subResourcesData" stripe height="800" border style="width: 100%">
            <el-table-column prop="userName" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="loginName" label="账号">
            </el-table-column>
            <el-table-column prop="userMobile" label="手机号">
            </el-table-column>
            <el-table-column prop="userEmail" label="邮箱">
            </el-table-column>
            <el-table-column label="操作"
                             width="100">
              <template slot-scope="scope">
                <el-button @click="editUser(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>

      </el-col>
    </el-row>

  </div>

</template>


<script>
// import Vue from 'vue'
export default {
  data() {
    return {
      resources: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      resource: {},

      defaultProps: {
        children: 'children',
        label: 'label'
      },

      resourceRules: {

      },

      subResourcesData: []

    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}

</script>
