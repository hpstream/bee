<template>
  <div class="app-container" >
      <fd-table  
        :option='option'
        @cellClick='cellClick' 
         >
        
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  
                </el-form>
              </template>
            </el-table-column>

         </fd-table>
  </div>
</template>

<script>
import FDPaginationtable from 'fd/tabel'
// import Vue from 'vue'
export default {
  data() {
    return {
      option: {
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50],
        url: '',
        sidePagination: 'client',
        stripe: true,
        border: true,
        width: '500',
        // height:'400',
        data: [],
        columns: [
          {
            field: 'id',
            title: '序号',
            width: '55'
          },
          {
            field: 'name',
            title: '姓名',
            sortable: true
          },
          {
            field: 'value',
            title: '数值',
            sortable: true
          },
          {
            field: 'name',
            title: '姓名',
            sortable: true
          },
          {
            field: 'value',
            title: '数值',
            edit: true,
            sortable: true
          },
          {
            field: 'address',
            title: '地址',
            width: '300',
            showOverflowTooltip: true,
            formatter: function(row, cellValue) {
              return `${cellValue}`
            }
          },
          {
            field: '',
            title: '操作',
            type: 'botton',
            fixed: 'right',
            width: '150px',
            number: [
              {
                text: '新建',
                type: 'primary',
                click: function(d) {
                  console.log(d)
                }
              },
              { text: '删除', type: 'danger' }
            ]
          }
        ]
      }
    }
  },
  methods: {
    handleEdit(scope, row) {
      scope.row.edit = true
      console.log(scope.row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    cancelEdit(row) {
      row.edit = false
    },
    cellClick(row, column, cell, event) {
      // console.log(row, column, cell);
      // console.log(event);
    }
  },

  components: {
    FDPaginationtable
  },
  beforeMount() {
    this.$nextTick(() => {
      // var that = this
      const arr = []
      for (var i = 0; i < 100; i++) {
        arr.push({
          id: i,
          name: Math.ceil(Math.random() * 10) + '王小虎',
          address: '上海市普陀区上海市普陀区上海区上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区',
          edit: false,
          value: Math.ceil(Math.random() * 100)
        })
      }
      this.option.data = arr
    })
  },
  mounted() {}
}
</script>

