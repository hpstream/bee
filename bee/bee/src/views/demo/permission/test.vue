<template>
  <div class = "app-container">
    子路由2 
    <br/>
    <el-button 
      type="primary" 
      plain 
      @click="$router.push('/demo/css/b/c')" 
      size="mini" 
      class="mb2"
    >
    跳转子路由3
    </el-button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'permissionTest',
    components: {
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
</style>

