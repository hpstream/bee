const markdownStr = `
<a name="terminology"> </a>

### 1. 项目结构
<a href="https://github.com/WeideMo/vuecli-webpack-configs" target="_blank">vue-cli webpack 配置说明</a>
\`\`\`
├── build // vue-cli 配置文件
├── config  // vue-cli 配置文件 
├── node_modules // 模块依赖
├── src
│   ├── App.vue  // 入口组件
│   ├── main.js  // 入口文件配置
│   ├── permission.js  // 全局权限控制
│   ├── api  // api接口统一管理
│   │   ├── login.js
│   │   ├── selectOption.js
│   │   ├── simple.js
│   │   └── table.js
│   │   └── .......
│   ├── assets // 图片静态资源
│   │   ├── 401_images
│   │   └── 404_images
│   ├── components // 业务组件
│   ├── filters // 数据转换函数
│   ├── icons // 图标icons
│   ├── mock // mock模拟数据
│   ├── permission // 用户权限控制
│   ├── router // 前端路由管理
│   ├── store // 数据状态管理
│   ├── styles // sass 样式
│   │   ├── modules // 分模块管理样式
│   │   ├── commen.scss  // 通用样式统一管理
│   │   ├── element-ui.scss  // element-ui 样式覆盖
│   │   ├── index.scss  // scss 入口
│   │   ├── mixin.scss  // 菜单
│   │   ├── transition.scss  // 全局动画
│   │   ├── variables.scss  // 变量声明
│   ├── utils // 通用工具函数
│   ├── views // 视图模块
│   │   ├── login // 登录
│   │   ├── tree  // 菜单
│   │   └── ....
├── static // 项目答疑与总结 
├── .babelrc // ES6转义配置
├── .editorconfig // 项目缩进配置
├── .eslintignore // eslint忽略目录
├── .eslintrc.js // eslint代码规范 
├── .gitignore // git忽略目录
├── .postcssrc.js // postcss配置
├── index.html // 入口html
├── README.md // 项目说明
├── package.json // 项目依赖表
\`\`\`

<a name="check"> </a>
### 2. 代码检查
* base on  <a href="https://eslint.org/" target="_blank">ESlint</a>: recommended 标准添加了部分自定义规范
* 根目录下 eslint_tanslate.json 为配置说明
* 更改检查配置，应共同商议后决定 。

<a name ="name"> </a>
### 3. 命名规范

#### \`强制\` 文档目录全部以小驼峰命名 

### JavaScript 命名
#### \`强制\` 常量使用大写字符, 下划线连接
\`\`\`javascript
const SECONDS_IN_A_MINUTE = 60;
\`\`\`

#### \`强制\` 标准变量: 小驼峰
\`\`\`javascript
var myCount = 1;
\`\`\`

#### \`强制\` 构造函数: 驼峰且大写第一个字母
\`\`\`javascript
function Point(x, y) {
    this.x = x;
    this.y = y;
}
\`\`\`

#### \`建议\` 私有方法: 小驼峰且加\`_\`前缀
\`\`\`javascript
function MyClass() {
    var _privateNum;
    this.getNum = function() {
        return _privateNum;
    };
}
\`\`\`

#### \`建议\` 方法, 命名时 动词 + 名词 如 \`filterNodes\`

\`\`\`javascript
function filterNodes() {}
// 常见动词 
\`\`\`

#### \`建议\` 对布尔型的变量, 命名时加\`is\`,\`has\`,\`can\`前缀
\`\`\`javascript
var isDone = true;
\`\`\`

<a name="vue"> </a>
### 4. Vue使用规范
参考 <a href="https://cn.vuejs.org/v2/style-guide/" target="_blank">官方Vue风格指南</a>
#### Vue 属性书写顺序
\`\`\`javascript
export default {
  mixins,
  components,
  data,
  props,
  watch,
  hooks,
  computed,
  methods
}   
\`\`\`

#### 总是用 key 配合 v-for
\`\`\`javascript
<div  
  class="text item"
  v-for="o in 4" 
  :key="o" 
>
  {{'列表内容 ' + o }}
</div>
\`\`\`

#### 多个特性的元素应该分多行撰写，每个特性一行。
\`\`\`javascript
<input
  :tabindex="tabindex"
  v-if="type !== 'textarea'"
  class="el-input__inner"
  v-bind="$props"
  :autocomplete="autoComplete"
  :value="currentValue"
  ref="input"
  @input="handleInput"
  @focus="handleFocus"
  @blur="handleBlur"
  @change="handleChange"
  :aria-label="label"
>
\`\`\`


#### 模板中简单的表达式
\`\`\`javascript
// 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
<p>{{normalizedFullName}}</p>


// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
\`\`\`

#### Prop 定义
\`\`\`javascript
// Prop 定义应该尽量详细。
props: {
  status: String
}

props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
\`\`\`


#### 为组件样式设置作用域
\`\`\`javascript
<template>
  <button class="button button-close">X</button>
</template>
<!-- 使用 \`scoped\` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}
.button-close {
  background-color: red;
}
</style>
\`\`\`

<img src="https://ws4.sinaimg.cn/large/006tNc79gy1fna5m3v88mj30xc25s7fa.jpg" width=700>

<a name="css"> </a>
### 5. CSS 规范
#### 格式
* 使用 2 个空格作为缩进。 
* 类名建议使用破折号代替驼峰法。 如果使用 BEM， 也可以使用下划线。
* 不要使用 ID 选择器。 
* 在一个规则声明中应用了多个选择器时， 每个选择器独占一行。 
* 在规则声明的左大括号 \`{\` 前加上一个空格。
* 在属性的冒号 \`:\` 后面加上一个空格， 前面不加空格。
* 规则声明的右大括号 \`}\` 独占一行。
* 规则声明之间用空行分隔开。

#### 建议采用BEM命名法，采用\`-\` 中划线连接，状态使用\`_\`下划线连接。 参考地址 <a href="https://segmentfault.com/a/1190000000391762" target="_blank">BEM</a> 
\`\`\`html
<article class="listing-card listing-card-featured">
  <h1 class = "listing-card_title" > Adorable 2 BR in the sunny Mission </h1>
  <div class = "listing-card_content" >
    <p> Vestibulum id ligula porta felis euismod semper. </p> 
  </div>
</article>

.listing-card {}
.listing-card-featured {}
.listing-card_title {}
.listing-card_content {}

// .listing-card 是一个块（block），表示高层次的组件。
// .listing-card_title 是一个元素（ element）， 它属于.listing- card 的一部分， 因此块是由元素组成的。
// .listing card-featured 是一个修饰符（ modifier）， 表示这个块与.listing-card 有着不同的状态或者变化。

\`\`\`

#### 建议 sass 结合 BEM 写法 
\`\`\`html
<form class="site-search  site-search-full">
  <input type="text" class="site-search_field">
  <input type="Submit" value ="Search" class="site-search_button">
</form>

<style>
.site-search {
  font-size: 14px;
  &_field {
    color: #000;
  }
  &_button {
    color: #fff;
  }
}
</style>
\`\`\`

<a name="comment"> </a>
### 6. 注释规范
#### 单行注释
\`\`\`javascript
// 单独一行：//(双斜线)与注释文字之间保留一个空格
// 调用了一个函数；1)单独在一行
setTitle()
 
var maxCount = 10 // 设置最大量；2)在代码后面注释
 
// setName(); // 3)注释代码
\`\`\`

#### 多行注释
\`\`\`javascript
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
\`\`\`

#### 函数(方法)注释
\`\`\`javascript
/**
* 合并Grid的行
* @param {Grid} grid 需要合并的Grid
* @param {Array} cols 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
* @param {Boolean} isAllSome 是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
* @return void
* @author polk6 2015/07/21 
* @example
* _________________                             _________________
* |  年龄 |  姓名 |                               |  年龄 |  姓名 |
* -----------------      mergeCells(grid,[0])   -----------------
* |  18   |  张三 |              =>              |       |  张三 |
* -----------------                             -  18   ---------
* |  18   |  王五 |                              |       |  王五 |
* -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
\`\`\`

<a name="debug"></a>
### 7. 代码调试与异常
#### 7.1 开发时断点调试
vue-cli 采用的是webpack进行构建的，所以如果要进行断点调试的话，可设置devtool为source-map。
具体做法是：到/build目录下的webpack.dev.config.js 搜索devtool，将其设置为source-map

<img src="https://ws3.sinaimg.cn/large/006tNc79gy1fn4dwa09ulj30wl0ekdkm.jpg" width=700  />

完成配置后，跑node服务npm run dev ，然后就可以在chrome浏览器中进入开发者模式。搜索（ctrl + p）具体的vue组件进行断点调试。调试效果如下：
<img src="https://ws4.sinaimg.cn/large/006tNc79gy1fn4e30czo3j31bk172wrm.jpg" width=700  />

#### 67.2 vue状态管理调试，vue-devtool
chrome应用商店 [vue-devtool]([https://chrome.google.com/webstore/detail/vuejs-devtools/)

<img src="https://ws4.sinaimg.cn/large/006tNc79gy1fn4ec8n38ej31kw0roafs.jpg" width=700  />

#### 7.3 线上调试webpack打包后代码
* 生产环境使用source-map 模式  生成*.map文件
* 使用chrome 定位压缩后异常的代码
<img src="https://ws3.sinaimg.cn/large/006tNc79gy1fn4f15zwkmj31kw121n72.jpg" width=700  />

#### 7.4  线上调试数据及文件
* 使用 fiddler 或 charles
*  移动端可使用vconsole.js 方便调试

<a name="permission"> </a>
### 8. 权限控制
<img src="https://ws4.sinaimg.cn/large/006tNc79gy1fn8z91w3lbj30i90qyq47.jpg" width=700 />
1. 初始化一个只有登录路由的Vue实例
2. 根组件created钩子里将路由定向到登录页
3. 用户登录成功后前端拿到用户token
4. axios实例统一为请求headers添加{"Authorization":token} 实现用户鉴权，然后获取当前用户的权限数据，主要包括路由权限和资源权限
5. 动态添加路由，生成菜单，实现权限指令和全局权限验证方法，并为axios实例添加请求拦截器，至此完成权限控制初始化
6. 动态加载路由后，路由组件将随之加载并渲染，而后展现前端界面
7. 按钮级别的显示隐藏用自定义指令做
\`\`\`
<button v-permission="delete">删除</button>
\`\`\`
8. 项目模块打包，根据配置表使用node打包


`

export default markdownStr
