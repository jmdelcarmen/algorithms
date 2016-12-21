'use strict';

var Queue = function () {
  this.content = {};
  this.count = 0;
}

Queue.prototype.dequeue = function () {
  if (this.count !== 0) {
    delete this.content["0"];
    //adjusts the Queue
    for (var i = 0; i < this.count; i++) {
      this.content[i] = this.content[i + 1];
      if (i + 1 === this.count) {
        delete this.content[this.count - 1];
      }
    }
    this.count--;
  }
}

Queue.prototype.enqueue = function (data) {
  this.content[this.count] = data;
  this.count++;
}

Queue.prototype.isEmpty = function () {
  return this.count === 0 ? true : false;
}

Queue.prototype.peek = function () {
  return this.content["0"];
}

Queue.prototype.indexOf = function (data) {
  for (var prop in this.content) {
    if (this.content[prop] === data) {
      return prop;
    }
  }
}


var queue = new Queue();
queue.enqueue('marco');
queue.enqueue('marco1');
queue.enqueue('marco2');
queue.enqueue('marco3');
queue.enqueue('marco4');
queue.dequeue();
queue.peek();
queue.isEmpty();
