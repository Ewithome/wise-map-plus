/*
 * @Author: Ewithome 1104094894@qq.com
 * @Date: 2023-02-16 13:57:45
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-20 13:48:07
 * @FilePath: \zz\play\main.ts
 * @Description: 
 */
import { createApp } from 'vue';
import App from './app.vue';
import wiseMapPlus from "@zz/wise-map-plus";
const app = createApp(App);
app.use(wiseMapPlus);
app.mount('#app');
