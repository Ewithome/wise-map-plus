/*
 * @Author: Ewithome 1104094894@qq.com
 * @Date: 2023-02-16 13:55:27
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-16 17:45:30
 * @FilePath: \zz\play\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  plugins: [vue(),DefineOptions()],
});