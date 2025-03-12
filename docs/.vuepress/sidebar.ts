import type { SidebarConfig } from '@vuepress/theme-default'
import { link } from 'fs'
import { text } from 'stream/consumers'

const sidebar: SidebarConfig = {
  '/': [
    {
      text: '前言',
      link: '/'
    },
    {
      text: '如何提问题',
      link: '/content/HowToAskQuestions.md'
    },
    {
        text:'选购电脑',
        link:'/content/买电脑.md'
    },
    {
      text: '硬件篇',
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      children: [
        '/content/硬件篇/键盘.md',
        '/content/硬件篇/计算机硬件.md',
        '/content/硬件篇/触控板、屏幕与散热通道.md'
      ]
    },
    {
        text:'软件篇',
        prefix: '/content/软件篇/',
        // 可选的, 设置分组是否可以折叠，默认值是 false,
        collapsible: true,
        // 可选的。设置分组是否默认展开，默认值是 false
        expanded: true,
        children:[
            '开关机.md',
            '认识此电脑.md',
            '浏览器的使用.md',
            '搜索引擎.md',
            '下载与安装.md',
            '卸载.md',
            '推荐安装应用.md',
            '解压.md',
        ]
    },
    {
      text:'求职避坑指南',
      prefix: '/content/求职避坑指南/',
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      children:[
          '内容.md',
      ]
  }
  ]
}

export default sidebar
