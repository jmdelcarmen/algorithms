'use strict';

var unsorted = [44,12,67,85,48,999,87,12,54];

function quickSort(arr) {
  var arrLen = arr.length;
  var pivotPosition = Math.floor(arrLen/2);
  var pivot = arr[pivotPosition];
  var left = [];
  var right = [];
  for (var i = 0; i < arrLen; i++) {
    if (arr[i] === pivot) {
      same.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(right)
}


console.log(quickSort(unsorted));
