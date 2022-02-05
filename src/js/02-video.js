const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
import throttle from 'lodash.throttle';

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.setCurrentTime().then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            break;
    }
});

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);/*сохраняем "время" в локалСторидж*/
  }

player.on('timeupdate', throttle(onPlay, 1000));
 const saveTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(saveTime); 

