import comp from "d:/HowToUseYourComputer/HowToUseYourComputer/docs/.vuepress/.temp/pages/content/index.html.vue"
const data = JSON.parse("{\"path\":\"/content/\",\"title\":\"Content\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Content\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://estrellahb.github.io/HowToUseYourComputer/HowToUseYourComputer/content/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"如何使用你的电脑\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Content\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Content\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
