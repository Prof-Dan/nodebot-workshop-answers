var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {

  console.log('ready');

  var led = new five.Led(11);
//  led.blink(1000);

  this.repl.inject({

    led:led

  })

});
