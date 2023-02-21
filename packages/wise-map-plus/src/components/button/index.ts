/*
 * @Descripttion:
 * @Author: CharmingZhang
 * @version:
 * @Date: 2023-02-16 14:19:25
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-16 16:49:52
 */
// import Button from './index.vue';
// export { Button };
// export default Button;

import _Button from "./index.vue";
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;
