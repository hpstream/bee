<template>
  <div class="user-select">
    <fd-tree :option = option></fd-tree>
  </div>
</template>

<script>
  import inputTree from 'fd/inputTree/inputTree'
  export default {
    name: 'index2',
    methods: {
    },
    components: {
      inputTree
    },
    data() {
      return {
        option: {
          treeValue: '',
          property: 'id',
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
  }
</script>

<style scoped>

</style>
