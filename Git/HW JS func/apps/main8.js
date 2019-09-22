function timeInput(time) {
    let hours, minutes, seconds, arrTime = [];

    arrTime = time.split(":");

    hours = parseInt(arrTime[0]);
    minutes = parseInt(arrTime[1]);
    seconds = parseInt(arrTime[2]);

    hours < 0 || hours > 24 || isNaN(hours) ? alert('Error! input time is not correct') : hours == undefined ? hours = 0 : false;
    minutes < 0 || minutes > 60 || isNaN(minutes) ? alert('Error! input time is not correct') : minutes == undefined ? minutes = 0 : false;
    seconds < 0 || seconds > 60 || isNaN(seconds) ? alert('Error! input time is not correct') : seconds == undefined ? seconds = 0 : false;

    hours = hours * 60 * 60;
    minutes = minutes * 60;
    seconds = seconds + minutes + hours;

    return seconds + ' seconds';

}

let inSecond = prompt("Input time according to the standart: hh:mm:ss");

console.log(timeInput(inSecond));