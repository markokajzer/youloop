// Change loop state and start video again if ended
function toggleLoopState(sendResponse) {
  var video = document.querySelector('video');

  if(video.ended && !video.loop) {
    video.play();
  }

  video.loop = !video.loop;

  state = video.loop ? "on" : "off";
  sendResponse({"state": state});
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message['toggleLoopState'] != undefined && message['toggleLoopState'] == true) {
    toggleLoopState(sendResponse);
  }
});
