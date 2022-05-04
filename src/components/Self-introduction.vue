<script setup>
import { reactive ,onMounted,ref } from 'vue'

let msgArr = reactive([
  '姓名:张家迪',
  '性别:男',
  '目前状态:大四求职',
  '籍贯:山西',
  `南阳师范学院  ( 统 招 本 科 )  `,
  '有自己的学习小组,每周进行知识的总结与分享'
])


</script>

<template>
  <div>
    <div class="main">
      <Describe v-for="item in msgArr">{{ item }}</Describe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
