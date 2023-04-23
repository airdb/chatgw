<template>
  <div class="service-index">
    <input type="text" v-model="state.searchInput" placeholder="请输入内容" class="input">
    <Card :list="filteredList"></Card>
  </div>
</template>


<script lang="ts" setup>
import { reactive, computed } from "vue";
import Card from "../components/Card.vue";


const state = reactive({
  searchInput: '',
  list: [{
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '牛逼',
    description: 'description',
    tags: ['牛逼', 2, 3],
    url: 'https://www.baidu.com',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '文本',
    description: 'description',
    tags: [1, 2, 3],
    url: 'https://www.baidu.com',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '问',
    description: 'description',
    tags: [1, 2, 3],
    url: 'https://www.baidu.com',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '文',
    description: 'description',
    tags: [1, 2, 3],
    url: 'https://www.baidu.com',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: 'title',
    description: 'description',
    tags: [1, 2, 3],
    url: 'https://www.baidu.com',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: 'title',
    description: 'description',
    tags: [1, 2, 3],
    url: 'https://www.baidu.com',
  }]
})
const filteredList = computed(() => {
  // console.log(searchInput)
  if (!state.searchInput) {
    return state.list;
  } else {
    return state.list.filter((item) => item.title.indexOf(state.searchInput) > -1)
  }
});
</script>


<style lang="scss">
.service-index {
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
