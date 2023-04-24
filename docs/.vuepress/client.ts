import { defineClientConfig } from '@vuepress/client'
import ProductIndex from './Layouts/ProductIndex.vue'
import ServiceIndex from './Layouts/ServiceIndex.vue'
import AIExploreIndex from './Layouts/AIExploreIndex.vue'
export default defineClientConfig({
  enhance({ app }) {
    app.component('ProductIndex', ProductIndex)
    app.component('ServiceIndex', ServiceIndex)
    app.component('AIExploreIndex', AIExploreIndex)
  },
})