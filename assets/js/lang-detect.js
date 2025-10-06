(function () {
  if (localStorage.getItem("langSet")) return;

  var userLang = (navigator.language || navigator.userLanguage || "").toLowerCase();

  // Map browser codes to site language codes
  let langMap = {
    "en": "en-us",
    "en-us": "en-us",
    "en-gb": "en-us",
    "zh": "zh-cn",
    "zh-cn": "zh-cn",
    "zh-sg": "zh-cn",
    "zh-hans": "zh-cn", // simplified
    "zh-hant": "zh-cn", // traditional
    "zh-hk": "zh-cn",
    "zh-tw": "zh-cn"
  };

  // Get mapped site language
  var siteLang = langMap[userLang] || "en-us";

  if (siteLang === "zh-cn" && !window.location.pathname.startsWith("/zh-cn")) {
    window.location.href =
      "/zh-cn" + window.location.pathname + window.location.search + window.location.hash;
  }

  localStorage.setItem("langSet", "true");
})();
