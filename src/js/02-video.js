// В HTML есть < iframe > с видео для Vimeo плеера.Напиши скрипт который будет сохранять текущее время 
// воспроизведения видео в локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить 
// видео с этого времени.
// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2. Добавь библиотеку как зависимость проекта через npm.
// 3. Инициализируй плеер в файле скрипта как это описано в секции pre - existing player,
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// 4. Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// 5. Сохраняй время воспроизведения в локальное хранилище.Пусть ключом для хранилища будет 
// строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение 
// с сохраненной позиции.
// 7. Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось 
// в хранилище не чаще чем раз в секунду.

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

