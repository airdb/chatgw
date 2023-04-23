import { defineClientConfig } from '@vuepress/client'
import ProductIndex from './Layouts/ProductIndex.vue'
export default defineClientConfig({
  enhance({ app }) {
    app.component('ProductIndex', ProductIndex)
  },
})