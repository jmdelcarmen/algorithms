'use strict';

/*
* Queues
1. Linear Data structure.
2. Unlike stacks, queues only deletes oldest data
3. First in First out FIFO
*/


//Queue Implementation
function Queue () {
  this._oldestIndex = 1;
  this._newestIndex = 1;
  this._storage = {};
}

Queue.prototype.size = function () {

  return this._newestIndex - this._oldestIndex;
}
