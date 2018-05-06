function getYouLoopSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z');
  svg.appendChild(path);
  return svg;
}


// Init this whole thing!
function init() {
  setTimeout(videoElementPresent() ? addYouLoop : init, 500);
}

function videoElementPresent() {
  return document.querySelector('video') !== null;
}

function addYouLoop() {
  insertYouLoopElement();
  addObserver();
  addContextMenuListener();
}

function insertYouLoopElement() {
  const newButton = document.createElement('a');
  newButton.classList.add('ytp-button', 'youloop-button');
  newButton.title = 'Loop Video';
  newButton.appendChild(getYouLoopSVG());
  newButton.addEventListener('click', toggleLoopState);

  document.querySelector('div.ytp-left-controls').appendChild(newButton);
}

function toggleLoopState() {
  const video = document.querySelector('video');
  video.loop = !video.loop;
  if (video.ended && video.loop) video.play();

  updateToggleControls();
}

function updateToggleControls() {
  const youloop = document.querySelector('.youloop-button');
  youloop.classList.toggle('active');
  youloop.setAttribute('title', isActive() ? 'Stop Looping' : 'Loop Video');
}

function isActive() {
  const youloop = document.querySelector('.youloop-button');
  return youloop.classList.contains('active');
}

// Adjust toggle controls when loop attribute of video is
// changed externally, e.g. via native context menu
function addObserver() {
  const video = document.querySelector('video');
  new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if ((video.getAttribute('loop') === null && isActive()) ||
          (video.getAttribute('loop') !== null && !isActive())) updateToggleControls();
    });
  }).observe(video, { attributes: true, attributeFilter: ['loop'] });
}

// Change state of YouTube context menu according to YouLoop when opening
function addContextMenuListener() {
  const video = document.querySelector('video');
  video.addEventListener('contextmenu', () => {
    setTimeout(() => {
      const checkbox = document.querySelector('[role=menuitemcheckbox]');
      checkbox.setAttribute('aria-checked', isActive());
      checkbox.addEventListener('click', toggleLoopState);
    }, 50);
  });
}


init();
console.log('Enjoy the awesome music!');
