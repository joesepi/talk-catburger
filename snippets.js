'use strict';

module.exports = function(Catburger) {
  Catburger.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 14;
    var CLOSE_HOUR = 18;
    console.log('Current hour is ' - currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'Our cats are awake and probably causing mischief.';
    } else {
      response = 'Sorry, the catburgers are sleepering. Try again later';
    }
    cb(null, response);
  };
  Catburger.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};

