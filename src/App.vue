<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const goList = () => {
  router.push('/list')
  console.log(router, route)
}
import { useUserStore } from './stores'
const userStore = useUserStore()
</script>

<template>
  <div>我是APP</div>
  <el-button @click="$router.push('/home')">首页</el-button>
  <el-button @click="goList">列表</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>

  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken('ywy yysn')">登录</el-button>
  <el-button @click="userStore.removeToken">退出</el-button>
</template>

<style scoped></style>
