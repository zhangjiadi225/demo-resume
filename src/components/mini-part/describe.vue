<script setup>

</script>

<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

.item {
    position: relative;
    color: #dbf1ff;
    width: 780px;
    height: 40px;
     margin-top: 20px;
    line-height: 40px;
    letter-spacing:2px;
    margin-left: 40px;
    border: 1px solid #669ad2;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        transition: .3s ease-in-out;
    }
    
    &::before {
        top: -5px;
        left: -5px;
        border-top: 4px solid #907ecd;
        border-left: 4px solid #907ecd;
    }
    
    &::after {
        right: -5px;
        bottom: -5px;
        border-bottom: 4px solid #907ecd;
        border-right: 4px solid #907ecd;
    }
    
    &:hover::before,
    &:hover::after {
        width: calc(100% + 9px);
        height: calc(100% + 9px);
    }
}
.item:hover{
  color: rgb(239, 48, 121);
}

</style>
