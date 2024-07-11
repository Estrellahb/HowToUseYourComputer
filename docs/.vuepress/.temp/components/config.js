import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "d:/HowToUseYourComputer/HowToUseYourComputer/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "d:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "d:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "d:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
