'use strict';

function solution(t) {
  let timeS = t;
  let h = 0;
  let min = 0;
  if (timeS >= 60 ) {
    if (timeS >= 3600) {
      h = Math.floor(timeS/3600);
      timeS -= h*3600;
    }
    min = Math.floor(timeS/60);
    timeS -= min*60;
  }
return `${h}h${min}m${timeS}s`;
}

console.log(solution(83643));
