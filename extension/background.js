var DEFAULT_YANDEX = "https://yandex.ru/images/search?img_url=";
var SEARCH_URL_END = "&rpt=imageview";
var DEFAULT_SAUCENAO = "https://saucenao.com/search.php?url=";
var DEFAULT_GOOGLE = "https://images.google.com/searchbyimage?site=search&image_url=";

function openTabAfterCurrent(url){
  browser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    browser.tabs.create({
      url:url,
      index:tabs[0].index + 1,
      active:false
    });
  });
}

function reverseImage(info){
  var searchstring = info.srcUrl;
  
  var sau = DEFAULT_SAUCENAO + searchstring;
  var yan = DEFAULT_YANDEX + searchstring + SEARCH_URL_END;
  var goo = DEFAULT_GOOGLE + searchstring;
  
  openTabAfterCurrent(sau);
  openTabAfterCurrent(yan);
  openTabAfterCurrent(goo);
}

browser.contextMenus.create({title:"Search for image source", contexts:["image"], onclick:reverseImage});