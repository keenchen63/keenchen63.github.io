import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Keen's Blog",
  description: "写点有的没的",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
