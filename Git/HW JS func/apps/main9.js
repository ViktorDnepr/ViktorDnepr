function timeInput(){

    hours = Math.floor(time / 3600);
    minutes = Math.floor((time / 60) % 60);
    seconds = time % 60;

    hours = String(hours);
    minutes = String(minutes);
    seconds = String(seconds);

    hours == 0 ? hours = '00' : hours.lenght == 1 ? hours = '0' + hours : false;
    minutes == 0 ? minutes = '00' : minutes.lenght == 1 ? minutes = '0' + minutes : false;
    seconds == 0 ? seconds = '00' : seconds.lenght == 1 ? seconds = '0' + seconds : false;

    return console.log("\u00AB" + hours + ":" + minutes + ":" + seconds + "\u00BB");

}

let hours = 0;
    minutes = 0;
    seconds = 0;
    time = parseInt(prompt('Input your seconds:   '));

timeInput(time);