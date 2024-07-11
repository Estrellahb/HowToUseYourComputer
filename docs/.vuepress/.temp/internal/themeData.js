export const themeData = JSON.parse("{\"encrypt\":{},\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[],\"end\":[\"Language\",\"Repo\",\"Outlook\",\"Links\",\"Search\"]},\"repo\":\"https://github.com/Estrellahb/HowToUseYourComputer\",\"repoLabel\":\"GitHub\",\"repoDisplay\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"推荐链接\",\"ariaLabel\":\"Language Menu\",\"children\":[{\"text\":\"计算机自学指南\",\"link\":\"https://csdiy.wiki/\"}]}],\"sidebar\":{\"/\":[{\"text\":\"前言\",\"link\":\"/\"},{\"text\":\"如何提问题\",\"link\":\"/content/HowToAskQuestions.md\"},{\"text\":\"选购电脑\",\"link\":\"/content/买电脑.md\"},{\"text\":\"硬件篇\",\"collapsible\":true,\"expanded\":true,\"children\":[\"/content/硬件篇/键盘.md\",\"/content/硬件篇/计算机硬件.md\",\"/content/硬件篇/触控板、屏幕与散热通道.md\"]},{\"text\":\"软件篇\",\"prefix\":\"/content/软件篇/\",\"collapsible\":true,\"expanded\":true,\"children\":[\"开关机.md\",\"认识此电脑.md\",\"浏览器的使用.md\",\"搜索引擎.md\",\"下载与安装.md\",\"卸载.md\",\"推荐安装应用.md\",\"解压.md\"]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
