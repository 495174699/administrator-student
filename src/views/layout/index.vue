<template>
  <div class="layout-container">
    <el-container class="container">
      <el-aside width="auto"
       class="aside">
        <Aside> </Aside>
      </el-aside>
    <el-container>

      <el-header class="header">
        <Header></Header>
      </el-header>

      <el-main class="main">
        <!-- <router-view></router-view> -->
        <!-- <h1>11111</h1> -->
        <home :info="info" :id="id"></home>
      </el-main>

    </el-container>

    </el-container> 
  </div>
</template>

<script>
import { request } from '../../utils/requset'
import Aside from './components/aside.vue'
import Header from './components/header.vue'
import home from '../home/index'
export default {
    name:'layoutcontainer',
    components:{
      home,
      Aside,
      Header
    },
    data() {
      return {
        info:null,
        id:'',
        selfInfo:null
      }
    },
    created() {
      this.id = this.$route.path.substring(8)
      if(this.id > 300) {
         request({
        url:''
      }).then(data =>{
        for(var i = 0;i<data.data.length;i++) {
         if(this.id*1 == data.data[i].studentid) {
           this.info = data.data[i]
         }
        }
        console.log(this.info);
      })
      }else {
        request({
        url:'/ads'
      }).then(data =>{
        for(var i = 0;i<data.data.length;i++) {
         if(this.id*1 == data.data[i].admid) {
           this.info = data.data[i]
         }
        }
        console.log(this.info);
      })
      }
     
     
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
// .aside {
//   background-color: pink;
// }
.aside {
  width: auto;
  
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

