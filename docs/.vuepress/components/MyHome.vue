<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'
import Card from './Card.vue'
import { ref } from 'vue'

const searchText = ref('');
const searchResults = ref([]);

const search = async () => {
  const response = await fetch(`https://api.example.com/search?q=${searchText.value}`);
  const data = await response.json();
  searchResults.value = data.results;
};

</script>

<template>
  <main class="home">
    <div class="home-search">
      <input type="text" class="search-input" @input="search" placeholder="Search...">
    </div>
    <Card />
    <!-- <HomeHero /> -->
    <!-- <HomeFeatures /> -->
    <HomeContent />
    <HomeFooter />
  </main>
</template>


<style scoped>
.home-search {
  position: relative;
  width: 100%;
  height: 400px;
}
.search-input {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  height: 30px;
  transform: translate(-50%, -50%);
}
</style>