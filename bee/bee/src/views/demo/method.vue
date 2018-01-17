<template>
  <div class = "py1 px2">
    <div v-for="key in description" :key="key.name">
      <div class="p2 border my1 p2 bg" v-if="key.type ==='function'">
        <div><span class = "inline-block">方法名称：</span><span class = "inline-block" v-html="key.name"></span></div>
        <div><span class = "inline-block">方法描述：</span><span class = "inline-block" v-html="key.des"></span></div>
        <div><span class = "inline-block">参数：</span><span class = "inline-block" v-html="key.param"></span></div>
        <div><span class = "inline-block">返回值：</span><span class = "inline-block" v-html="key.result"></span></div>
      </div>
      <div v-else-if="key.type ==='object'" v-for="item in key.child" :key="item.name">
        <div class="p2 border my1 p2 bg">
          <div><span class = "inline-block">方法名称：</span><span class = "inline-block" v-html="item.name"></span></div>
          <div><span class = "inline-block">方法描述：</span><span class = "inline-block" v-html="item.des"></span></div>
          <div><span class = "inline-block">参数：</span><span class = "inline-block" v-html="item.param"></span></div>
          <div><span class = "inline-block">返回值：</span><span class = "inline-block" v-html="item.result"></span></div>
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

