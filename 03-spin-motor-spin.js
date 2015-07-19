var five = require('johnny-five');
var board = new five.Board();
var motor;
board.on('ready', function() {

  console.log('ready');

  motor = new five.Motor(9);

  spinMotor();

})

function spinMotor() {

  motor.start(200);
  board.wait(2000, function() {

    motor.stop();
    board.wait(1000, function() {

      spinMotor();

    });

  })

}
