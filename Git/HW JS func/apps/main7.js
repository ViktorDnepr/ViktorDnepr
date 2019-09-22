function timeInput(time) {
    let hours, minutes, seconds, arrTime = [];

    arrTime = time.split(":");

    hours = parseInt(arrTime[0]);
    minutes = parseInt(arrTime[1]);
    seconds = parseInt(arrTime[2]);

    hours < 0 || hours > 24 || isNaN(hours) || undefined ? hours = 0 : false;
    minutes < 0 || minutes > 60 || isNaN(minutes) || undefined ? minutes = 0 : false;
    seconds < 0 || seconds > 60 || isNaN(seconds) || undefined ? seconds = 0 : false;

    hours = String(hours);
    minutes = String(minutes);
    seconds = String(seconds);

    hours.length == 1 ? hours = "0" + hours : false;
    minutes.length == 1 ? minutes = "0" + minutes : false;
    seconds.length == 1 ? seconds = "0" + seconds : false;

    return console.log("\u00AB" + hours + ":" + minutes + ":" + seconds + "\u00BB");

}

let inTime = prompt("Input time according to the standart: hh:mm:ss");

timeInput(inTime);