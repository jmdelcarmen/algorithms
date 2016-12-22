'use strict';

function oneSwap (arr) {
  let diff = 0;
  let unsorted = arr.slice();
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (unsorted[i] !== sorted[i]) {
      diff++;
    }
  }
  return !(diff > 2);
}

console.log(oneSwap([1,5,3,3,7]));
