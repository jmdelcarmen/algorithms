'use strict';

function bill (str) {
  var longestCaller = {};
  var callLogs = [];

  var callers = (str.split("\n"));

  for (var i = 0; i < callers.length; i++) {
    // callers[i].split(':')
    callLogs.push(callers[i].split(','));
    console.log(callLogs[i][0]);
  }






  // console.log(callers);
  // console.log(callLogs);

}

console.log(bill("00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090"));
