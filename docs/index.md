---
layout: home
---

<script>
    // 获取所有的cookie
    var allCookies = document.cookie;

    // 将所有的cookie字符串分割成单独的cookie
    var cookiesArray = allCookies.split("; ");

    // 循环遍历每个cookie，找到你需要的cookie值
    for (var i = 0; i < cookiesArray.length; i++) {
        var cookie = cookiesArray[i];
        var cookiePair = cookie.split("=");

        // 去除空格
        var cookieName = cookiePair[0].trim();

        // 如果找到你需要的cookie名，获取对应的值
        if (cookieName === "nf_lang") {
            var cookieValue = cookiePair[1];
            // 在这里使用cookieValue来处理你的逻辑
            console.log("Cookie值为：" + cookieValue);

            if (cookieValue === "zh-CN" || cookieValue === "zh") {
                window.location.href = "/zh/";
            } else if (cookieValue === "en-US" || cookieValue === "en") {
                window.location.href = "/en/";
            } else {
                window.location.href = "/en/";
            }
        }
    }
</script>