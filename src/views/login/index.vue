<template>
  <div class="lonin-container">
<el-form ref="form" :model="user" class="login-form">
  <el-form-item >
    <img src="./student.png" alt="" class="img">
  </el-form-item>

  <el-form-item >
    <el-input v-model="user.mobile" placeholder="请输入账号"></el-input>
  </el-form-item>
  <el-form-item >
    <el-input v-model="user.code" show-password placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item >
     <el-radio v-model="radio" label="1">学生端</el-radio>
    <el-radio v-model="radio" label="2">管理员</el-radio>
    <!-- <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox> -->
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="login-btn" :plain="true" :loading="loading">登录</el-button>
    <el-button type="primary" @click="onlogin"  :plain="true" :loading="loading" >没有账号?去注册</el-button>
  </el-form-item>
  <!-- <el-button :plain="true" >打开消息提示</el-button> -->
</el-form>  
  </div>
</template>

<script>
import { request }from '../../utils/requset'
// import request from '../../utils/requset'
export default {
    name:'LoginIndex',
    data() {
      return {
        user: {
          mobile:'',
          code:'',
        },
        checked:true,
        loading:false,
        radio:'1',
        studentInfo:'null',
        adsInfo:'null'
      }
    },
    methods: {
      onSubmit() {
        // 此时调用密码教研方法
        if(this.radio == '1') {
           this.checkPassword()
        }
        if(this.radio == '2'){
          this.acheckPassword()
        }
        this.loading = true

        setTimeout(() => {
          this.loading = false
        },1000)
      },
      // 通过数据库返回的数据进行密码校验
      checkPassword() {
        if(this.user.mobile == '' || this.user.code == '') {
          alert('信息不完整')
        }else {
          for(var i = 0;i<this.studentInfo.length+1;i++) {
          if(this.user.mobile*1 == this.studentInfo[i].studentid*1 && this.user.code*1 == this.studentInfo[i].studentpassword*1) {
            console.log(11);
            var id = this.user.mobile
            this.$router.push('layout/'+id)
            this.$message({
            message: '登录成功',
          type: 'success'
          })
          break
        }else{
       if(i == 0) {
          this.$message({
          message: '密码错误',
          type: 'fail'
        })
       }
        }
       }
        }
      },
       acheckPassword() {
        if(this.user.mobile == '' || this.user.code == '') {
          alert('信息不完整')   
        }else {
         console.log( this.user.mobile*1 == this.adsInfo[0].admid*1);
         console.log(this.user.code*1 == this.adsInfo[0].admpassword*1);
          for(var i = 0;i<this.adsInfo.length+1;i++) {
          if(this.user.mobile*1 == this.adsInfo[i].admid*1 && this.user.code*1 == this.adsInfo[i].admpassword*1) {
            console.log(11);
            var id = this.user.mobile
            this.$router.push('layout/'+id)
            this.$message({
            message: '登录成功',
          type: 'success'
          })
          break
        }else{
       if(i == 0) {
          this.$message({
          message: '密码错误',
          type: 'fail'
        })
       }
        }
       }
        }
      },
      onlogin() {
        if(this.radio == 1) {
           this.$router.push("onlogin")
        }else {
          alert('不可以注册管理员哦')
        }
       
      }
    },
    created() {
      request({
          url:''
        }).then(data => {
          console.log(data);
          this.studentInfo = data.data
          console.log(this.studentInfo);
      }),
      request({
          url:'/ads'
        }).then(data => {
          console.log(data);
          this.adsInfo = data.data
          console.log(this.adsInfo);
      })
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
        margin-bottom: 10px;
    }
    .img {
        width: 259px;
        height: 60px;
    }
    .el-button + .el-button {
      width: 100%;
      margin-left: 0;
    }
</style>