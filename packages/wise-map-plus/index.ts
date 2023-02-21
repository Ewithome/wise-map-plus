/*
 * @Descripttion:
 * @Author: CharmingZhang
 * @version:
 * @Date: 2023-02-16 10:48:40
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-16 16:58:13
 */

import * as components from "./src/components";
export * from "./src/components";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};



