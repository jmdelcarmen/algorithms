'use strict';

let str = '61/51+';

function evaluatePostfix (exp) {
  exp = exp.trim().replace(/\s/g, '');
  let operations = ['+', '-', '*', '/'];

  let result = [];

  function doOperation (x, y, operation) {
    if (operations.indexOf(operation) === 0) {
      return x + y;
    }
    else if (operations.indexOf(operation) === 1) {
      return x - y;
    }
    else if (operations.indexOf(operation) === 2) {
      return x * y;
    }
    else {
      return x / y;
    }
  }

  for (var i = 0; i < exp.length; i++) {
    if(!isNaN(exp[i])) {
      result.push(exp[i]);
    }
    else if (operations.indexOf(exp[i]) !== -1) {
      let b = result.pop();
      let a = result.pop();
      result.push(a, b, exp[i]);
    }
  }
  return result;
}

console.log(evaluatePostfix(str));
