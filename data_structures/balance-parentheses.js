'use strict';

let str = '{}[][][][][][][][]';

function checkBalance(parenStr) {
  let open = parenStr.match(/[\{\(\[]/g);
  let close = parenStr.match(/[\}\)\]]/g);

  if (open.length !== close.length) {
    return false;
  }

  function checkCloser (nextOpenCharCode, nextCloseCharCode, i) {
    if (unclosed[unclosed.length - 1] === String.fromCharCode(nextOpenCharCode) && parenStr[i] === String.fromCharCode(nextCloseCharCode)) {
      return true;
    }
    return false;
  }

  let unclosed = [];

  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i].match(/[\{\(\[]/g)) {
      unclosed.push(parenStr[i]);
    }
    else if (checkCloser(40, 41, i) || checkCloser(123, 125, i) || checkCloser(91, 93, i)) {
      unclosed.pop();
    }
  }

  if (unclosed.length === 0) {
    return true;
  }
  return false;
}


console.log(checkBalance(str));
