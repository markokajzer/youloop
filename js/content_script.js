'use strict';

const TITLE_OFF = 'Loop Video';
const TITLE_ON = 'Stop Looping';
const COLOR_OFF = '#fff';
const COLOR_ON = '#f12b24';

// Function to create svg for button
function getSVG() {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '70%');
  svg.setAttribute('width', '70%');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', COLOR_OFF);
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z');
  svg.appendChild(path);
  return svg;
}

// Add observer to video element to check if source was changed
// This happens when changing to another video in a playlist
function addObserver() {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if(mutation.attributeName == 'src') {
        updateToggleControls(COLOR_OFF, TITLE_OFF);
      }
    });
  });
  var config = { attributes: true };
  observer.observe(document.querySelector('video'), config);
}

// Update title and color of loop controls
function updateToggleControls(newColor, newTitle) {
  document.querySelector('.youloop-button').setAttribute('title', newTitle);
  document.querySelector('.youloop-button svg').setAttribute('style', 'fill: ' + newColor);
}

// Change loop state and start video again if ended
function toggleLoopState() {
  var video = document.querySelector('video');

  if(video.ended && !video.loop) {
    video.play();
  }
  video.loop = !video.loop;

  var color = video.loop ? COLOR_ON : COLOR_OFF;
  var title = video.loop ? TITLE_ON : TITLE_OFF;
  updateToggleControls(color, title);
}

// Add a button for toggling loop to the page
function addToggleControls() {
  var newButton = document.createElement('a');
  newButton.className = 'ytp-button youloop-button';
  newButton.title = TITLE_OFF;
  newButton.onclick = function() { toggleLoopState(); }
  newButton.appendChild(getSVG());
  var controls = document.querySelector('div.ytp-left-controls');
  controls.appendChild(newButton);
}

function init() {
  addToggleControls();
  addObserver();
}

init();
