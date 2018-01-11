<template>
  <div class="fdTable">
    <el-table
     :data="tableData"
     :border="option.border"
     :stripe='option.stripe'
     :height="option.height"
     :width='option.width'
     @cell-click='cellClick'
     @sort-change='sortChange'
     highlight-current-row

    >
      <slot></slot>
   

      <el-table-column
                  v-for="item of option.columns" 
                  v-if="item.title!='操作'"   
                  :key="item.field"
                  :prop="item.field"
                  :label="item.title"
                  :fixed="item.fixed"
                  :width="item.width"
                  :sortable="item.sortable"
                  :show-overflow-tooltip="item.showOverflowTooltip"
                  >
                    <template slot-scope="scope"  >
                      <!-- <template v-if="item.formatter" >
                        <span class="edit" v-html="item.formatter(scope.row,scope.row[item.field])"></span>
                      </template>  -->
                       <template v-if='item.edit ==true' > 
                         <el-popover
                                :ref="'edit'+scope.$index"
                                v-if = 'item.edit'
                                placement="right"
                                width="220"
              
                                @show='editShow(scope.$index,scope.row,scope.row[item.field])'
                                trigger="click">
                                 <el-form label-position="top" label-width="80px" :model="form" size="mini" >
                                   <div style="color: #9a9a9a;margin-bottom: 4px;">编辑</div>
                                    <el-form-item > 
                                        <el-input
                                            placeholder="请输入内容"
                                            v-model="form.text"
                                            :ref="'editform'+scope.$index"
                                            size="mini"
                                            :autofocus='autofocus'
                                            clearable ='true'
                                            >
                                    </el-input>
                                    </el-form-item>
                                <el-form-item style="margin-top: 6px; text-align: right;">
                                      <el-button type="primary" @click="onSubmit('edit'+scope.$index,scope.$index,item.field)" size="mini">确定</el-button>
                                      <el-button size="mini"  @click="onCencel('edit'+scope.$index)">取消</el-button>
                                </el-form-item>   
                                </el-form>  
                                <span slot="reference">{{item.formatter?item.formatter(scope.row,scope.row[item.field]):scope.row[item.field]}}</span>                            
                          </el-popover>
                      </template>
                      <template v-else >            
                          <span class="edit">{{item.formatter?item.formatter(scope.row,scope.row[item.field]):scope.row[item.field]}}</span>
                      </template>
                    </template>
                
      </el-table-column>


      <el-table-column v-else   
                :key="item.field"  
                :prop="item.field" 
                :label="item.title" 
                :fixed="item.fixed" 
                :width="item.width"
                :sortable="item.sortable"
                >
                  <template slot-scope="scope"  >
                          <el-button 
                              size="small" v-for="it in item.number" 
                              :key="it.text" 
                              :type="it.type"
                              
                              @click="it.click?it.click(scope.$index,scope.row):buttonClick(scope.$index,scope.row)"
                              >{{it.text}}</el-button>
                    
                  </template>
      </el-table-column>
    
        
    </el-table>

     <div class="fdTable_pagination" :class="[{border: option.border}]">
        <el-pagination
          :page-sizes="option.pageList"
          :page-size="option.pageSize"
          layout="total, sizes, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="total">
        </el-pagination>
      </div>

      
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'FdTable',
  data() {
    return {
      tableData: [],
      allData: [],
      flag: true,
      isTableEdit: false,
      form: {
        text: ''
      },
      autofocus: true
    }
  },

  components: {},

  computed: {
    total() {
      return this.option.data.length
    }
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.option.pageSize = val
      this.dumppage()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.option.pageNumber = val
      this.dumppage()
    },
    dumppage() {
      this.tableData = this.option.data.slice(
        this.option.pageSize * (this.option.pageNumber - 1),
        this.option.pageSize * this.option.pageNumber
      )
    },
    buttonClick(data) {
      this.$emit('buttonClick', data)
    },
    cellClick(row, column, cell, event) {
      this.$emit('cellClick', row, column, cell, event)
    },
    sortChange(column, prop, order) {
      prop = column.prop
      order = column.order
      this.order = order
      if (!order) {
        this.option.data = [...this.allData]
        return
      }

      this.option.data.sort(function(a, b) {
        if (typeof a[prop] === 'string') {
          return StringOrder(a[prop], b[prop], order)
        } else {
          return NumberOrder(a[prop], b[prop], order)
        }
      })
      function StringOrder(a, b, order) {
        if (order === 'descending') {
          return a > b
        } else {
          return b > a
        }
      }
      function NumberOrder(a, b, order) {
        if (order === 'descending') {
          return b - a
        } else {
          return a - b
        }
      }

      // this.option.data = this.allData;
    },
    onSubmit(ref, index, field) {
      var size = this.option.pageSize * (this.option.pageNumber - 1) + index
      this.option.data[size][field] = this.form.text
      for (var i = 0; i < this.$refs[ref].length; i++) {
        this.$refs[ref][i].showPopper = false
      }
    },
    onCencel(ref) {
      for (var i = 0; i < this.$refs[ref].length; i++) {
        this.$refs[ref][i].showPopper = false
      }
    },
    editShow(index, row, value) {
      console.log(this.$refs['editform' + index][0].$el.blur())
      // this.$refs['editform'+index].$el;
      this.autofocus = true
      this.form.text = value
    }
  },
  props: {
    option: {
      type: Object
    }
  },
  mounted() {},
  watch: {
    'option.data'(newval, oldval) {
      if (this.flag) {
        this.flag = false
        this.allData = [...newval]
      }
      this.dumppage()
    }
  }
}
</script>
<style  scoped>
.fdTable_pagination {
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #e6ebf5;
}
.border {
  border-left: 1px solid #e6ebf5;
  border-right: 1px solid #e6ebf5;
}
.fdTable_pagination .el-pagination {
  text-align: right;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin: 0;
}
.edit {
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>