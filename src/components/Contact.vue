<script setup>
import { ref } from 'vue'
const e = ref('625013594@qq.com')
const toJueJin = function () {
  window.open('https://juejin.cn/user/3897084295776302')
}
const toGit = function () {
  window.open('https://github.com/zhangjiadi225')
}
const toYuQue = function () {
  window.open('https://www.yuque.com/u25385678')
}
const email = function () {
  const oInput = document.createElement('input')
  oInput.value = e.value
  document.body.appendChild(oInput)
  oInput.select()
  document.execCommand('Copy')
  console.log('ok')
  oInput.remove()
}
const file = function () {
  window.open('/didiResume/new_file.html')
}
</script>

<template>
  <div class="content">
    <div class="content-item two" @click="toJueJin">掘金</div>
    <div class="content-item one" @click="toGit">Github</div>
    <div class="content-item three" @click="toYuQue">语雀</div>
    <div class="content-item showWechat" @click="weChat">
      微信 : 14735505218
    </div>
    <div class="content-item showMessage" @click="email">
      邮箱 :{{ e }}(<span style="color:#5db1b1">点击复制</span>)
    </div>
    <div class="content-item" @click="file">
      精简版简历(<span style="color:#5db1b1">点击查看</span>)
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  &-item {
    width: 300px;
    height: 100px;
    border: 1px solid #8329e2;
    margin: 30px 60px;
    text-align: center;
    line-height: 100px;
    border-radius: 30px;
    cursor: pointer;
    color: #ffffff;
    letter-spacing: 1px;
  }
  .showWechat:hover {
    font-size: 0;
    background-image: url(../assets/image/me.jpg);
    background-repeat: no-repeat;
    background-size: 80px 80px;
    background-position: 50%;
  }

  .one {
    color: #ffffff;
  }

  .two {
    color: #ffffff;
  }

  .three {
    color: #ffffff;
  }

  .one:hover {
    background-color: #4cc9f0;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
    box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
    font-size: 20px;
  }

  .two:hover {
    background-color: #f038ff;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    font-size: 20px;
  }

  .three:hover {
    background-color: #b9e769;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    font-size: 20px;
  }
}
</style>
