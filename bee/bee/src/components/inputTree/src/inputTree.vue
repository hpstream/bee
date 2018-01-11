<template>
  <div class="user-select">
    <el-dropdown trigger="click">
      <el-input class="input-select el-dropdown-link" v-model = option.inputTree placeholder="请选择"></el-input>
      <el-dropdown-menu slot="dropdown">
        <template slot-scope="scope">
          <el-tree class="filter-tree" :data=option.trees :props=option.defaultProps  node-key=option.property
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
    name: 'FdTree',
    props: {
      option: {
        type: Object,
        default: {

        }
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      Tooclick(value) {
        console.log(value)
        this.option.inputTree = value.label
      }
    },
    data() {
      return {
      }
    },
    mounted() {
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
