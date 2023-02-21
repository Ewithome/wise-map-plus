/*
 * @Author: Ewithome 1104094894@qq.com
 * @Date: 2023-02-20 10:05:08
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-20 14:18:23
 * @FilePath: \zz\packages\wise-map-plus\script\publish\index.ts
 * @Description: 
 */
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/wiseMapPlusPublish`);
};
export default series(async () => publishComponent());