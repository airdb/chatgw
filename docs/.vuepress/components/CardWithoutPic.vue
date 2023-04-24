<template>
    <div class="card-container">
      <div v-for="(item, index) in cardList" :key="index" class="card-item">
        <div class="card-header">{{ item.title }}</div>
        <div class="card-body">{{ item.content }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        cardList: {
            type: Array,
            value: []
        }
    }
  };
  </script>
  
  <style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card-item {
    width: calc(33.33% - 20px);
    margin: 10px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08), 0 4px 16px rgba(0, 21, 41, 0.16);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .card-header {
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    background-color: #f5f7fa;
  }
  
  .card-body {
    padding: 16px;
    font-size: 14px;
    color: #666;
    background-color: #fff;
  }
  /* 在屏幕宽度小于等于768px时，每行只展示一个卡片 */
  @media screen and (max-width: 768px) {
    .card-item {
      width: calc(100% - 20px);
    }
  }
  </style>