<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'ace-css/css/ace.min.css'
import './assets/styles/style.css'
import './assets/fonts/style.css'

// SweetAlert
require('sweetalert')
require('sweetalert/dist/sweetalert.css')

export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
