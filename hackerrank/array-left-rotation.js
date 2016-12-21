'use strict';

/*
Hackerrank URL: https://www.hackerrank.com/challenges/ctci-array-left-rotation
*/

//my solution
for (var i = 0; i < k; i++) {
  a.push(a.shift());
}
console.log(a.join(' '));
