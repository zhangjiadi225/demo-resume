<script setup>

</script>

<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.item{
    width: 780px;
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
    margin-left: 40px;
    border-radius: 15px;
    border: 1px solid #555555;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing:2px;
    color: #dbf1ff;
}
</style>
