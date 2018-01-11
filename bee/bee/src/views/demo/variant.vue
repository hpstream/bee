<template>
  <div class = "app-container pd-1-2">
    <el-row>
      常用选项：store.getters.selects
    </el-row>
    <el-row v-for="key in options" :key="key.id" class="p2">
      <el-col :span = "6">
        <el-select v-model="key[0].parentId" :placeholder="key[0].parentName">
          <el-option
            v-for="item in key"
            :key="item.id"
            :label="item.name"
            :value="item.parentId">
          </el-option>
        </el-select>
      </el-col>
      {{key[0].parentName}}
    </el-row>
    <el-row class="my2">
      其他待补充
    </el-row>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'selelcts',
    data() {
      return {
        options: {},
        name: 'test',
        keys: {}
      }
    },
    mounted() {
      this.options = store.getters.selects
    }
  }
</script>

<style scoped>
</style>

