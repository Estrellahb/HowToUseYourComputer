export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/README-old.html", { loader: () => import(/* webpackChunkName: "README-old.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/README-old.html.js"), meta: {"t":"前言"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"How to use your computer/如何使用你的电脑"} }],
  ["/content/HowToAskQuestions.html", { loader: () => import(/* webpackChunkName: "content_HowToAskQuestions.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/HowToAskQuestions.html.js"), meta: {"t":"如何提问题"} }],
  ["/content/%E4%B9%B0%E7%94%B5%E8%84%91.html", { loader: () => import(/* webpackChunkName: "content_买电脑.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/买电脑.html.js"), meta: {"t":"选购电脑"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/%E8%A7%A6%E6%8E%A7%E6%9D%BF%E3%80%81%E5%B1%8F%E5%B9%95%E4%B8%8E%E6%95%A3%E7%83%AD%E9%80%9A%E9%81%93.html", { loader: () => import(/* webpackChunkName: "content_硬件篇_触控板、屏幕与散热通道.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/硬件篇/触控板、屏幕与散热通道.html.js"), meta: {"t":"触控板、屏幕与散热通道"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "content_硬件篇_计算机硬件.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/硬件篇/计算机硬件.html.js"), meta: {"t":"计算机硬件"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/%E9%94%AE%E7%9B%98.html", { loader: () => import(/* webpackChunkName: "content_硬件篇_键盘.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/硬件篇/键盘.html.js"), meta: {"t":"键盘与截图"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E4%B8%8B%E8%BD%BD%E4%B8%8E%E5%AE%89%E8%A3%85.html", { loader: () => import(/* webpackChunkName: "content_软件篇_下载与安装.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/下载与安装.html.js"), meta: {"t":"下载与安装"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E4%BB%8E%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%E8%B5%84%E6%BA%90.html", { loader: () => import(/* webpackChunkName: "content_软件篇_从网盘下载资源.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/从网盘下载资源.html.js"), meta: {"t":""} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E5%8D%B8%E8%BD%BD.html", { loader: () => import(/* webpackChunkName: "content_软件篇_卸载.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/卸载.html.js"), meta: {"t":"卸载"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E5%BC%80%E5%85%B3%E6%9C%BA.html", { loader: () => import(/* webpackChunkName: "content_软件篇_开关机.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/开关机.html.js"), meta: {"t":"关机的正确方式及笔记本快速启动设置调整"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E6%8E%A8%E8%8D%90%E5%AE%89%E8%A3%85%E5%BA%94%E7%94%A8.html", { loader: () => import(/* webpackChunkName: "content_软件篇_推荐安装应用.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/推荐安装应用.html.js"), meta: {"t":"推荐安装应用"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E.html", { loader: () => import(/* webpackChunkName: "content_软件篇_搜索引擎.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/搜索引擎.html.js"), meta: {"t":"搜索引擎"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E4%BD%BF%E7%94%A8.html", { loader: () => import(/* webpackChunkName: "content_软件篇_浏览器的使用.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/浏览器的使用.html.js"), meta: {"t":"浏览器"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E8%A7%A3%E5%8E%8B.html", { loader: () => import(/* webpackChunkName: "content_软件篇_解压.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/解压.html.js"), meta: {"t":"解压"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/%E8%AE%A4%E8%AF%86%E6%AD%A4%E7%94%B5%E8%84%91.html", { loader: () => import(/* webpackChunkName: "content_软件篇_认识此电脑.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/认识此电脑.html.js"), meta: {"t":"此电脑"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/content/", { loader: () => import(/* webpackChunkName: "content_index.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/index.html.js"), meta: {"t":"Content"} }],
  ["/content/%E7%A1%AC%E4%BB%B6%E7%AF%87/", { loader: () => import(/* webpackChunkName: "content_硬件篇_index.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/硬件篇/index.html.js"), meta: {"t":"硬件篇"} }],
  ["/content/%E8%BD%AF%E4%BB%B6%E7%AF%87/", { loader: () => import(/* webpackChunkName: "content_软件篇_index.html" */"D:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/软件篇/index.html.js"), meta: {"t":"软件篇"} }],
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
