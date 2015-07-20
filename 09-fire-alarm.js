var five = require('johnny-five');
var board = new five.Board();

var temperature;
var piezo;
var led;
var button;
var fire = false;
var alarm = false;
var _disabled = false;
var _sound = true;

var alarmTune = {

  song: [

    ['E4', 1/4],
    ['C#4', 1/4]

  ],
  tempo:100

};

board.on('ready', function() {

  temperature = new five.Temperature({pin:'A0',controller:'TMP36'});
  piezo = new five.Piezo(9);
  led = new five.Led(13);
  button = new five.Button(5);

  temperature.on("data", doTheLogic);

  button.on('press', function(){

    _disabled = true;
    alarm = false;

  });

});

function soundTheAlarm() {

  if(alarm) {

    piezo.play(alarmTune, soundTheAlarm);
    led.blink();

  }
  else {

    piezo.off();
    _sound = true;
    led.stop();
    led.off();

    //console.log('off');

  }

}

function doTheLogic(err, data) {
  if(data.celsius > 50) {

    fire = true;

  }
  else {

    _disabled = false;
    fire = false;

  }
  if(fire && !_disabled) alarm = true;

  //console.dir(data);

  if(!fire) {

    alarm = false;
    //console.log('offf');

  }

  if(alarm && _sound) {

    _sound = false;
    soundTheAlarm();

  }

  //console.log(alarm);

}
