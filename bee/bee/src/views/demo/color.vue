<template>
  <div class="color p2 bg-white">
    <div class="p2 bd-bottom color-border">常用字体颜色</div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="m1 pt1 color-title">标题及重要文字</div>
        <div class="m1 p2 color-title" style="">.color-title</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 color-text">正文</div>
        <div class="m1 p2 color-text" style="">.color-text</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 color-subTitle" >次级文字，默认图标按钮颜色</div>
        <div class="m1 p2 color-subTitle" style="">.color-subTitle</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 color-placeholder">输入框提示文字</div>
        <div class="m1 p2 color-placeholder" style="">.color-placeholder</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 color-forbid">失效置灰颜色</div>
        <div class="m1 p2 color-forbid" style="">.color-forbid</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 ">白色</div>
        <div class="m1 p2  bg-gray color-white" style="">.color-white</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 ">red</div>
        <div class="m1 p2   color-red" style="">.color-red</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 ">yellow</div>
        <div class="m1 p2   color-yellow" style="">.color-yellow</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 ">gray</div>
        <div class="m1 p2   color-gray" style="">.color-gray</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 ">gray</div>
        <div class="m1 p2   color-green" style="">.color-green</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 pt1 ">a标签链接颜色(放在a标签上面)</div>
        <div class="m1 p2 " style=""><a href="javascrpt:;" class='color-link'>.color-link</a></div>
      </el-col>
    </el-row>
    <div class="p2 bd-bottom color-border">分割线与边框线颜色</div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="m1 p2 color-border bd" style="">.color-border</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 p2 color-divider bd" style="">.color-divider</div>
      </el-col>
    </el-row>
    <div class="p2 bd-bottom color-border">常用背景颜色</div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="m1 p2 bd color-border bg" style="">.bg</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 p2 bd color-border bg-white" style="">.bg-white</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 p2 bd color-border bg-red" style="">.bg-red</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 p2 bd color-border bg-yellow" style="">.bg-yellow</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 p2 bd color-border bg-gray" style="">.bg-gray</div>
      </el-col>
      <el-col :span="4">
        <div class="m1 p2 bd color-border bg-green" style="">.bg-green</div>
      </el-col>
    </el-row>
    <div class="p2 bd-bottom color-border">按钮的五种颜色</div>
    <el-row :gutter="20" class="p2 color-white">
      <el-col :span="4">
        <div class="  color-black0" style="">正常：</div>
      </el-col>
      <el-col :span="4">
        <div class="btn btn-default color-black0" style="">btn btn-default</div>
      </el-col>
      <el-col :span="4">
        <div class="bd color-border btn btn-primary" style="">btn btn-primary</div>
      </el-col>
      <el-col :span="4">
        <div class="bd color-border btn btn-success" style="">btn btn-success</div>
      </el-col>
      <el-col :span="4">
        <div class="bd color-border btn btn-warning" style="">btn btn-warning</div>
      </el-col>
      <el-col :span="4">
        <div class="bd color-border btn btn-danger" style="">btn btn-danger</div>
      </el-col>
      
      <el-col :span="4" class="mt2">
        <div class="  color-black0 " style="">禁用：</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class=" btn btn-default color-black0 disabled" style="">btn btn-default</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="bd color-border btn btn-primary disabled" style="">btn btn-primary</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class=" bd color-border btn btn-success disabled" style="">btn btn-success</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class=" bd color-border btn btn-warning disabled" style="">btn btn-warning</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="bd color-border btn btn-danger disabled" style="">btn btn-danger</div>
      </el-col>
      
      <el-col :span="4" class="mt2">
        <div class="  color-black0 " style="">超小按钮：</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class=" btn-xs btn-default color-black0 " style="">btn-xs btn-default</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-xs btn-primary " style="">btn-xs btn-primary</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-xs btn-success " style="">btn-xs btn-success</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-xs btn-warning " style="">btn-xs btn-warning</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-xs btn-danger " style="">btn-xs btn-danger</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="  color-black0 " style="">小按钮：</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class=" btn-sm btn-default color-black0 " style="">btn-sm btn-default</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-sm btn-primary " style="">btn-sm btn-primary</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-sm btn-success " style="">btn-sm btn-success</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-sm btn-warning " style="">btn-sm btn-warning</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-sm btn-danger " style="">btn-sm btn-danger</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="  color-black0 " style="">大按钮：</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class=" btn-lg btn-default color-black0 " style="">btn-lg btn-default</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-lg btn-primary " style="">btn-lg btn-primary</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-lg btn-success " style="">btn-lg btn-success</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-lg btn-warning " style="">btn-lg btn-warning</div>
      </el-col>
      <el-col :span="4" class="mt2">
        <div class="btn-lg btn-danger " style="">btn-lg btn-danger</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
