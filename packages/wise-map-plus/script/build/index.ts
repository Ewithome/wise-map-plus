/*
 * @Author: Ewithome 1104094894@qq.com
 * @Date: 2023-02-20 10:06:15
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-20 10:55:57
 * @FilePath: \zz\packages\wise-map-plus\script\build\index.ts
 * @Description:
 */

import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除wiseMapPlusPublish

export const removeDist = () => {
  return delPath(`${pkgPath}/wiseMapPlusPublish`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/wiseMapPlusPublish/lib/src`))
    .pipe(dest(`${pkgPath}/wiseMapPlusPublish/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
