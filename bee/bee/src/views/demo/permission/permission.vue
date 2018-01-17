<template>
  <div class = "fd-permission app-container">
    <div class="fd-permission-group">
      
      <el-card class="fd-permission-tree">
        <div slot="header">
          <span>权限</span>
        </div>
        <el-button-group >
            <el-button :type="selectNode ? 'primary': 'plain'" icon="el-icon-plus" size="mini" @click="addTreeNode" :disabled="!selectNode">添加</el-button>
            <el-button type="primary" icon="el-icon-check" size="mini">保存</el-button>
        </el-button-group>
        <v-tree
          :data="permissionMenu"
          @select="selectTreeNode"
          draggable 
          ref="tree"
        ></v-tree>
      </el-card>

      <el-card>
        <div slot="header">
          <span>权限详情</span>
        </div>
        <el-form 
          :inline="true" 
          :model="permissionForm" 
          label-position="right" 
          size="small" 
          label-width="74px"
        >
          <el-form-item label="权限名称">
            <el-input v-model="permissionForm.permissionName" placeholder="权限名称" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item label="请求URL">
            <el-input v-model="permissionForm.requestUrl" placeholder="请求URL" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item label="请求方式">
            <el-select v-model="permissionForm.requestType" placeholder="请求方式" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="Get" value="get"></el-option>
              <el-option label="Post" value="post"></el-option>
              <el-option label="Put" value="put"></el-option>
              <el-option label="Delete" value="Delete"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="鉴权方式">
            <el-select v-model="permissionForm.permissionValue" placeholder="鉴权方式" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="不验证" value="shanghai"></el-option>
              <el-option label="登录验证" value="beijing"></el-option>
              <el-option label="权限验证" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否显示">
            <el-select v-model="permissionForm.isShow" placeholder="是否显示" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图标">
            <el-select v-model="permissionForm.iconClass" placeholder="图标" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option
                v-for="item of iconsMap"
                :key="item"
                :label="item"
                :value="item">
                <svg-icon :icon-class="item" style="float:left;height:100%;" />
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="画面元素">
            <el-input v-model="permissionForm.htmlElement" placeholder="画面元素" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item label="元素类型">
            <el-select v-model="permissionForm.permissionType" placeholder="元素类型" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="菜单" value="0"></el-option>
              <el-option label="页面" value="1"></el-option>
              <el-option label="按钮" value="2"></el-option>
              <el-option label="动作" value="3"></el-option>
              <el-option label="数据" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备  注">
            <el-input v-model="permissionForm.comments" placeholder="备  注" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onEditPermissionForm">{{canEditForm ? '编辑': '保存'}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >取消</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" >删除</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { getPageConfig } from '@/api/simple'
  import Tree from '@/components/tree/tree'
  import icons from '../svg-icons/generateIconsView'
  export default {
    name: 'permission',
    components: { Tree },
    data() {
      return {
        canEditForm: true,
        selectNode: null,
        permissionForm: {
          permissionName: '',
          requestUrl: '',
          requestType: '',
          permissionValue: '',
          isShow: '',
          iconClass: '',
          htmlElement: '',
          permissionType: '',
          comments: ''
        },
        defaultProps: {
          children: 'children',
          label: 'permissionName'
        },
        iconsMap: []
      }
    },
    computed: {
      ...mapGetters([
        'permissionMenu',
        'addRouters',
        'permission_routers'
      ])
    },
    mounted() {
      this.renderIconsOptions()
      this.GetPermissionMenu().then(res => {
        // console.log(this.permissionMenu)
      })
      console.log()
    },
    methods: {
      ...mapActions([
        'GetPermissionMenu'
      ]),
      ...mapMutations([
        'SET_ROUTERS'

      ]),
      addTreeNode() {
        console.log(this.selectNode.clue)
        this.$refs.tree.addNode(this.selectNode.clue, {
          title: `${this.selectNode.title}的节点`,
          permissionName: `${this.selectNode.title}的节点`
        })
      },
      onEditPermissionForm() {
        if (this.canEditForm) {
          // this.addRouters.children.push({
          //   path: 'test',
          //   component: resolve => require(['@/components/demo/permission/test'], resolve),
          //   name: '测试',
          //   meta: { title: '测试权限', icon: 'example' }
          // })
          // this.SET_ROUTERS(this.addRouters)
          // this.$router.addRouters(this.addRouters)
        }
        this.canEditForm = !this.canEditForm
      },
      renderIconsOptions() {
        this.iconsMap = icons.state.iconsMap.map((i) => i.default.id.split('-')[1])
      },
      selectTreeNode(selectedNodes) {
        // this.selectNode = selectedNodes[0]
        // this.$set(this.permissionForm, 'permissionName', this.selectNode.title)
      },
      handleNodeClick(data) {
        console.log(data)
        getPageConfig().then(res => {
          this.permissionForm = res.data
          console.log(this.permissionForm)
        })
      }
    }
  }
</script>

<style lang="scss">
.fd-permission {
  &-group {
    display: flex;
    justify-content: space-between;
  }
  &-tree {
    width: 1000px;
    margin-right: 20px;
  }
  &-item_input {
    width: 150px;
  }
}

</style>

