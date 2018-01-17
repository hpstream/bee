<template>
  <scroll-bar>
    <el-menu 
      mode="vertical" 
      :collapse="isCollapse" 
      :default-active="refreshRoute($route)"
      background-color="#304156" 
      text-color="#fff"
      active-text-color="#409EFF">
      <div class='projectName'>
        <svg-icon icon-class="table"></svg-icon>
        <span>统一服务管理平台</span>
      </div>
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/scrollBar/scrollBar'

export default {
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
  methods: {
    refreshRoute(route) {
      let routePath = ''
      for (let i = route.matched.length - 1; i > 0; i--) {
        const isHiden = route.matched[i].meta.subRoutes
        if (!isHiden) {
          routePath = route.matched[i].path
          break
        }
      }
      return routePath
    }
  }
}
</script>
<style scoped>
  .projectName{
    height: 50px;
    color: #fff;
    padding: 20px 0 20px 20px;
    font-size: 0.875rem;
  }
  .hideSidebar .projectName{
    padding-left: 10px
  }
  .hideSidebar .projectName span{
    display: none;
  }
</style>
