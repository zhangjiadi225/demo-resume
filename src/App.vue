<script setup>

</script>

<template>
<ul class="bg-bubbles">
    <li v-for="i in 10" :key="i"></li>
</ul>
  <div class="main">
    <div class="main-my">
      <router-link to="/">HI I'm Jd</router-link>
    </div>
    <div class="main-menu">
      <router-link class="main-menu-item" to="/"
        ><img class="main-menu-home" src="./assets/image/home.svg" alt="#"
      /></router-link>
      <router-link class="main-menu-item" to="/self">个人介绍</router-link>
      <router-link class="main-menu-item" to="/experience"
        >个人经历</router-link
      >
      <router-link class="main-menu-item" to="/technology">技术栈</router-link>
      <router-link class="main-menu-item" to="/contact">联系方式</router-link>
    </div>
    <div class="main-show">
      <router-view v-slot="{ Component }">
        <transition name="MainFade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="main-tips">基础版本 , 正在开发中</div>
  </div>
</template>

<style lang="scss">
#app{
  background: linear-gradient(to bottom right, #50A3A2, #53E3A6);
}
.bg-bubbles {
    position: absolute;
    // 使气泡背景充满整个屏幕；
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
    overflow: hidden;
    li {
      position: absolute;
      // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
      bottom: -160px;
      // 默认的气泡大小；
      width: 40px;
      height: 40px;
      background-color: rgba(223, 26, 164, 0.15);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
    // 自定义 square 动画；
    @keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg)
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
    }
}

.main {
  width: 1200px;
  height: 700px;
  position: relative;
  margin: 0 auto;
  &-my {
    position: absolute;
    width: 400px;
    height: 400px;
    font-size: 45px;
    top: 50px;
    left: 20px;
  }

  &-menu {
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    &-item {
      color: #ffffff;
      height: 30px;
      margin-top: 10px;
      font-size: 18px;
      font-weight: 900;
    }

    &-item:hover {
      font-size: 25px;
      color: rgb(139, 239, 233);
    }

    &-home {
      height: 30px;
    }

    &-home:hover {
      height: 40px;
    }
  }
  &-show {
    position: absolute;
    right: 60px;
    top: 140px;
    width: 900px;
    height: 540px;
    background-color: #ffffff;
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    background-image: radial-gradient(#574545, #484951);
    backdrop-filter: blur(6px);
  }
  &-tips {
    position: absolute;
    bottom: 40px;
    right: 0px;
    width: 5px;
    font-weight: 900;
    font-size: 20px;
    color: blueviolet;
  }
}

.MainFade-enter-from,
.MainFade-leave-to {
  opacity: 0;
}
.MainFade-enter-to,
.MainFade-leave-from {
  opacity: 1;
}
.MainFade-enter-active,
.MainFade-leave-active {
  transition: opacity 0.5s;
}
</style>
