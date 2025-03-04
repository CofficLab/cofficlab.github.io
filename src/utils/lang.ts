export const normalizeLang = (lang: string) => {
    if (lang === 'zh-CN') {
        return 'zh-cn';
    }
    return lang;
}

export const getLangFromSlug = (slug: string) => {
    let lang = slug.split('/')[0];

    return normalizeLang(lang);
}

export const getLangFromPathname = (pathname: string) => {
    // 去除开头的 /
    pathname = pathname.slice(1);

    let lang = pathname.split('/')[0];

    return normalizeLang(lang);
}

export const isValidLang = (lang: string) => {
    return ['zh-cn', 'en'].includes(lang);
}

export const getLang = (...args: string[]) => {
    const debug = false

    if (debug) {
        console.log('getLang', args);
    }

    for (const arg of args) {
        let normalizedLang = normalizeLang(arg);
        if (isValidLang(normalizedLang)) {
            return normalizedLang;
        }
    }
    return 'zh-cn';
}