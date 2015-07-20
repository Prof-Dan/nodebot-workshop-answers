var dnode = require('dnode');

var five = require('johnny-five');
var board = new five.Board();

var sensor;
var temp = 0;

board.on('ready', function() {

  sensor = new five.Temperature({controller:'TMP36', pin:'A0'});

  sensor.on("data", function(err, data) {
    temp = data.celsius;
  });

  var server = dnode({

    getTemperature: function() {

      console.log('getTemperature');

      this.end(temp);

    }

  });
  server.listen(1337);

});
