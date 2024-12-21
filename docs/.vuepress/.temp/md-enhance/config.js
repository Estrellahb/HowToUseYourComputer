import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "D:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
