<template>
  <div class="card-list">
     <div class="card" v-for="(item, index) in list" :key="index">
      <div class="card-image"> 
        <img :src="item.imageUrl">
      </div>
      <div class="card-info">
        <p class="card-title">{{ item.title }}</p>
        <p class="card-description">{{ item.description }}</p>
        <div class="card-tags">
          <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
        <a :href="item.url" class="card-link">{{ item.url }}</a>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  name: "Card",
  props: {
    list: {
      type: Array,
      value: []
    }
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  /* display: inline-block; */
  width: 30%;
  /* 一行最多显示三张卡片 */
  margin-right: 2%;
  margin-bottom: 20px;
  vertical-align: top;
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    /* 移动端一行只显示一张卡片 */
    margin-right: 0;
  }
}

.card-image {
  height: 150px;
  /* 自定义图片高度 */
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-info {
  padding: 10px;
}

.card-title {
  margin-top: 0;
  font-size: 18px;
}

.card-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.card-tags {
  margin-bottom: 10px;
}

.tag {
  display: inline-block;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  margin-right: 5px;
}

.card-link {
  color: blue;
}</style>
