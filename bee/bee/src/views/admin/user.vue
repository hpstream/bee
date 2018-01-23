<template>

  <div class="app-container">
    <div class="search mx2">
      <el-row>
        <el-col :span="21">
          <el-input placeholder="请输入用户名或账号" v-model="userOrLoginName" clearable>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="searchUser">搜索</el-button>
          <el-button type="primary" @click="showEditDialog">新建</el-button>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-row>
        <el-col :span="24">
          <el-table :data="userData" stripe height="800" border style="width: 100%">
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
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="24">
        <div class="pagination" style="text-align: right;padding: 10px 0">
          <el-pagination :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
                         layout="total, sizes, prev, pager, next" :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>


    <el-dialog title="新建用户" :visible.sync="editDialog" width="38%">
      <div style="padding: 10px 0 10px 30px">带 '<span style="color: red"> * </span>' 号为必填项</div>
      <el-form :model="user" label-width="150px" :rules="userRules" ref='editForm' style="width: 500px">
        <el-form-item label="用户名:" prop="userName">
          <el-input v-model="user.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="账号:" prop="loginName">
          <el-input v-model="user.loginName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号:" prop="userMobile">
          <el-input v-model="user.userMobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>


<script>
// import Vue from 'vue'
import request from '@/utils/request'
export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      userData: [],
      editDialog: false,
      userOrLoginName: '',
      user: {
        userName: '',
        loginName: '',
        password: '',
        userMobile: ''
      },
      userRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    showEditDialog() {
      this.editDialog = true
      if (this.$refs['editForm']) {
        this.$refs['editForm'].resetFields()
      }
    },
    searchUser() {
      request({
        url: 'admin/api/users',
        method: 'get',
        params: {
          userName: this.userOrLoginName,
          offset: 0,
          limit: 10
        }
      }).then((d) => {
        this.userData = d.data.data
        this.total = d.data.total
      })
    },
    saveUser() {
      this.$refs['editForm'].validate((valid) => {
        if (!valid) {
          return
        }
        let url = 'admin/api/users'
        let method = 'post'
        if (this.user.id) {
          method = 'put'
          url += '/' + this.user.id
        }
        request({
          url: url,
          method: method,
          data: this.user
        }).then((d) => {
          this.editDialog = false
          this.searchUser()
        })
      })
    },
    editUser(row) {
      this.user = row
      this.editDialog = true
    },
    deleteUser(row) {
      this.fd.req({
        url: '/admin/api/users/' + row.id,
        method: 'delete'
      }).then((d) => {
        console.log('用户删除')
      })
    }
  }
}

</script>
