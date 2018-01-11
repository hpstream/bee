<template>
  <div class="user-select">
    <el-dropdown trigger="click">
      <el-input class="input-select el-dropdown-link" v-model="inputTree" placeholder="请选择"></el-input>
      <el-dropdown-menu slot="dropdown">
        <template slot-scope="scope">
          <el-tree class="filter-tree" :data="trees" :props="defaultProps"  node-key="id"
                   default-expand-all :filter-node-method="filterNode" ref="tree2" :expand-on-click-node="false"
                   @node-click="Tooclick"  :check-strictly = "true"
          ></el-tree>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    watch: {},
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      Tooclick(value) {
        console.log(value)
        this.inputTree = value.label
        return value.label
        //   console.log(this.$refs.tree2.getCheckedKeys())
      },
      // 重置树选项:render-content="renderContent"
      renderContent(h, { node, data, store }) {
        console.log(h)
        console.log(node)
        console.log(data)
        console.log(store)
      }
    },
    data() {
      return {
        treeValue: '',
        trees: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        inputTree: ''
      }
    }
  }
</script>

<style scoped>
  .input-select{
    width:300px;
  }
  .filter-tree{
    min-width:300px;
  }
</style>
