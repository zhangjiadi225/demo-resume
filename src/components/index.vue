<script setup>
import { reactive } from 'vue'
const arr = reactive(['你不一定要很厲害，才能開始', '你要開始，才能很厲害'])
</script>

<template>
  <div>
    <div class="title">兴趣使然的前端开发</div>
    <Describe v-for="item in arr">
      {{ item }}
    </Describe>
    <!--测试注释-->
  </div>
</template>

<style lang="scss" scoped>
.title {
  position: relative;
  font-size: 28px;
  font-weight: 700;
  left: 340px;
  width: 260px;
  background: linear-gradient(
    to right top,
    #69aeea,
    #7998e0,
    #8f7fce,
    #a364b1,
    #af468c
  );
  -webkit-background-clip: text;
  color: transparent;
}
.show {
  margin: auto;
  margin-top: 50px;
  width: 80%;
  height: 240px;
  // border: 1px solid #a364b1;
  position: relative;
  display: flex; //开启弹性布局
  justify-content: center;
  align-items: center;
  min-height: 240px; // 文字居中
}
</style>
