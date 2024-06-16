import comp from "D:/HowToUseYourComputer/vuepress-blog/docs/.vuepress/.temp/pages/HowToAskQuestions.html.vue"
const data = JSON.parse("{\"path\":\"/HowToAskQuestions.html\",\"title\":\"如何提问题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"HowToAskQuestions.md\"}")
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
