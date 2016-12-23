'use strict';

function bill (str) {
  var bill = 0;
  var callPrice = 0;

  var longestCaller = {
    time: 0,
    number: ''
  };

  var callLogs = [];
  var callers = (str.split("\n"));
  var called = [];

  for (var i = 0; i < callers.length; i++) {
    callLogs.push(callers[i].split(','));

    if (callPrice == 0) {
      callPrice = timeToPrice(callLogs[i][0].split(':'))[0];
      longestCaller.time = timeToPrice(callLogs[i][0].split(':'))[1];
      called.push(callLogs[i][1]);
    }
    else {
      // if (called.indexOf(callLogs[i][1]) === -1) {
        callPrice += timeToPrice(callLogs[i][0].split(':'))[0];
        called.push(callLogs[i][1]);
        if (timeToPrice(callLogs[i][0].split(':'))[1] > longestCaller.time) {
          longestCaller.time = timeToPrice(callLogs[i][0].split(':'))[1];
          longestCaller.number = callLogs[i][1];
        }
      // }
    }


    // if (longestCallPrice == 0) {
    //   longestCallPrice = timeToPrice(callLogs[i][0].split(':'));
    // }
    // else if(longestCallPrice < timeToPrice(callLogs[i][0].split(':'))) {
    //   longestCallPrice = timeToPrice(callLogs[i][0].split(':'));
    // }
  }
  console.log('called: ',called);
  console.log('longest caller: ',longestCaller);
  // console.log(callLogs);
  return callPrice;
}










function timeToPrice(time) {
  var price = 0;
  var timeS = Number(time[0]) * 60 + Number(time[1]) * 60 + Number(time[2]);
  price += Number(time[0]) * 60 * 150;
  if (Number(time[1]) < 5 ) {
    price += Number(time[1]) * 3 * 60;
    price += Number(time[2]) * 3;
  }
  else {
    price += Number(time[1]) * 150;
    if (Number(time[2]) > 0 ) {
      price += 150;
    }
    else {
      price += Number(time[2]) * 3;
    }
  }
  return [price, timeS];
}

console.log('bill: ', bill("00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:20,400-234-090"));


// console.log('00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090'.replace(/[-:\n]/g, ','));
