import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/configuration.md',
        '/zh/guide/page.md',
        '/zh/guide/markdown.md',
        '/zh/guide/assets.md',
        '/zh/guide/i18n.md',
        '/zh/guide/deployment.md',
        '/zh/guide/theme.md',
        '/zh/guide/plugin.md',
        '/zh/guide/bundler.md',
        '/zh/guide/migration.md',
      ],
    },
  ],
  '/zh/docs/': [
    {
      text: '平台介绍',
      children: [
        '/zh/docs/intro.md',
      ],
    },
    {
      text: '新手指南',
      children: [
        '/zh/docs/guide.md',
      ],
    },
    {
      text: '开放 APIs',
      children: [
        '/zh/docs/apis.md',
      ],
    },
    {
      text: '微调工具',
      children: [
        '/zh/docs/fine-tune.md',
      ],
    },
    {
      text: '常见问题',
      children: [
        '/zh/docs/faq.md',
      ],
    },
    {
      text: '协议声明',
      children: [
        '/zh/docs/privacy.md',
        '/zh/docs/terms.md',
      ],
    },
  ],
}
