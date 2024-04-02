if (location.pathname == '/') {
  // 获取所有的cookie
  var allCookies = document.cookie;

  // 将所有的cookie字符串分割成单独的cookie
  var cookiesArray = allCookies.split('; ');

  // 判断cookie是否存在
  if (cookiesArray.length === 0) {
    return (window.location.href = '/en/');
  }

  // 循环遍历每个cookie，找到需要的cookie值
  for (var i = 0; i < cookiesArray.length; i++) {
    var cookie = cookiesArray[i];
    var cookiePair = cookie.split('=');

    // 去除空格
    var cookieName = cookiePair[0].trim();

    if (cookieName === 'nf_lang') {
      var cookieValue = cookiePair[1];
      console.log('Cookie值为：' + cookieValue);

      if (cookieValue === 'zh-CN' || cookieValue === 'zh') {
        return (window.location.href = '/zh/');
      } else if (cookieValue === 'en-US' || cookieValue === 'en') {
        return (window.location.href = '/en/');
      } else {
        return (window.location.href = '/en/');
      }
    }
  }

  return (window.location.href = '/en/');
}
