class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  //add elements in the rear,
  enequeue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  //remove from the front
  dequeue() {
    const item = this.items[this.front];
    if (!item) return console.log("Queue is empty");
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  //return front element
  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  display() {
    console.log(this.items);
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enequeue(1);
console.log(queue.dequeue());
console.log(queue.isEmpty());

queue.enequeue(1);
queue.enequeue(10);
queue.enequeue(20);
queue.enequeue(30);

queue.display();

console.log(queue.size());
console.log(queue.peek())