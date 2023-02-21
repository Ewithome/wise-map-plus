/*
 * @Author: Ewithome 1104094894@qq.com
 * @Date: 2023-02-20 15:46:11
 * @LastEditors: Ewithome 1104094894@qq.com
 * @LastEditTime: 2023-02-20 15:55:09
 * @FilePath: \zz\site\docs\.vitepress\config.js
 * @Description: 
 */
export default {
    base: process.env.NODE_ENV === 'production' ? '/easyest/' : '/',
    themeConfig: {
        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/components/button/" },
        ],
        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button",
                            link: "/components/button",
                        }
                    ],
                }
            ]
        },

        socialLinks: [{ icon: "github", link: "https://github.com/Ewithome/wise-map-plus.git" }],
    },
}

