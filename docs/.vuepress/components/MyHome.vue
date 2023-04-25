<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'
import { ref } from 'vue'
</script>

<template>
  <main class="home">
    <div class="item">
      <p class="text">
        API repository
Easily store, catalog, and collaborate around all your API artifacts on one central platform. Postman can store and manage API specifications, documentation, workflow recipes, test cases and results, metrics, and everything else related to APIs.
      </p>
      <img src="https://voyager.postman.com/illustration/api-repository-postman-illustration.svg" alt="">
    </div>
    <div class="item">
      <p class="text">
        API repository
Easily store, catalog, and collaborate around all your API artifacts on one central platform. Postman can store and manage API specifications, documentation, workflow recipes, test cases and results, metrics, and everything else related to APIs.
      </p>
      <img src="https://voyager.postman.com/illustration/api-repository-postman-illustration.svg" alt="">
    </div>
    
    <!-- <HomeHero /> -->
    <!-- <HomeFeatures /> -->
    <HomeContent />
    <HomeFooter />
  </main>
</template>


<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  .text {
    widows: 300px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  &:nth-of-type(odd) {
    flex-direction: row;
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
}

@media screen and (max-width: 768px) {
  .item {
    &:nth-of-type(odd) {
      flex-direction: column;
    }
    &:nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
}
</style>