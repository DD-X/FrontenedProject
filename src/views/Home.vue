<script setup>
import { ref,getCurrentInstance,onMounted} from 'vue'
//import axios from 'axios'

const {proxy} = getCurrentInstance() //拿到当前的api


const getImageUrl = (user)=>{
  return new URL(`../assets/images/${user}.png`,import.meta.url).href
}

//这个tableData是假数据，等会我们使用axios请求mock数据
const tableData = ref([
    {
      name: "Java",
      todayBuy: 100,
      monthBuy: 200,
      totalBuy: 300,
    },
    {
      name: "Python",
      todayBuy: 100,
      monthBuy: 200,
      totalBuy: 300,
    }
])

const tableLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})

// axios({
//   url:'/api/home/getTableData',
//   method:'get',
// }).then(res=>{
//   //console.log(res.data)
//   // 生成随机数据，拦截请求
//   if(res.data.code === 200){
//     console.log(res.data.data.tableData)
//     tableData.value = res.data.data.tableData
//   }
// })

const getTableData = ()=>{
  const data = proxy.$api.getTableData()
  console.log(data)
}
onMounted(()=>{
  getTableData()
})

</script>

<template>
  <el-row class = "home" :gutter = "20">
    <el-col :span="8" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user"/>
          <div class="user-info">
            <p class="user-info-admin">admin</p>
            <p class="user-info-p">superAdministors</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2024-06-30</span></p>
          <p>上次登录地点：<span>HZ</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" class="user-table">
        <el-table :data="tableData">
          <!-- //这里的key和label是自定义的属性，用来标识每一列的属性,渲染表格值 -->
          <el-table-column 
            v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>

        </el-table>
        
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
  .home{
    height:100%;
    overflow:hidden;
    .user{
      display:flex;
      align-items:center;
      border-bottom:1px solid #ccc;
      margin-bottom:20px;
      img{
        width:150px;
        height:150px;
        border-radius:50%;
        margin-right:40px;
      }
      .user-info{
        p{
          line-height:40px;
        }
        .user-info-p{
          color:#999;
        }
        .user-info-admin{
          font-size: 35px;
        }
      }
    }
    .login-info{
      p{
        line-height:30px;
        font-size:14px;
        color:#999;
        span{
          color:#666;
          margin-left:60px;
        }
      }
    }
    .user-table{
      margin-top:20px;
    }
  }
</style>
