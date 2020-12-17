<template>
  <div class="lonin-container">
<el-form ref="form" :model="user" class="login-form">
  <el-form-item >
    <img src="./logo_index.png" alt="" class="img">
  </el-form-item>

  <el-form-item >
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item >
    <el-input v-model="user.code" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item >
    <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="login-btn" :plain="true" :loading="loading">登录</el-button>
  </el-form-item>
  <!-- <el-button :plain="true" >打开消息提示</el-button> -->
</el-form>  
  </div>
</template>

<script>
import request from '../../utils/requset'
export default {
    name:'LoginIndex',
    data() {
      return {
        user: {
          mobile:'',
          code:''
        },
        checked:true,
        loading:false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')

        this.$message({
          message: '登录成功',
          type: 'success'
        })

        this.loading = true
        setTimeout(() => {
          this.loading = false
        },1000)

        this.$router.push('layout')
      }
    }
}
</script>

<style scoped lang="less">
    .lonin-container {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('./login_bg.jpg');
        background-size: cover;
    }
    .login-form {
        background-color: #fff;
        padding: 50px;
        min-width: 300px;
    }
    .login-btn {
        width: 100%;
    }
    .img {
        width: 100%;
        height: 60px;
    }
</style>