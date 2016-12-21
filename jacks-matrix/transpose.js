'use strict';

var edge = 0;
function transpose (arr) {
  var newArr1 = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
  }
  console.log(newArr);
  var newArr2 = [];

  

}

var matrix = [[3,6,5],[2,9,3],[7,4,5]];

console.log(transpose(matrix));
// console.log(edge);

//
// function transpose(array) {
//   var newArr = [];
//   for (var i = 0; i < array.length; i++) {
//     newArr.push([]);
//   }
//
//   for (var i = 0; i < (array[0].length - edge); i++) {
//       var horizontalVal = array[edge][i + edge];
//       var verticalVal = array[i + edge][edge];
//
//       newArr[0][i] = verticalVal;
//       newArr[i][0] = horizontalVal;
//     }
//     return newArr;
// }
//
// console.log(transpose(matrix));
