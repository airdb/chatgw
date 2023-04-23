<template>
  <div class="product-index">
    <input type="text"
           placeholder="请输入内容"
           class="input">
    <Card :list="list"></Card>
  </div>
</template>


<script lang="ts" setup>
import Card from "../components/Card.vue";

const list = [
  { title: "卡片标题1", content: "卡片内容1" },
  { title: "卡片标题2", content: "卡片内容2" },
  { title: "卡片标题3", content: "卡片内容3" },
  { title: "卡片标题4", content: "卡片内容4" },
  { title: "卡片标题5", content: "卡片内容5" },
  { title: "卡片标题6", content: "卡片内容6" },
];
</script>


<style lang="scss">
.product-index {
  position: relative;

  .input {
    box-sizing: border-box;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    margin: 150px auto;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    font-size: 16px;
  }
}
</style>
