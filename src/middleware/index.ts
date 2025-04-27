import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // 将所有请求重定向到目标网站
  return Response.redirect('https://coffic.cn', 301);
});
