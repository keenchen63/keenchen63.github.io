import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'

import theme from "./theme.js";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: "/",
  head:[
    [
      'link',{ rel: 'icon', href:'/logo2.svg'}
    ]
  ],
  lang: "zh-CN",
  title: "Keen's Blog",
  description: "写点有的没的",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
