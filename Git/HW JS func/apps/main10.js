function outSecTime(time){

    let hours, minutes, seconds, arrTime = [];

    arrTime = time.split(':');

    hours = parseInt(arrTime[0]);
    minutes = parseInt(arrTime[1]);
    seconds = parseInt(arrTime[2]);

    
    hours < 0 || hours > 24 || isNaN(hours) ? alert('Error! input time is not correct') : hours == undefined ? hours = 0 : false;
    minutes < 0 || minutes > 60 || isNaN(minutes) ? alert('Error! input time is not correct') : minutes == undefined ? minutes = 0 : false;
    seconds < 0 || seconds > 60 || isNaN(seconds) ? alert('Error! input time is not correct') : seconds == undefined ? seconds = 0 : false;

    hours = hours * 60 * 60;
    minutes = minutes * 60;
    seconds = seconds + minutes + hours;

    return seconds;
}

function outTime(time){

    let hours = Math.floor(time / 3600);
        minutes = Math.floor((time / 60) % 60);
        seconds = time % 60;

    hours = String(hours);
    minutes = String(minutes);
    seconds = String(seconds);

    hours.lenght == 1 ? hours = '0' + hours : false;
    minutes.lenght == 1 ? minutes = '0' + minutes : false;
    seconds.lenght == 1 ? seconds = '0' + seconds : false;

    return console.log("\u00AB" + hours + ":" + minutes + ":" + seconds + "\u00BB");

}

let time1 = prompt("Input first time according to the standart: hh:mm:ss:  ", "23:00:00"),
    time2 = prompt("Input second time according to the standart: hh:mm:ss:  ", "12:00:00"),
    seconds1 = 0,
    seconds2 = 0,
    time3 = 0;


    seconds1 = outSecTime(time1);
    seconds2 = outSecTime(time2);
    
    time3 = seconds1 - seconds2

    outTime(time3);