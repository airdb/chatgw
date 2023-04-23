<template>
  <div class="product-index">
    <input type="text"
      v-model="state.searchInput"
      placeholder="请输入内容"
      class="input">
    <Card :list="filteredList"></Card>
  </div>
</template>


<script lang="ts" setup>
import { reactive, computed } from "vue";
import Card from "../components/Card.vue";


const state =  reactive({
  searchInput: '',
  list: [{
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '智谱 AI',
    description: 'AI通用新范式·大模型开放生态平台',
    tags: ['牛逼', 2, 3],
    url: 'http://open.bigmodel.ai/',
  }, {
    imageUrl: 'https://imgslim.geekpark.net/uploads/image/file/48/90/48902a437d2c90ce5c0d93e5fc1d6a71.png',
    title: 'MiniMax Glow',
    description: '三个模态的基础大模型，涉及语音、图像、文本不同内容的生成。',
    tags: [1, 2, 3],
    url: 'https://www.glowapp.tech/',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '文心一言',
    description: '百度全新一代知识增强大语言模型，文心大模型家族的新成员，能够与人对话互动，回答问题，协助创作，高效便捷地帮助人们获取信息、知识和灵感。',
    tags: ["ChatGPT", "文生图"],
    url: 'https://yiyan.baidu.com/',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '商量 SenseChat',
    description: '自然语言生成、文生图、感知模型标注、以及模型研发功能',
    tags: [1, 2, 3],
    url: 'https://www.sensetime.com/',
  }, {
    imageUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01fbqryd1ZossCmdlga_!!6000000003242-54-tps-200-200.apng',
    title: '通义千问',
    description: '一个专门响应人类指令的大模型',
    tags: [1, 2, 3],
    url: 'https://tongyi.aliyun.com/',
  }, {
    imageUrl: 'https://gateway.chat/images/tags.png',
    title: '微信 WeLM',
    description: 'WeLM 是一个非常擅长理解和生成文本的通用语言模型',
    tags: [1, 2, 3],
    url: 'https://welm.weixin.qq.com/docs/api/',
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
