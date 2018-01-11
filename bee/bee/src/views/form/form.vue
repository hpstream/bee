<template>
  <div class="user-table"  >
      <el-button-group>
         <el-button type="primary"  @click="add()" >新增</el-button>
         <el-button type="primary"  @click="edit()">修改</el-button>
         <el-button type="primary"  @click="usedelete()">删除</el-button>
      </el-button-group>
      <el-table
        ref="table"
        :data="tableData2"
        style="width: 100%"
        empty-text = "暂无数据"
        highlight-current-row
         @current-change="handleSelect"
         border
        >
       <!-- <el-table-column
          type="selection"
          width="55">
        </el-table-column> -->
      
      <template v-for="col in tableColumns">
          <el-table-column  :key="col.id"  resizable :formatter="formatter" :prop="col.feild" :label="col.label" ></el-table-column>
      </template>
      </el-table>

      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="30%">
         <el-form :model="form"  size="small" :label-position="labelPosition" label-width="80px"  ref="table">
           <el-col :span="12">
              <el-form-item  label="姓名">
                 <el-input v-model="form.userName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item  label="性别">
                 <el-input v-model="form.sex"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item  label="状态">
                 <el-input v-model="form.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item  label="生日">
                 <el-input v-model="form.birthdate"></el-input>
              </el-form-item>
            </el-col>
                
          </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="adduser()" size="small">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData2: [],

      tableColumns: [
        {
          feild: 'userName',
          label: '姓名'
        },
        {
          feild: 'sex',
          label: '性别'
        },
        {
          feild: 'status',
          label: '状态'
        },
        {
          feild: 'birthdate',
          label: '生日'
        }
      ],
      labelPosition: 'right',
      dialogVisible: false,
      title: '新增',
      form: {
        userName: '',
        sex: '',
        status: '',
        birthdate: ''
      },
      selectionRow: null,
      adminUrl: 'http://192.168.0.195:8006/user'
    }
  },
  computed: {

  },
  methods: {
    handleSelect(selection) {
      console.log(selection)
      this.selectionRow = selection
    },
    adduser() {
      if (this.title === '新增') {
        this.postTable()
      }
      if (this.title === '修改') {
        this.putTable()
      }
      if (this.title === '删除') {
        this.deleteTable()
      }
    },
    edit() {
      if (!this.selectionRow) {
        this.$message('请选择一条数据')
        return
      }
      this.title = '修改'
      this.form = this.selectionRow
      this.dialogVisible = true
    },
    add() {
      this.form = {}
      this.title = '新增'
      this.dialogVisible = true
    },
    usedelete() {
      let id
      if (this.selectionRow) {
        id = this.selectionRow.id
        this.deleteArr(id)
      } else {
        this.$message('没有选择')
      }
    },
    isExist(form) {
      var table = this.tableData2
      if (!form.id) {
        // id不存在,表示新增
        return false
      }

      for (let i = 0; i < table.length; i++) {
        if (table[i].id === form.id) {
          table[i] = form
          break
        }
      }
      return true
    },
    deleteArr(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTable()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    formatter(row, column, cellValue) {
      if (!cellValue) {
        return '-'
      }
      // if (column.label == "性别") {
      //   return row.sex == 0 ? "男" : "女";
      // }
      // if (column.label == "状态") {
      //   return row.status == 0 ? "不好" : "好";
      // }

      // row = (row.status ==0?"不好":"好")
      return cellValue
    },
    getTable() {
      var that = this
      axios
        .get(this.adminUrl)
        .then(function(response) {
          that.tableData2 = response.data.data.items
        })
    },
    postTable() {
      var that = this
      axios
        .post(this.adminUrl, this.form)
        .then(function(res) {
          that.$refs['table'].resetFields()
          that.dialogVisible = false
          that.$message('成功！')
          that.getTable()
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    putTable() {
      var that = this
      axios
        .put(this.adminUrl, this.form)
        .then(function(res) {
          that.$refs['table'].resetFields()
          that.dialogVisible = false
          that.$message('修改成功！')
          that.getTable()
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    deleteTable() {
      var that = this
      axios
        .delete(this.adminUrl + '/' + this.selectionRow.userId)
        .then(function(res) {
          that.$message('删除成功！')
          that.getTable()
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getTable()
    this.$refs.table.setCurrentRow(this.tableData2[1])
  }
}
</script>

<style scoped>
.user-table {
  padding: 60px;
}
</style>

