<template>
  <div class="herder-container">
        <div>
            <i class="el-icon-s-fold" @click="iclick"></i>
            <span>学生成绩管理系统</span>
        </div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="./avatar.jpg" alt="">
            
            <i class="el-icon-arrow-down el-icon--right">系统</i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click="over">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<script>
// 取消浏览器后退
history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
        });
export default {
    name:'headercontainer',
    data() {
      return {

      }
    },
    methods:{
      handleCommand(command) {
        this.over()
      },
       over() {
        // this.$router.go(-1)
        location.href='http://localhost:8081/#/login'
        this.$message('已退出');
       }
    }
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