'use strict';

function LFUcache (cap) {
  this.cap = cap;
  this.content = {};
  this.length = 0;
}

LFUcache.prototype.get = function(key) {
  if (this.length) {
    this.content[key].visits ++;
    return this.content[key].value;
  }
  return;
}

LFUcache.prototype.set = function(key, value) {
  if(this.length === this.cap) {

    var leastVisitedKey = -1;

    for(var prop in this.content) {
      if (leastVisitedKey == -1) {
        leastVisitedKey = prop;
      }

      if(this.content[prop].visits < this.content[leastVisitedKey].visits) {
        leastVisitedKey = prop;
      }
    }
    this.content[key] = { value: value, visits: 0};
    delete this.content[leastVisitedKey];
  }
  else {
    this.content[key] = { value: value, visits: 0};
    this.length ++;
  }
}

var lfuc = new LFUcache(3);
lfuc.set(1,1)
lfuc.set(2,2)
console.log(lfuc.get(1)) // 1
lfuc.set(3,3)
console.log(lfuc.get(1)) // 1
lfuc.set(5,5)
console.log(lfuc.get(5)) // 5
console.log(lfuc)
