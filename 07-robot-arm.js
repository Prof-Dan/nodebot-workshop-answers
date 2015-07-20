var five = require('johnny-five');
var board = new five.Board();

var servo;

board.on('ready', function() {

  servo = new five.Servo(9);

  var pot = new five.Sensor('A2');
  pot.scale(0, 179);

  pot.on('change', function() {

    servo.to(this.value);

  });

})
