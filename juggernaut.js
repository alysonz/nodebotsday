var five = require("johnny-five");
var board = new five.Board();
var keypress = require('keypress');

board.on("ready", function() {
  var motorLeft = new five.Motors([
    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M1
  ]);

  var motorRight = new five.Motors([
    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M2
  ]);

  process.stdin.on('keypress', function (ch, key) {
    if(key.name==='right'){
      motorLeft.stop();
      motorRight.speed(120);
    }
    if(key.name==='left'){
      motorRight.stop();
      motorLeft.speed(120);
    }
    if(key.name==='space'){
      motorRight.stop();
      motorLeft.stop();
    }
    if(key.name==='up'){
      motorRight.forward(120);
      motorLeft.forward(120);
    }
    if(key.name==='f'){
      motorRight.speed(255);
      motorLeft.speed(255);
    }
    if(key.name==='down'){
      motorLeft.rev(120);
      motorRight.rev(120);
    }
  });
});
