<template>
  <div class="menu-wrapper">
    <template v-for="item in filterHideRoutes(routes, 'subRoutes')" v-if="!item.hidden&&item.children&&item.children.length>0">

      <router-link v-if="item.children.length===1 && !item.children[0].children && !item.children[0].meta.subRoutes" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden && !child.meta.subRoutes">
          <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="refreshRoute(item, child)" :key="child.name">
            <el-menu-item :index="refreshRoute(item, child)">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  mounted() {
  },
  methods: {
    refreshRoute(item, child) {
      return item.path + '/' + child.path
    },
    filterHideRoutes(routes, targetValue, TARGET = 'children') {
      for (let i = 0; i < routes.length; i++) {
        const children = routes[i][TARGET]
        if (children && children.length > 0) {
          this.filterHideRoutes(children)
          for (let j = 0; j < children.length; j++) {
            const item = children[j]
            if (item.meta.subRoutes) {
              children.splice(j, 1)
            }
          }
        }
      }
      return routes
    }
  }
}
</script>

