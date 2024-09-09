// script.js
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('background-video');
    const toggleButton = document.getElementById('toggle-play');

    toggleButton.addEventListener('click', function () {
        if(video.paused){  // paused is a property of the htmlmediaelement object
            video.play();
            toggleButton.textContent="pause";
        }
        else{
            video.pause();
            toggleButton.textContent="play";
        }
    });
});
