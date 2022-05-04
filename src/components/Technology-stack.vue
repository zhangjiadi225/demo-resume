<script setup>
import { reactive } from 'vue'
let arr = reactive([
  '熟练掌握 HTML5 和 CSS3 能使用Flex布局 与 VW/VH 快速开发响应式页面 ',
  '熟练掌握 JavaScript , 熟悉常见 ES6 新特性的使用 , 了解ES6+ 新语法 .',
  '熟悉 Vue全家桶 , 搭配ElementUI 或 Vant快速开发 .',
  '了解常用设计模式与常用数据结构 . 了解前端性能优化与前端工程化 .',
  '能够使用Git进行代码管理与多人协作开发 . ',
  '了解vue底层源码 , 有对源码进行一定的学习 . '
])
</script>

<template>
  <div>
    <Describe v-for="item in arr">{{item}}</Describe>
  </div>
</template>

<style></style>
