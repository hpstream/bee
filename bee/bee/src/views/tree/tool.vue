<template>
  <div class="app-container">
    <el-input v-model="inputss" placeholder="请输入内容"
    @focus="focus"
    @blur ='blur'
    ></el-input>
  </div>
</template>

<script>
  import Vue from 'vue'
  import date from './date.js'
  import Bus from './event.js'
  export default {
    name: 'HpTool',
    props: ['inputs'],
    data() {
      return {
        isflag: true,
        id: '',
        inputss: ''
      }
    },
    methods: {
      focus(e) {
        this.install(e)
        if (this.component) {
          this.component.$el.style.display = 'block'
        }
      },
      blur() {
        console.log('失去焦点')
        setTimeout(() => {
          this.component.$el.style.display = 'none'
        }, 250)
      },
      install() {
        if (this.isflag) {
          this.isflag = false
          var Date = Vue.extend(date)
          var component = new Date({}).$mount()
          // component.$el.addEventListener('click', function(e) {
          //   console.log(this)
          //   console.log(e)
          // })
          this.id = component.id
          this.component = component
          Bus.$on(this.id, (val) => {
            this.inputss = val
          })
          document.querySelector('body').appendChild(component.$el)
        }
      }
    },
    components: {},
    beforeMount() {
    },
    mounted() {
    }
  }
</script>

