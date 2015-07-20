var dgram = require('dgram');

var five = require('johnny-five');
var board = new five.Board();

var piezo;

var tune = {

  song:[

    ['A4', 1/6],
    ['G4', 1/6],
    ['F4', 1/6],
    ['A4', 1/6],
    ['G4', 1/6],
    ['F4', 1/6],
    ['C5', 1/2],
    ['C5', 1/2],
    ['A4', 1/2],
    ['F4', 1/2],
    ['F#4', 1/2],
    ['G4', 1/2],
    ['D5', 1/6],
    ['C5', 1/6],
    ['B4', 1.6],
    ['A4', 1/6],
    ['G4', 1/6],
    ['F4', 1/6],
    ['F4', 1/2],
    ['D4', 1/4],
    ['E4', 1/4],
    ['F4', 1/16],
    ['E4', 1/16],
    ['F4', 1/16],
    ['E4', 1/16],
    ['F4', 1/16],
    ['E4', 1/16],
    ['F4', 1/16],
    ['E4', 1/16],
    ['F4', 1/16],
    ['E4', 1/16],
    ['F4', 1/16],
    ['E4', 1/16],
    ['F4', 1/16],
    ['E4', 1/16],
    ['D4', 1/16],
    ['E4', 1/16],
    ['D4', 1/2]

  ],

  tempo:100

};

board.on('ready', function() {

  piezo = new five.Piezo(8);

  var s = dgram.createSocket('udp4');

  s.bind(1337);

  s.on('message', function() {

    piezo.play(tune);

  });

});
