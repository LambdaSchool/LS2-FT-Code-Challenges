/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */


class Array {
  constructor() {
    this.array = {};
    this.stack = [];
  }

  push(key, value) {
    this.object[key] = value;
    this.stack.push(key);
  }
  pop() {
    const key = this.stack.pop();
    let property = this.object[key];
    delete this.object[key];
    return property;
  }
  get(index) {
  }
  delete(index) {
  }
}

const testArray = new Array;


console.log(testArray.push(test, test));