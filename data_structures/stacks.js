'use strict';

/*
* STACKS
1. Linear data structure
2. Retains it's order even if items are removed
3. Example: Plates in cafeteria and Text editors
4. First in Last out FILO
*/

//Stack Implementation
function Stack () {
  this._size = 0;
  this._storage = {};
}
/*
if a new instance of Stack is create, _size increases
each instance of a stack has size and storage
*/

//Adding Data into the Stack
Stack.prototype.push = function (data) {
  let size = this._size++; //inc size of storage
  this._storage[size] = data; //assign the data to a key in the storage
}

//Removing Data from the Stack
Stack.prototype.pop = function () {
  let size = this._size, deletedData;

  if (size) { //check if there is data
    deletedData = this._storage[size]; //store deleted data in a variable

    delete this._storage[size]; //delete the data at top of stack
    this._size--; //dec size of storage

    return deletedDate;
  }
}
