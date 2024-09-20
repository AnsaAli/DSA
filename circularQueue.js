class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;

    //initially front and rear are empty
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enequeue(element) {
    if (!this.isFull()) {
      
      this.rear = (this.rear + 1) % this.capacity;
     
      this.items[this.rear] = element;
     
      this.currentLength += 1;
     
      if (this.front === -1) {

        this.front = this.rear;
      
      }
    }
  }

  dequeue() {
    if (this.isEmpty) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  peek() {
    if (!isEmpty()) {
      return this.items[this.front];
    }

    return null;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Circular queue is empty");
    }
    let str = "";
    let i;
    
    for (i = this.front; i !==  this.rear; i = (i + 1) % this.capacity) {
       
      str += this.items[i] + " ";
      
    }
    str += this.items[i]
    console.log(str);
  }
}

const circluarQueue = new CircularQueue(5);

// console.log(circluarQueue.isFull());

circluarQueue.enequeue(10);
circluarQueue.enequeue(20);
circluarQueue.enequeue(30);
// circluarQueue.enequeue(40);
// circluarQueue.enequeue(50);

circluarQueue.display();



