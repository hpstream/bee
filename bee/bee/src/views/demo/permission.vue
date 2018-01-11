<template>
  <div class = "fd-permission app-container">
    <div class="fd-permission-group">
      <el-card class="fd-permission-tree">
        <div slot="header">
          <span>权限</span>
        </div>
        <el-tree 
          :data="treeListdata" 
          :props="defaultProps" 
          @node-click="handleNodeClick"
          highlight-current
          :render-content="renderContent"
        >
        </el-tree>
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
            <el-input v-model="permissionForm.user" placeholder="请求URL" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item label="请求方式">
            <el-select v-model="permissionForm.requestUrl" placeholder="请求方式" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="Get" value="get"></el-option>
              <el-option label="Post" value="post"></el-option>
              <el-option label="Put" value="put"></el-option>
              <el-option label="Delete" value="Delete"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="鉴权方式">
            <el-select v-model="permissionForm.requestType" placeholder="鉴权方式" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="不验证" value="shanghai"></el-option>
              <el-option label="登录验证" value="beijing"></el-option>
              <el-option label="权限验证" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否显示">
            <el-select v-model="permissionForm.isShow" placeholder="是否显示" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="是" value="shanghai"></el-option>
              <el-option label="否" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图标">
            <el-select v-model="permissionForm.iconClass" placeholder="图标" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="画面元素">
            <el-input v-model="permissionForm.htmlElement" placeholder="画面元素" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item label="元素类型">
            <el-select v-model="permissionForm.permissionType" placeholder="元素类型" class="fd-permission-item_input" :disabled="canEditForm">
              <el-option label="菜单" value="menu"></el-option>
              <el-option label="页面" value="page"></el-option>
              <el-option label="按钮" value="button"></el-option>
              <el-option label="动作" value="action"></el-option>
              <el-option label="数据" value="data"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备  注">
            <el-input v-model="permissionForm.comments" placeholder="备  注" class="fd-permission-item_input" :disabled="canEditForm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onEditPermissionForm">{{canEditForm ? '编辑': '保存'}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">取消</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="onSubmit">删除</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const PERMISSION_URL = 'https://www.easy-mock.com/mock/5a55b664de90b06840dda803/fd-vue/getPermission'
  let id = 1000
  export default {
    name: 'permission',
    data() {
      return {
        menuList: [],
        canEditForm: true,
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
        treeListdata: [],
        defaultProps: {
          children: 'children',
          label: 'permissionName'
        }
      }
    },
    mounted() {
      this.getPermissionMennus()
    },
    methods: {
      onEditPermissionForm() {
        this.canEditForm = !this.canEditForm
      },
      onSubmit() {
        console.log('submit!')
      },
      append(data) {
        const newChild = { id: id++, permissionName: '新建权限', children: [] }
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        data.children.push(newChild)
      },

      remove(node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },

      handleNodeClick(data) {
        console.log(data)
      },
      getPermissionMennus() {
        axios.get(PERMISSION_URL)
          .then(res => {
            const { data } = res.data
            this.treeListdata = this.listToTree(data, {
              idKey: 'permissionId',
              parentKey: 'parentId'
            })
          })
      },
      renderContent(h, { node, data, store }) {
        console.log(node)
        return (
          <span style='flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px'>
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button style='font-size: 12px;' type='text' on-click={ () => this.append(data) }>Append</el-button>
              <el-button style='font-size: 12px;' type='text' on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>)
      },
      listToTree(data, options) {
        options = options || {}
        const ID_KEY = options.idKey || 'id'
        const PARENT_KEY = options.parentKey || 'parent'
        const CHILDREN_KEY = options.childrenKey || 'children'

        const tree = []
        const childrenOf = {}
        let item, id, parentId

        for (let i = 0, length = data.length; i < length; i++) {
          item = data[i]
          id = item[ID_KEY]
          parentId = item[PARENT_KEY] || 0
          // every item may have children
          childrenOf[id] = childrenOf[id] || []
          // init its children
          item[CHILDREN_KEY] = childrenOf[id]
          if (parentId !== 0) {
            // init its parent's children
            childrenOf[parentId] = childrenOf[parentId] || []
            // push it into its parent's children
            childrenOf[parentId].push(item)
          } else {
            tree.push(item)
          }
        }

        return tree
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

