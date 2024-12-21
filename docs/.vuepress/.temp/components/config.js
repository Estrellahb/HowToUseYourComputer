import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/HowToUseYourComputer/HowToUseYourComputer/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "D:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "D:/HowToUseYourComputer/HowToUseYourComputer/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

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
