<template>
  <div class = "px2 pb2 right-align">
    <el-pagination
      :page-size="limit"
      @current-change="handleCurrentChange"
      layout="total , prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'FdPagination',
    props: {
      limit: {
        type: Number,
        default: 10
      },
      handleCurrentChange: {
        type: Object,
        default: function() {}
      },
      total: {
        type: Number,
        default: 0
      }
    }
  }
</script>
