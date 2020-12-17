<template>
  <div class="herder-container">
        <div>
            <i class="el-icon-s-fold"></i>
            <span>黑马头条后台管理系统</span>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="./avatar.jpg" alt="">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<script>
export default {
    name:'headercontainer'
}   
</script>

<style scoped>
.herder-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-dropdown-link img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align:middle;
}
</style>