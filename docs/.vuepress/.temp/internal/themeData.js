export const themeData = JSON.parse("{\"lineNumbers\":true,\"extractHeaders\":[\"h2\",\"h3\",\"h4\",\"h5\",\"h6\"],\"navbar\":[{\"text\":\"推荐链接\",\"ariaLabel\":\"Language Menu\",\"children\":[{\"text\":\"计算机自学指南\",\"link\":\"https://csdiy.wiki/\"}]}],\"sidebar\":{\"/\":[{\"text\":\"前言\",\"link\":\"/\"},{\"text\":\"如何提问题\",\"link\":\"/content/HowToAskQuestions.md\"},{\"text\":\"选购电脑\",\"link\":\"/content/买电脑.md\"},{\"text\":\"硬件篇\",\"children\":[\"/content/硬件篇/键盘.md\",\"/content/硬件篇/计算机硬件.md\",\"/content/硬件篇/触控板、屏幕与散热通道.md\"]},{\"text\":\"软件篇\",\"prefix\":\"/content/软件篇/\",\"children\":[\"开关机.md\",\"认识此电脑.md\",\"浏览器的使用.md\",\"搜索引擎.md\",\"下载与安装.md\",\"卸载.md\",\"推荐安装应用.md\",\"解压.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
