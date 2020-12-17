<template>
<div>
      <el-col :span="12">
    <el-menu
      default-active="layout"
      class="el-menu-vertical-demo"
      background-color="#002033"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <img src="../logo_index.png" alt="" class="img">
      <el-menu-item index="layout">
        <i class="iconfont iconshouye"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="content">
       <i class="iconfont iconneirongguanli"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
       <el-menu-item index="sucai">
       <i class="iconfont iconimage"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="article">
       <i class="iconfont iconwenzhang"></i>
        <span slot="title">发布文章</span>
      </el-menu-item> 
      <el-menu-item index="commen">
       <i class="iconfont iconxiaoxi"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="public">
        <i class="iconfont iconfensiguanli"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="profile">
        <i class="iconfont el-icon-setting"></i> 
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</div>
</template>

<script>
export default {
    name:'aside',
     methods: {
     
    }
}
</script>

<style lang="less" scoped>
.img {
  margin-top: 8px;
  margin-left: 10px;
  width: 172px;
  height: 34px;
}
.el-menu-vertical-demo {
  border-right: 1px solid black;
  width: 199px;
  height: 647px;
}
.iconfont {
  margin-right: 5px;
  margin-left: 5px;
}
</style>