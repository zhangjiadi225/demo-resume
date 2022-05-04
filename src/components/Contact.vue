<script setup>
const toJueJin = function(){
  window.open('https://juejin.cn/user/3897084295776302')
}
const toGit = function(){
  window.open('https://github.com/zhangjiadi225')
}
const toYuQue = function(){
  window.open('https://www.yuque.com/u25385678')
}


</script>

<template>
  <div class="content">
    <div class="content-item" @click="toJueJin">掘金</div>
    <div class="content-item" @click="toGit">Github</div>
    <div class="content-item" @click="toYuQue">语雀</div>
    <div class="content-item" @click="weChat">微信 : 14735505218</div>
    <div class="content-item" @click="email">邮箱 : 625013594@qq.com</div>
  </div>
</template>

<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  &-item{
    width: 300px;
    height: 100px;
    border: 1px solid #8329e2;
    margin: 30px 60px;
    text-align: center;
    line-height: 100px;
    border-radius: 30px;
    cursor:pointer;
    color: orange;
  }
  &-item:hover{
    font-size: 20px;
    color: brown;
  }
}


</style>
