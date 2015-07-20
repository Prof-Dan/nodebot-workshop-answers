var dgram = require('dgram');

var five = require('johnny-five');
var board = new five.Board();

var piezo;
board.on('ready', function() {

  piezo = new five.Piezo(8);

  var s = dgram.createSocket('udp4');

  s.bind(1337);

  s.on('message', function() {

    console.log('message');

    piezo.play({

      song:[

        ['C4', 1/8],
        ['E4', 1/8],
        ['G4', 1/8],

      ],

      tempo:100

    });

  });

});
