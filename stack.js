/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.first = newNode;
      this.first.next = this.first;
      
  
      this.size++;
    
    }
   
  }
  

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.first == null){
      console.error("Error")
    }
  let oldFirst = this.first;
  
  if(this.first == this.last){
    this.first = null;
    this.size--;
    return oldFirst.val;
  }
  this.first = this.first.next;
  this.size--;
  return oldFirst.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size == 0){
      return true;
    }
    return false;
  }
}

module.exports = Stack;
