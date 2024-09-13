import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
import theme from "./theme.js";

export default defineUserConfig({
  plugins: [removeHtmlExtensionPlugin()],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: "/",
  head:[
    ["link",{ rel: "icon", href: "/logo2.svg"}],
    ["link",{ rel: "preconnect", href:"https://fonts.googleapis.com"}],
    ["link",{ rel: "preconnect", href:"https://fonts.gstatic.com", crossorigin: ""}],
    ["link",{ href:"https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&family=Noto+Serif+SC:wght@200..900&display=swap", rel: "stylesheet"}],
  ],
  lang: "zh-CN",
  title: "Keen's Blog",
  description: "写点有的没的",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
