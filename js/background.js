chrome.pageAction.onClicked.addListener(function(tab) {
  console.log('triggered!');
  chrome.tabs.sendMessage(tab.id, {"toggleLoopState" : true}, function(response) {
    // Set icon according to new state
    chrome.pageAction.setIcon({path: "icons/icon_" + response["state"] + ".png", tabId: tab.id});
  });
});
