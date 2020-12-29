<template>
      <el-col :span="12">
    <el-menu
    
      default-active="layout"
      class="el-menu-vertical-demo"
      text-color="#000"
      
      :collapse="iscollpace"
      active-text-color="#ffd04b">
      <!-- <img src="../logo_index.png" alt="" class="img"> -->
      <el-menu-item >
        <i class="iconfont iconshouye"></i>
        <span slot="title" >首页</span>
      </el-menu-item>
      <!-- <el-menu-item index="content">
       <i class="iconfont iconneirongguanli"></i>
        <span slot="title">信息管理</span>
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
      </el-menu-item> -->
    </el-menu>
  </el-col>
</template>

<script>
export default {
    name:'aside',
     methods: {
     
    },
    data() {
      return {
        iscollpace:false
      }
    },
    methods:{
     
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
  height: 646px;
  border-right: solid 0px #e6e6e6;
  // background-color: red;
  // width: 180%
}
.iconfont {
  margin-right: 5px;
  margin-left: 5px;
}
</style>