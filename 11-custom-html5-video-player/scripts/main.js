// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullScreen = player.querySelector('.fullscreen');

// Build functions

// Play or pause the video
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// Change the play/pause button icon according to the video state
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

// Skip ahead or previous
function skip(){
    // Change the current video time to our skip value 
    video.currentTime += parseFloat(this.dataset.skip);
}

// Handle the volume and speed of video
function handleRangeUpdate(){
    // Change the video's volume/speed to the value of we have selected on that particular range
    video[this.name] = this.value;
}

// Automatically update the progress bar as the video plays
function handleProgess(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Handle the scrubbing feature
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Toggle in and out of fullscreen mode
function enterFullScreen(){
    if(!video.webkitDisplayingFullscreen){
        video.webkitRequestFullScreen();
    }else{
        document.webkitExitFullscreen();
    }
}

// Hook up the event listeners 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgess);
video.addEventListener('dblclick', enterFullScreen);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

fullScreen.addEventListener('click', enterFullScreen);