<template>
  <div class="lonin-container">
<el-form ref="form" :model="user" class="login-form">
  <el-form-item >
    <img src="./student.png" alt="" class="img">
  </el-form-item>

  <el-form-item >
    <el-input v-model="user.mobile" placeholder="请输入注册账号(建议三位数)"></el-input>
  </el-form-item>
   <el-form-item >
    <el-input v-model="user.name" placeholder="请输入注册姓名"></el-input>
  </el-form-item>
   <el-form-item >
    <el-input v-model="user.age" placeholder="请输入注册年龄"></el-input>
  </el-form-item>
  <el-form-item >
    <el-input v-model="user.code" show-password placeholder="请输入注册密码"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onlogin"  :plain="true" >注册</el-button>
  </el-form-item>
</el-form>  
  </div>
</template>

<script>
import { request }from '../../utils/requset'
export default {
    name:'LoginIndex',
    data() {
      return {
        user: {
          name:'',
          age:'',
          mobile:'',
          code:'',
        },
        checked:true,
        date:null,
        oldinfo:null
      }
    },
    methods: {
      onlogin() {
        if(this.user.mobile == '' || this.user.code == '' || this.user.name == '' || this.user.age == '') {
          alert('参数错误')
        }else {
        var flag = true
        for(var i = 0;i<this.oldinfo.length;i++) {
         if(this.user.mobile == this.oldinfo[i].studentid) {
            alert('注册账号已存在请重新填写')
            flag=false
            break
          }else {
            flag=true
          }
        }
        if(flag) {
          request({
          url:'/onlogin',
          params:{
          mobile: this.user.mobile,
          code:this.user.code,
          name:this.user.name,
          age:this.user.age
          }
        })
        this.$router.go(-1)
        this.$message({
            message: '注册成功',
          type: 'success'
        })
        }
      }
        }
       
      // 通过数据库返回的数据进行密码校验
      // checkPassword() {
      //   if(this.user.mobile == '' || this.user.code == '') {
      //     alert('信息不完整')
      //   }else {
      //     for(var i = 0;i<this.studentInfo.length;i++) {
      //     if(this.user.mobile == this.studentInfo[i].studentid && this.user.code == this.studentInfo[i].studentpassword) {
      //      this.$router.push('layout')
      //       this.$message({
      //       message: '登录成功',
      //     type: 'success'
      //     })
      //   break
      //   }else{
      //     console.log(this.studentInfo);
      //   this.$message({
      //     message: '密码错误',
      //     type: 'fail'
      //   })
      //   }
      //   break;
      //  }
      //   }
      // },
    },
    created() {
      // console.log(11);
       request({
          url:''
        }).then(data => {
          console.log(data);
          this.oldinfo = data.data
          console.log(this.oldinfo);
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