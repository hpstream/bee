<template>
  <div class="app-container">
    <hp-tool :inputs='input'></hp-tool> 
    <hp-tool :inputs='input1'></hp-tool> 

    <div class="water p2" :class="{myshow:isshow}" @click='click'>sd</div>    
  </div>
</template>

<script>
 import HpTool from './tool'
export default {
   data() {
     return {
       input: '',
       input1: '',
       isshow: true
     }
   },
   methods: {
     click() {
       this.isshow = true
       setTimeout(() => {
         this.isshow = false
       }, 2000)
     }
   },
   components: { HpTool },
   beforeMount() {
   },
   mounted() {
 
   }
 }
</script>
<style lang='scss' scoped>
 .water{
    position: relative;
    display: inline-block;
    background-color: pink; 
    border-radius: 50%;
    overflow: hidden;
 }
 .myshow{
   color:white;
 }
  .myshow:after {
    transition: all 0.5s;
    content: "";
    position: absolute;
    background:radial-gradient(rgba(0,0,0,0));/* Safari 5.1 - 6.0 */
    width: 50px;
    height: 50px;
  }

 .myshow:hover:after {
    content: "";
    transform-origin: center ;
    position: absolute;
    transform:scale(5,5);
    background:radial-gradient(rgba(0,0,0,0),rgb(212, 207, 214));/* Safari 5.1 - 6.0 */
    left: 0;
    top: 0;
  }

</style>


