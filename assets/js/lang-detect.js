(function () {
  // Prevent infinite loops — only once per session
  if (sessionStorage.getItem("langSet")) return;

  const userLang = (navigator.language || navigator.userLanguage || "").toLowerCase();

  // Map browser language → site language
  const langMap = {
    "en": "en-us",
    "en-us": "en-us",
    "en-gb": "en-us",
    "zh": "zh-cn",
    "zh-cn": "zh-cn",
    "zh-sg": "zh-cn",
    "zh-hans": "zh-cn",
    "zh-hant": "zh-cn",
    "zh-hk": "zh-cn",
    "zh-tw": "zh-cn",
  };

  // Determine mapped site language
  const siteLang = langMap[userLang] || (userLang.includes("zh") ? "zh-cn" : "en-us");
  const path = location.pathname;

  // Redirect logic
//  if (siteLang === "zh-cn" && !/^\/zh-cn(\/|$)/i.test(path)) {
//    sessionStorage.setItem("langSet", "true");
//    location.replace("/zh-cn" + path + location.search + location.hash);
//  } else if (siteLang === "en-us" && /^\/zh-cn(\/|$)/i.test(path)) {
//    sessionStorage.setItem("langSet", "true");
//    location.replace(path.replace(/^\/zh-cn/, "") + location.search + location.hash);
//  } else {
//    sessionStorage.setItem("langSet", "true");
//  }
})();
