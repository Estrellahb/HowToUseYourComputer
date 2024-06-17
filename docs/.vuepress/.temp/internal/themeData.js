export const themeData = JSON.parse("{\"sidebar\":{\"/\":[{\"text\":\"前言\",\"link\":\"/\"},{\"text\":\"如何提问题\",\"link\":\"/content/HowToAskQuestions.md\"},{\"text\":\"选购电脑\",\"link\":\"/content/买电脑.md\"},{\"text\":\"硬件篇\",\"children\":[\"/content/硬件篇/键盘.md\",\"/content/硬件篇/计算机硬件.md\",\"/content/硬件篇/触控板、屏幕与散热通道.md\"]},{\"text\":\"软件篇\",\"prefix\":\"/content/软件篇/\",\"children\":[\"开关机.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
