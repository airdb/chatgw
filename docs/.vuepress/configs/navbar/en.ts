import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Overview',
    children: [
          { text: 'Intro', link: '/en/intro.md', },
    ],
  },
  {
    text: 'Products',
    children: [
          { text: 'Product', link: '/en/products.md', },
          { text: 'Awesome', link: '/en/awesome.md', },
    ],
  },
  {
    text: 'Services',
    children: [
      { text: 'StatusPage', link: 'https://airdb.statuspage.io/', },
      { text: 'Service', link: '/en/services.md', },
    ],
  },
  {
    text: 'AI Explore',
    children: [
          { text: 'Explore', link: '/en/explore.md', },
    ],
  },
  {
    text: 'Docs', link: '/en/docs/README.md',
  },
]
