<script setup>
import { reactive } from 'vue'
let arr = reactive([
  '目前就读于南阳师范学院',
  '曾实习于君合欣通信息',
  '实习职位 : 前端开发实习生',
  '①根据组内对实习生的培养方案学习代码规范、分支管理规范，获取实际项目开发经验',
  '②独立完成组内项目的缺陷修改、代码优化；与产品经理、后端对接完成新需求，迭代新版本',
  '③封装公司内部自用的公用组件、了解性能优化相关知识'
])
</script>

<template>
  <div>
    <Describe v-for="item in arr">{{ item }}</Describe>
  </div>
</template>

<style></style>
