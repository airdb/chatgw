import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/not_exist': [
    {
      text: 'Guide',
      children: [
        '/README.md',
        '/intro.md',
        '/donate.md',
      ],
    },
  ],
}
