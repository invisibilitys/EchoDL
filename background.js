var url1;
var url2;

function downloadVideo(info, tab) {
    chrome.tabs.create({url: url1});
};

function downloadVideo2(info, tab) {
    chrome.tabs.create({url: url2});
};

chrome.contextMenus.create({
  id: "dl1",
  title: "Video 1",
  contexts:["page"],
   documentUrlPatterns: ["https://echo360.org.au/lesson/*"]
});

chrome.contextMenus.create({
  id: "dl2",
  title: "Video 2",
  contexts:["page"],
   documentUrlPatterns: ["https://echo360.org.au/lesson/*"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "dl1") {
        downloadVideo(info, tab);
    }
    if (info.menuItemId == "dl2") {
        downloadVideo2(info, tab);
    }
});

var added = false;
if (!added){
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
         url1 = request.urls[0];
         url2 = request.urls[1];
    });
    added = true;
}