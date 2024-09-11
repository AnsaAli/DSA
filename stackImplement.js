class Stack {
  constructor() {
    this.items = [];
  }

  //add element
  addElement(element) {
    this.items.push(element);
  }

  //from  end
  removeElemnt() {
    if (this.items.length === 0) {
      console.log("Stack is empty");
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    console.log(this.items);
  }
}

const stack = new Stack();

stack.addElement(1);
stack.addElement(2);
stack.addElement(3);
stack.addElement(4)
stack.display();
stack.removeElemnt();
console.log(stack.isEmpty());
