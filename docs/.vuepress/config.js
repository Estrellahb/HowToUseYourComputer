import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import sidebar from './sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '如何使用你的电脑',
  description: '这是我的第一个 VuePress 站点',
  base: '/HowToUseYourComputer/',
  
  bundler: viteBundler(),

  theme: defaultTheme({
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    // 导航栏配置
    navbar: [
      {
        text: '推荐链接',
        ariaLabel: 'Language Menu',
        children: [
          { text: '计算机自学指南', link: 'https://csdiy.wiki/' }
        ]
      }
    ],
    // 侧边栏配置
    sidebar,
  }),
  
  // 插件
  plugins: [
    ['@vuepress/plugin-search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/plugin-active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }]
  ]
})
