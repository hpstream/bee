<template>
  <div class = "py1 px2">
    <div v-for="key in description" :key="key.name">
      <div class="p2 border my1 p2 bg" v-if="key.type ==='function'">
        <div>方法名称：{{key.name}}</div>
        <div>方法描述：{{key.des}}</div>
        <div>参数：{{key.param}}</div>
        <div :span="4">返回值：{{key.result}}</div>
      </div>
      <div v-else-if="key.type ==='object'" v-for="item in key" :key="item.name">
        <div class="p2 border my1 p2 bg">
          <div>方法名称：{{key.name}}</div>
          <div>方法描述：{{key.des}}</div>
          <div>参数：{{key.param}}</div>
          <div :span="4">返回值：{{key.result}}</div>
        </div>
      </div>
    </div>
    <el-row class="my2">
      新增公共方法说明:
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'selelcts',
    data() {
      return {
        description: {}
      }
    },
    mounted() {
      this.description = this.fd.description
    }
  }
</script>

<style scoped>
</style>

