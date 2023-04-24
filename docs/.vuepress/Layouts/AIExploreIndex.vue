<template>
    <div class="AI-Explore-index">
      <input type="text"
        v-model="state.searchInput"
        placeholder="请输入内容"
        class="input">
      <CardWithoutPic :cardList="filteredList"></CardWithoutPic>
    </div>
  </template>
  
  
  <script lang="ts" setup>
  import { reactive, computed } from "vue";
  import CardWithoutPic from "../components/CardWithoutPic.vue";
  
  
  const state =  reactive({
    searchInput: '',
    list: [{
      title: '智谱 AI',
      content: 'AI通用新范式·大模型开放生态平台',
    }, {
      title: 'MiniMax Glow',
      content: '三个模态的基础大模型，涉及语音、图像、文本不同内容的生成。',
    }, {
      title: '文心一言',
      content: '百度全新一代知识增强大语言模型，文心大模型家族的新成员，能够与人对话互动，回答问题，协助创作，高效便捷地帮助人们获取信息、知识和灵感。',

    }, {

      title: '商量 SenseChat',
      content: '自然语言生成、文生图、感知模型标注、以及模型研发功能',
  
    }, {
      title: '通义千问',
      content: '一个专门响应人类指令的大模型',
    }, {
      title: '微信 WeLM',
      content: 'WeLM 是一个非常擅长理解和生成文本的通用语言模型',
    }]
  })
  const filteredList = computed(() => {
    if (!state.searchInput) {
      return state.list;
    } else {
      return state.list.filter((item) => item.title.indexOf(state.searchInput) > -1)
    }
  });
  </script>
  
  
  <style lang="scss">
  .AI-Explore-index {
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
  