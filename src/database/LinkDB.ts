import { logger } from "@/utils/logger";

export default class LinkDB {
    static makeHomeLink(lang: string): string {
        return `/${lang}`;
    }

    static makeProductLink(lang: string, name: string): string {
        return `/${lang}/products/${name}`;
    }

    static makeBlogsLink(lang: string): string {
        return `/${lang}/blogs`;
    }

    static getLessonLink(lang: string, lessonId: string): string {
        if (lessonId.endsWith(lang)) {
            return `/${lang}/lessons/${lessonId.replace(`${lang}`, '')}`;
        } else {
            const idWithoutLang = lessonId.replace(`${lang}/`, '');
            return `/${lang}/lessons/${idWithoutLang}`;
        }
    }

    static getTagLink(lang: string, tagName: string): string {
        return `/${lang}/blogs/tag/${tagName}`;
    }

    static getBlogLink(blogId: string, lang: string): string {
        const debug = false
        const blogIdWithoutLang = blogId.replace(`${lang}/`, '')

        if (debug) {
            logger.info(`获取博客文档链接，博客文档ID: ${blogId}`);
        }

        return `/${lang}/blogs/${blogIdWithoutLang}`;
    }

    static getMetaLink(lang: string, slug: string): string {
        return `/${lang}/meta/${slug}`;
    }

    static isHomeLink(path: string, lang: string): boolean {
        return path === `/${lang}` || path === `/${lang}/`;
    }

    static isProductLink(path: string, lang: string, name: string): boolean {
        return path === `/${lang}/products/${name}` ||
            path === `/${lang}/products/${name}/` ||
            path.startsWith(`/${lang}/products/${name}/`);
    }

    static isBlogsLink(path: string, lang: string): boolean {
        return path === `/${lang}/blogs`
            || path === `/${lang}/blogs/`
            || path.startsWith(`/${lang}/blogs/`);
    }
}