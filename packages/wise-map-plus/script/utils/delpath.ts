/*
 * @Author: Ewithome 1104094894@qq.com
 * @Date: 2023-02-20 10:06:15
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-20 10:51:09
 * @FilePath: \zz\packages\wise-map-plus\script\utils\delpath.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from "fs";
import { resolve } from "path";
import { pkgPath } from "./paths";
//保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      let curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != "node_modules") await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/wiseMapPlusPublish`) fs.rmdirSync(path);
  }
};
export default delPath;
