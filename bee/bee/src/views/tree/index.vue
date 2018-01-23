<template>
  <div class="app-container">
    <hp-tool :inputs='input'></hp-tool> 
    <hp-tool :inputs='input1'></hp-tool> 
  </div>
</template>

<script>
 import HpTool from './tool'
export default {
   data() {
     return {
       input: '',
       input1: ''
     }
   },
   methods: {
   },
   components: { HpTool },
   beforeMount() {
   },
   mounted() {
 
   }
 }
</script>

