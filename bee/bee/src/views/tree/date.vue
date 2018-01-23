<template>
  <div class="abc absolute">
      <span class='m1' v-for='item of date' :key="item" @click='click(item)'>{{item}}</span>
  </div>
</template>

<script>
  import Bus from './event.js'
  export default {
    name: '',
    data() {
      return {
        date: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
        chooseval: '',
        id: 'tool' + Math.floor(Math.random() * 100)
      }
    },
    methods: {
      click(val) {
        this.chooseval = val
        Bus.$emit(this.id, val)
      }
    },
    mounted() {
      console.log('DSAD')
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
.abc{
  color:red
}
</style>
