import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname.startsWith('/zh-cn')) {
    let newPath = context.url.pathname.replace('/zh-cn', '');
    console.log('🍋 Rewrite:', context.url.pathname, '----->', newPath);
    return context.rewrite(newPath);
  }

  return next();
});
