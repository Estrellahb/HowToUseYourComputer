import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import sidebar from './sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '如何使用你的电脑 ',
  description: '这是我的第一个 VuePress 站点',
  base: '/HowToUseYourComputer/',
  
  bundler: viteBundler(),

  theme: defaultTheme({
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    // 导航栏配置
    // navbar: [
    //   { text: '首页', link: '/' },
    //   { text: '如何提问题', link: '/content/HowToAskQuestions.md' },
    //   { text: '硬件篇', link: '/content/硬件篇/' },
    // ],

    // 侧边栏配置
    sidebar,
    
  })
})
