'use strict';
//works!

var sums = [];

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    sums.push(Number(arr[i][j]) + Number(arr[i][j+1]) + Number(arr[i][j+2]) + Number(arr[i+1][j+1]) + Number(arr[i+2][j]) + Number(arr[i+2][j+1]) + Number(arr[i+2][j+2]));
  }
}
var max = sums.sort(function (a, b) {
  return b - a;
})[0];

console.log(max);
