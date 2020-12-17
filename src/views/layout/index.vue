<template>
  <div class="layout-container">

    <el-container class="container">

      <el-aside width="200px" class="aside">
        <Aside> </Aside>
      </el-aside>

    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
      
  </div>
</template>

<script>
import Aside from './components/aside.vue'
import Header from './components/header.vue'

export default {
    name:'layoutcontainer',
    components:{
      Aside,
      Header
    }
}
</script>

<style lang="less" scoped>

.container {
 position: fixed;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
}
.aside {
  background-color: pink;
}
.header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  background-color: #ccc;
}
</style>

