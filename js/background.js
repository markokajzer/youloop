// Whenever clicked, execute content_script
chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    file: "js/content_script.js"
  });
});

// Receive message from content_script update accordingly
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.pageAction.setIcon({path: "icons/icon_" + request["state"] + ".png", tabId: sender.tab.id});
});
