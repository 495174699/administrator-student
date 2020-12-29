<template>
  <div class="home-container">
      <table border="1" cellpadding="0" cellspacing="0">
       <caption>个人信息</caption>
        <tbody>
           <tr>
            <td>姓名</td>
            <td>学号</td>
            <td>年龄</td>
            <td v-if="id>300">分数</td>
            <td v-if="id<30">密码</td>
          </tr>
          <tr v-if="id>300">
            <td>{{info.studentname}}</td>
            <td>{{info.studentid}}</td>
            <td>{{info.studentage}}</td>
            <td>{{info.studentscore}}</td>
          </tr>
           <tr v-if="id<=30">
            <td>{{info.admid}}</td>
            <td>{{info.admname}}</td>
            <td>{{info.admage}}</td>
            <td>{{info.admpassword}}</td>
          </tr>
        </tbody>
      </table>
      <table border="1" cellpadding="0" cellspacing="0" v-if="id<30">
        <caption>学生信息</caption>
        <tbody>
           <tr>
            <td>姓名</td>
            <td>学号</td>
            <td>年龄</td>
            <td>分数</td>
            <td v-if="id<30">操作</td>
          </tr>
          <tr v-for="(item,i) in infos.data" :key="i">
            <td>{{item.studentname}}</td>
            <td>{{item.studentid}}</td>
            <td>{{item.studentage}}</td>
            <td>{{item.studentscore}}</td>
             <td><a href="javascript:;" @click="remove(i)">删除</a> <a href="javascript:;" @click="change(i)">修改成绩</a></td>
          </tr>
          </tbody>
      </table>
      <table v-if="id<30" border="1" cellpadding="0" cellspacing="0">
      <caption><h2>操作</h2></caption>
        <tbody>
          <tr>
            <td>姓名</td>
            <td>学号</td>
            <td>年龄</td>
            <td>分数</td>
            <td>密码</td>
            <td>操作</td>
          </tr>
          <tr>
            <td><input v-model="addInfo.name" type="text"></td>
            <td><input v-model="addInfo.id" type="text"></td>
            <td><input v-model="addInfo.age" type="text"></td>
            <td><input v-model="addInfo.score" type="text"></td>
            <td><input v-model="addInfo.password" type="text"></td>
            <td><a href="javascript:;" @click="insert">插入</a></td>
          </tr>
        </tbody>
      </table>
      <!-- <h1>{{infos}} sdfds</h1> -->
  </div>
</template>

<script>
import { request }from '../../utils/requset'
export default {
    name:'HomeIndex',
    data(){
     return {
       infos:null,
      message:'',
       addInfo:{
         name:'',
         id:'',
         age:'',
         score:'',
         password:'',
        
       }
     }
    },
    props:{
      info:{
        type:Object,
        default:{
          return:{}
        }
      },
      id:{
        type:Number
      }
    },
    methods:{
      insert() {
        console.log(11);
        request({
          url:'/addInfo',
          params:{
            name:this.addInfo.name,
            age:this.addInfo.age,
            id:this.addInfo.id,
            score:this.addInfo.score,
            password:this.addInfo.password
          }
        }).then((data) => {
          console.log(data);
          if(data.data == 0){
          alert('添加成功')
          this.addInfo.name=''
          this.addInfo.age=''
          this.addInfo.id=''
          this.addInfo.score=''
          this.addInfo.password=''
           this.$router.go(0)
          }
         
        })

      },
      remove(i) {
        console.log(i);
        console.log(this.infos.data);
        console.log(this.infos.data[2].studentid);
        request({
        url:'/remove',
        params:{
          id:this.infos.data[i].studentid
        }
      }).then(data => {
        console.log(data.data);
        if(data.data == 0) {
          alert('删除成功')
          this.$router.go(0)
        }
      })
      },
      change(i) {
        console.log(22);
        console.log(i);
       var score =  prompt('请输入你要修改的成绩:(0~100)')
      //  console.log(score.typeOf(Object));
       if(score>100 || score<0 || score == '') {
         alert('修改失败')
       }else {
        console.log(score);
         request({
        url:'/change',
        params:{
          id:this.infos.data[i].studentid,
          score:score
        }
      }).then(data => {
        console.log(data.data);
        if(data.data == 0) {
          alert('修改成功')
          this.$router.go(0)
        }
      })
       }
    
      }
    },
    created() {
       request({
        url:''
      }).then(data =>{
        this.infos = data
        console.log(this.infos);
      })
    }
}   
</script>

<style lang="less" scoped>
  table {
    width: 1200px;
    // height: 100px;
    margin-bottom: 20px;
  }
  table tr {
    height: 40px;
    text-align: center;
  }
 input {
    border: none;
    outline: none;
    width: 97%;
    height: 40px;
  margin: 0 1px;
  text-align: center;
  background-color: #ccc;
  }
</style>>

