<script setup>
</script>

<template>
  <div class="main">
    <div class="main-my">
      <router-link to="/">HI I'm Jd</router-link>
    </div>
    <div class="main-menu">
      <router-link class="main-menu-item" to="/"><img class="main-menu-home" src="./assets/image/home.svg" alt="#"></router-link>
      <router-link class="main-menu-item" to="/self">个人介绍</router-link>
      <router-link class="main-menu-item" to="/experience">个人经历</router-link>
      <router-link class="main-menu-item" to="/technology">技术栈</router-link>
      <router-link class="main-menu-item" to="/contact">联系方式</router-link>
    </div>
    <div class="main-show">
      <router-view v-slot="{ Component  }">
        <transition name="MainFade" mode="out-in">
          <component :is="Component "></component>
        </transition>
      </router-view>
    </div>
    <div class="main-tips">基础版本 , 正在开发中</div>
  </div>
</template>

<style lang="scss" scoped>
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
    background-image: radial-gradient(#555555, #1e1f2a);
  }
  &-tips{
    position: absolute;
    bottom: 40px;
    right: 0px;
    width: 5px;
    font-weight: 900;
    font-size: 20px;
    color: blueviolet;
  }
  &-color{
    position: absolute;
    right: 0px;
    top: 10px;
    color: orange;
    font-weight: 700;
  }
}

.MainFade-enter-from, .MainFade-leave-to {
  opacity: 0;
}
.MainFade-enter-to, .MainFade-leave-from {
  opacity: 1;
}
.MainFade-enter-active,
.MainFade-leave-active {
  transition: opacity .5s;
}
</style>
