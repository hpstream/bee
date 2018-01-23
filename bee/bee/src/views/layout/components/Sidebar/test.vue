<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156"
             text-color="#fff" active-text-color="#409EFF">
      <div class='projectName'>
        <svg-icon icon-class="table"></svg-icon>
        <span>统一服务管理平台</span>
      </div>
      <sidebar-item :routes="list"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'
  import { asyncRouterMap } from '@/router'
  export default {
    data() {
      return {
        list: asyncRouterMap
      }
    },
    components: { SidebarItem, ScrollBar },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    },
    mounted() {
      console.log('==========')
      console.log(this.permission_routers)
      console.log(asyncRouterMap)
    }
  }
</script>
<style scoped>
  .projectName {
    height: 50px;
    color: #fff;
    padding: 20px 0 20px 20px;
    font-size: 0.875rem;
  }
  
  .hideSidebar .projectName {
    padding-left: 10px
  }
  
  .hideSidebar .projectName span {
    display: none;
  }
</style>
