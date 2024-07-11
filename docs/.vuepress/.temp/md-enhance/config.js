import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "d:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "d:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
