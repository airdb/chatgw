import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarZh: NavbarConfig = [
  {
    text: '概览',
    children: [
          { text: 'Intro', link: '/zh/intro.md', },
    ],
  },
  {
    text: '产品',
    children: [
          { text: 'Intro', link: '/zh/products.md', },
    ],
  },
  {
    text: '服务',
    children: [
          { text: '服务状态', link: 'https://airdb.statuspage.io/', },
          { text: '服务', link: '/zh/services.md', },
    ],
  },
  {
    text: 'AI 探索之旅',
    children: [
          { text: '探索', link: '/zh/explore.md', },
    ],
  },
  {
    text: '文档', link: '/zh/docs/README.md',
  },
]
