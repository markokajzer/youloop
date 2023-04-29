function getYouLoopSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M20,7.5v10c0,1.4-1.1,2.5-2.5,2.5H12v3l-4-4l4-4v3h5.5c0.3,0,0.5-0.2,0.5-0.5v-10H20z M16,5l-4-4v3H6.5C5.1,4,4,5.1,4,6.5v10h2v-10C6,6.2,6.2,6,6.5,6H12v3L16,5z');
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
  newButton.style.opacity = '0.35'; // set opacity to 35% by default
  newButton.appendChild(getYouLoopSVG());
  newButton.addEventListener('click', toggleLoopState);

  document.querySelector('div.ytp-left-controls').appendChild(newButton);
}

function toggleLoopState() {
  const video = document.querySelector('video');
  const youloop = document.querySelector('.youloop-button');
  if (youloop.style.opacity === '0.35') {
    youloop.style.opacity = '0.8'; // set opacity to 80% when clicked
    video.loop = true;
    video.play();
  } else {
    youloop.style.opacity = '0.35'; // set opacity to 35% when clicked again
    video.loop = false;
  }

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
