<template>
  <div class = "app-container code-standard">
    <el-card class="box-card">
      <el-card class="demo-contents fixed">
        <ul class="demo-contents-list">
          <li><a href="#terminology">1. 项目结构 </a></li>
          <li><a href="#check">2. 代码检查 </a></li>
          <li><a href="#name">3. 命名规范</a></li>
          <li><a href="#vue">4. Vue使用规范 </a></li>
          <li><a href="#css">5. CSS规范  </a></li>
          <li><a href="#comment">6. 注释规范  </a></li>
          <li><a href="#debug">7. 代码调试与异常</a></li>
          <li><a href="#permission">8. 权限控制 </a></li>
        </ul>
      </el-card>
      <p  v-html="markdownStr"></p>
    </el-card>
  </div>
</template>

<script>
  // import fd from '@/api/simple'
  import { mapGetters, mapMutations } from 'vuex'
  import marked from 'marked'
  import str from './standardMarkdown'
  export default {
    components: {
    },
    data() {
      return {
        fullName: 'Kobe Bryant',
        inputValue: '示例',
        markdownStr: ''
      }
    },
    props: { // Prop 定义尽量详细
      status: {
        type: String,
        required: false,
        validator: function(value) {
          return [
            'syncing',
            'synced',
            'version-conflict',
            'error'
          ].indexOf(value) !== -1
        }
      }
    },
    mounted() {
      this.translateMDtoHTML()
      this.testGlobalVariable()
    },
    computed: {
      ...mapGetters([
        'globals'
      ]),
      normalizedFullName: function() {
        return this.fullName.split(' ').map(function(word) {
          return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
      }
    },
    methods: {
      ...mapMutations({
        setGlobalVariable: 'SET_GLOBALSVARIABLE'
      }),
      translateMDtoHTML() {
        this.markdownStr = marked(str)
      },
      testGlobalVariable() {
        console.log(`全局变量 ${this.globals.globalsVariable}`)
        this.setGlobalVariable(Math.random())
        console.log(`全局变量更改后 ${this.globals.globalsVariable}`)
      }
    }
  }
</script>

<style lang="scss">
/* 使用scoped特性, 使样式模块化 */
.code-standard {
  a {
    color: #409EFF;
  }
  .demo-contents-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
.demo-contents {
  right: 30px;
  top: 86px;
}
</style>

