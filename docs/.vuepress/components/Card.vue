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
  data () {
    return {
      cardList: [
        { title: "卡片标题1", content: "卡片内容1" },
        { title: "卡片标题2", content: "卡片内容2" },
        { title: "卡片标题3", content: "卡片内容3" },
        { title: "卡片标题4", content: "卡片内容4" },
        { title: "卡片标题5", content: "卡片内容5" },
        { title: "卡片标题6", content: "卡片内容6" },
      ],
    };
  },
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
