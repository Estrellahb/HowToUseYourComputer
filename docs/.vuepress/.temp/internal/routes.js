export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"前言"} }],
  ["/content/HowToAskQuestions.html", { loader: () => import(/* webpackChunkName: "content_HowToAskQuestions.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/content/HowToAskQuestions.html.js"), meta: {"title":"如何提问题"} }],
  ["/content/%E4%B9%B0%E7%94%B5%E8%84%91.html", { loader: () => import(/* webpackChunkName: "content_买电脑.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/content/买电脑.html.js"), meta: {"title":"选购电脑"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/%E8%A7%A6%E6%8E%A7%E6%9D%BF%E3%80%81%E5%B1%8F%E5%B9%95%E4%B8%8E%E6%95%A3%E7%83%AD%E9%80%9A%E9%81%93.html", { loader: () => import(/* webpackChunkName: "content_硬件篇_触控板、屏幕与散热通道.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/content/硬件篇/触控板、屏幕与散热通道.html.js"), meta: {"title":"触控板"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "content_硬件篇_计算机硬件.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/content/硬件篇/计算机硬件.html.js"), meta: {"title":"计算机硬件"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/%E9%94%AE%E7%9B%98.html", { loader: () => import(/* webpackChunkName: "content_硬件篇_键盘.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/content/硬件篇/键盘.html.js"), meta: {"title":"键盘"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E5%BC%80%E5%85%B3%E6%9C%BA.html", { loader: () => import(/* webpackChunkName: "content_软件篇_开关机.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/content/软件篇/开关机.html.js"), meta: {"title":"关机的正确方式及笔记本快速启动设置调整"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
