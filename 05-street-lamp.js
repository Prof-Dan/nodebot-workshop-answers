var five = require('johnny-five');
var board = new five.Board();
var led;
board.on('ready', function() {

  var sensor = new five.Sensor('A0');
  led = new five.Led(9);

  sensor.on('change', function() {

    if(this.value > 600) {

      led.on();

    }
    else led.off();

  });

});
