<template>
  <div class = "app-container">

  </div>
</template>

<script>
  import { getData } from '@/api/simple'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: '',
    components: {
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'globals'
      ])
    },
    mounted() {
      console.log(`全局变量 ${this.globals.globalsVariable}`)
      this.setGlobalVariable(Math.random())
      console.log(`全局变量更改后 ${this.globals.globalsVariable}`)
    },
    methods: {
      ...mapMutations({
        setGlobalVariable: 'SET_GLOBALSVARIABLE'
      }),
      getData() {
        getData.then(response => {
          const data = response.data
          console.log('data', data)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
</style>

