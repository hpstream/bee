<template>
  <div class="bg-white p2">
    <el-button
      type="primary"
      plain
      @click="$router.push('/demo/css/b')"
      size="mini"
      class="mb2"
    >
    点击跳转子路由2
    </el-button>
    <router-view></router-view>
    <div class="h18 p2  bg-white bd color-border">编码规范</div>
    <pre class="line-height-4" >
          1.文件夹与文件命名   ====> 采用小驼峰的命名方式。 例如： errorPage  第一个单词小写，后面的单词大写
          2.css中class命名    ====> 采用中划线的命名方式 。 .align-top{ vertical-align: top }
          3.vuex的mutations小驼峰命名方式  例如：setCode
          4.vuex的actions 采用大驼峰的命名方式 例如：GetOptions
          5.vuex的state采用小驼峰的命名方式 例如：setCode
          6.js中的属性和方法 小驼峰的命名方法，和文件命名方式相同 。例如：applyingData
          7.常量采用全大写的方式 例如：SET_CODE
      </pre>
    <div class="h18 p2 bg-white bd color-border">注意事项</div>
    <pre class="line-height-4">
          在views下创建文件夹，不允许创建index.vue文件。需要根据业务需求创建对应的名称。
    </pre>
    <div class="h18 p2 bg-white bd color-border">css的基本用法</div>
    <div>
      <div class="py1 px4 bg-white bold py2">(vertical-align使用)</div>
      <el-row class="">
        <el-col :span="12">
          <div class="table">
            <div class="table-cell"><h1>Hamburger</h1></div>
            <div class="table-cell align-baseline">.align-baseline</div>
            <div class="table-cell align-top">.align-top</div>
            <div class="table-cell align-middle">.align-middle</div>
            <div class="table-cell align-bottom">.align-bottom</div>
          </div>
        </el-col>
        <el-col :span="12">
          <pre v-text="verticalAlign"></pre>
        </el-col>
      </el-row>
    </div>
    <div>
      <div class="py1 px4 bg-white bold py2">(border的使用 border在class中，简写成bd)边框的颜色现在有两种（color-border->边框下颜色，color-divider->分割线颜色）</div>
      <el-row class="">
        <el-col :span="12">
          <div class="table">
            <div class="p1 m1 bd color-border">.bd</div>
            <div class="p1 m1 bd-top color-border">.bd-top</div>
            <div class="p1 m1 bd-right color-border">.bd-right</div>
            <div class="p1 m1 bd-bottom color-border">.bd-bottom</div>
            <div class="p1 m1 bd-left color-border">.bd-left</div>
            <div class="p1 m1 bd-dashed color-border">.bd</div>
            <div class="p1 m1 bd-dashed-top color-border">.bd-top</div>
            <div class="p1 m1 bd-dashed-right color-border">.bd-right</div>
            <div class="p1 m1 bd-dashed-bottom color-border">.bd-bottom</div>
            <div class="p1 m1 bd-dashed-left color-border">.bd-left</div>
          </div>
        </el-col>
        <el-col :span="12">
          <pre v-text="border" style="line-height: 36px"></pre>
        </el-col>
      </el-row>
    </div>
    <div>
      <div class="py1 px4 bg-white bold py2">display使用</div>
      <el-row class="">
        <el-col :span="12">
          <pre v-text="display" style="line-height: 36px"></pre>
        </el-col>
      </el-row>
    </div>
    <div>
      <div class="py1 px4 bg-white bold py2">overflow的使用</div>
      <el-row class="">
        <el-col :span="12">
          <pre  style="line-height: 36px">
              .hidden { overflow: hidden }
              .hiddenX { overflow-x: hidden }
              .hiddenY { overflow-y: hidden }
              .scrollY { overflow-y: scroll }
              .scrollX { overflow-x: scroll }
              .scroll { overflow: scroll }
              .auto   { overflow: auto }
              .autoY   { overflow-y: auto }
              .autoX   { overflow-x: auto }
              .f-left  { float: left }
              .f-right { float: right }
              清楚浮动使用  .clearfix
          </pre>
        </el-col>
      </el-row>
    </div>
  
    <div>
      <div class="py1 px4 bg-white bold py2">margin与padding的使用(margin以开头，padding以p开头)</div>
      <el-row class="">
        <el-col :span="24">
          <table class="mb2 table-flush table-light center">
            <thead>
            <tr> <th>Shorthand</th> <th>Description</th> </tr>
            </thead>
            <tbody>
            <tr> <td>m</td> <td>Margin</td> </tr>
            <tr> <td>t</td> <td>Top</td> </tr>
            <tr> <td>r</td> <td>Right</td> </tr>
            <tr> <td>b</td> <td>Bottom</td> </tr>
            <tr> <td>l</td> <td>Left</td> </tr>
            <tr> <td>x</td> <td>X-axis (left and right)</td> </tr>
            <tr> <td>y</td> <td>Y-axis (top and bottom)</td> </tr>
            <tr> <td>n</td> <td>Negative</td> </tr>
            <tr> <td>0</td> <td>0 reset</td> </tr>
            <tr> <td>1</td> <td>--space-1 (default .5rem)</td> </tr>
            <tr> <td>2</td> <td>--space-2 (default 1rem)</td> </tr>
            <tr> <td>3</td> <td>--space-3 (default 2rem)</td> </tr>
            <tr> <td>4</td> <td>--space-4 (default 4rem)</td> </tr>
            </tbody>
          </table>
        </el-col>
        <el-col :span="12">
          <pre  style="">
  .m0  { margin:        0 }
  .mt0 { margin-top:    0 }
  .mr0 { margin-right:  0 }
  .mb0 { margin-bottom: 0 }
  .ml0 { margin-left:   0 }
  .mx0 { margin-left:   0; margin-right:  0 }
  .my0 { margin-top:    0; margin-bottom: 0 }
  
  .m1  { margin:        var(--space-1) }
  .mt1 { margin-top:    var(--space-1) }
  .mr1 { margin-right:  var(--space-1) }
  .mb1 { margin-bottom: var(--space-1) }
  .ml1 { margin-left:   var(--space-1) }
  .mx1 { margin-left:   var(--space-1); margin-right:  var(--space-1) }
  .my1 { margin-top:    var(--space-1); margin-bottom: var(--space-1) }
  
  .m2  { margin:        var(--space-2) }
  .mt2 { margin-top:    var(--space-2) }
  .mr2 { margin-right:  var(--space-2) }
  .mb2 { margin-bottom: var(--space-2) }
  .ml2 { margin-left:   var(--space-2) }
  .mx2 { margin-left:   var(--space-2); margin-right:  var(--space-2) }
  .my2 { margin-top:    var(--space-2); margin-bottom: var(--space-2) }
          </pre>
        </el-col>
        <el-col :span="12">
          <pre>
  .m3  { margin:        var(--space-3) }
  .mt3 { margin-top:    var(--space-3) }
  .mr3 { margin-right:  var(--space-3) }
  .mb3 { margin-bottom: var(--space-3) }
  .ml3 { margin-left:   var(--space-3) }
  .mx3 { margin-left:   var(--space-3); margin-right:  var(--space-3) }
  .my3 { margin-top:    var(--space-3); margin-bottom: var(--space-3) }
  
  .m4  { margin:        var(--space-4) }
  .mt4 { margin-top:    var(--space-4) }
  .mr4 { margin-right:  var(--space-4) }
  .mb4 { margin-bottom: var(--space-4) }
  .ml4 { margin-left:   var(--space-4) }
  .mx4 { margin-left:   var(--space-4); margin-right:  var(--space-4) }
  .my4 { margin-top:    var(--space-4); margin-bottom: var(--space-4) }
  
  .mxn1 { margin-left: -var(--space-1); margin-right: -var(--space-1); }
  .mxn2 { margin-left: -var(--space-2); margin-right: -var(--space-2); }
  .mxn3 { margin-left: -var(--space-3); margin-right: -var(--space-3); }
  .mxn4 { margin-left: -var(--space-4); margin-right: -var(--space-4); }
  
  .ml-auto { margin-left: auto }
  .mr-auto { margin-right: auto }
  .mx-auto { margin-left: auto; margin-right: auto; }
          </pre>
        </el-col>
      </el-row>
    </div>
    <div >
      <div class="py1 px4 bg-white bold py2">position的使用</div>
      <el-row>
        <el-col :span="24">
          <pre>
            .relative { position: relative }
            .absolute { position: absolute }
            .fixed    { position: fixed }
            
            .top-0    { top: 0 }
            .right-0  { right: 0 }
            .bottom-0 { bottom: 0 }
            .left-0   { left: 0 }
            
            .z1 { z-index: var(--z1) }
            .z2 { z-index: var(--z2) }
            .z3 { z-index: var(--z3) }
            .z4 { z-index: var(--z4) }
          </pre>
        </el-col>
      </el-row>
    </div>
    <div>
      <div class="py1 px4 bg-white bold py2">font-size字体大小（h12代表font-size:12px）</div>
      <el-row>
        <el-col :span="24">
          <pre>
          .h24 { font-size: var(--h24) }
          .h22 { font-size: var(--h22) }
          .h20 { font-size: var(--h20) }
          .h18 { font-size: var(--h18) }
          .h16 { font-size: var(--h16) }
          .h14 { font-size: var(--h14) }
          .h12 { font-size: var(--h12) }
          
          .h28 { font-size: var(--h28) }
          .h32 { font-size: var(--h32) }
          .h36 { font-size: var(--h36) }
          .h40 { font-size: var(--h40) }
          .h48 { font-size: var(--h40) }
          </pre>
        </el-col>
      </el-row>
    </div>
    <div>
    
      <el-row class='flex' :gutter="20">
        <el-col :span="12">
          <div class="py1 px4 bg-white bold py2">常用属性</div>
          <pre class='full-height'>
          .bold    { font-weight: var(--bold-font-weight, bold) }
          .regular { font-weight: normal }
          .italic  { font-style: italic }
          .caps    { text-transform: uppercase; letter-spacing: var(--caps-letter-spacing); }
          
          .left-align   { text-align: left }
          .center       { text-align: center }
          .right-align  { text-align: right }
          .justify      { text-align: justify }
          
          .nowrap { white-space: nowrap }
          .break-word { word-wrap: break-word }
          
          .line-height-1 { line-height: var(--line-height-1) }
          .line-height-2 { line-height: var(--line-height-2) }
          .line-height-3 { line-height: var(--line-height-3) }
          .line-height-4 { line-height: var(--line-height-4) }
          
          .list-style-none { list-style: none }
          .underline { text-decoration: underline }
          
          //单行折行隐藏
          .dot-hidden {
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          </pre>
        </el-col>
          <el-col :span="12" class='hidden'>
            <div class="py1 px4 bg-white bold py2">表单输入框的使用方式</div>
          <pre class='full-height' v-text='form'>
          
          </pre>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
var data = {
  verticalAlign: `
          <div class="align-baseline ">align-baseline</div>
          <div class="align-top ">align-baseline</div>
          <div class="align-middle">align-baseline</div>
          <div class="align-bottom ">align-baseline</div> `,
  border: `
        <div class="p1 m1 bd color-border">.bd</div>
        <div class="p1 m1 bd-top color-divider">.bd-top</div>
        <div class="p1 m1 bd-right color-border">.bd-right</div>
        <div class="p1 m1 bd-bottom color-border">.bd-bottom</div>
        <div class="p1 m1 bd-left color-border">.bd-left</div>
        <div class="p1 m1 bd color-border">.bd</div>
        <div class="p1 m1 bd-dashed-top color-divider">.bd-top</div>
        <div class="p1 m1 bd-dashed-right color-border">.bd-right</div>
        <div class="p1 m1 bd-dashed-bottom color-border">.bd-bottom</div>
        <div class="p1 m1 bd-dashed-left color-border">.bd-left</div> `,
  display: `
            <div class="p1 m1 hide">display: none </div>
            <div class="p1 m1 visible">visibility: hidden;</div>
            <div class="p1 m1 animate-hide">.animate-hide</div>
            <div class="p1 m1 inline">display: inline </div>
            <div class="p1 m1 block">display: block</div>
            <div class="p1 m1 inline-block">display: inline-block</div>
            <div class="p1 m1 table">display: table </div>
            <div class="p1 m1 table-cell">display: table-cell</div>`,
  form: ` 表单使用方式
            .full {
              width: 100%
            }
            .full-height {
              height: 100%
            }
            .except-w2-full {
              padding-left: var(--space-3); //两个字
              width: 100%;
            }
            .except-w3-full {
              padding-left: var(--space-4); //三个字
              width: 100%;
            }
            .except-w4-full {
              padding-left: var(--space-5); //四三个字
              width: 100%;
            }
            .except-w5-full {
              padding-left: var(--space-6);//五个字
              width: 100%;
            }
            .except-w6-full {
              padding-left: var(--space-7);//六个字
              width: 100%;
            }
            =======================================================
           代码示例:
            <div>
                <div class='absolute pr1 py1'>服务名称:</div>
                <div class=except-w4-full>
                  <el-input class='full' placeholder='请输入服务名称'></el-input>
                </div>
            </div>`
}
export default {
  name: '',
  data() {
    return data
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
 
  pre{
    margin: 0;
    border: 1px solid #e6ebf5;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    color: #2d2f33;
  }
</style>
