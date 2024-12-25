import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import sidebar from './sidebar';
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '如何使用你的电脑',
  description: '电脑,硬件,软件,安装,解压,删除',
  base: '/HowToUseYourComputer/',
  
  bundler: viteBundler(),

  // 主题配置
  theme: hopeTheme({
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
    //导航栏布局
    navbarLayout: {
      start: ["Brand"],
      center: [],
      end: ["Language", "Repo", "Outlook", "Links", "Search"],
    },
    // 侧边栏配置
    sidebar,
    // 启用搜索功能
    plugins: {
      search: true,
      // 配置 mdEnhance 插件
      mdEnhance: {
        // 启用自定义对齐
        align: true,
      },
      // SEO 插件配置
      seo: {
        hostname: 'https://estrellahb.github.io/HowToUseYourComputer/',
      },
    },
    
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "https://github.com/Estrellahb/HowToUseYourComputer",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
  }),

  // 插件
  plugins: [
    // ['@vuepress/plugin-active-header-links', {
    //   sidebarLinkSelector: '.sidebar-link',
    //   headerAnchorSelector: '.header-anchor'
    // }],
  ]
});
