// Change loop state and start video again if ended
function toggleLoopState() {
  var video = document.querySelector('video');

  if(video.ended && !video.loop) {
    video.play();
  }

  video.loop = !video.loop;

  state = video.loop ? "on" : "off";
  return { state: state };
}

// Send message to background.js
chrome.runtime.sendMessage(toggleLoopState());
