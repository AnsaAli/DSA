
class Queue{
    constructor(){
        this.items = [];
    }

    //add elements 
    enequeue(element){
        this.items.push(element)
    }

    //remove element FIFO
    dequeue(){
        return this.items.shift(); //shift will remove from the beginning
    }

    //to check queue is empty or not
    isEmpty(){
        return this.items.length === 0;
    }

    //find the first element
    peek(){
        if(!this.isEmpty) {
            return this.items[0];
        }
        return null
    }

    //find the size of the queue
    size(){
        return this.items.length;
    }

    display(){
        console.log(this.items)
    }

}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enequeue(2);
queue.enequeue(3);
queue.enequeue(2);
queue.enequeue(3)

console.log(queue.isEmpty());

queue.display();

queue.dequeue();

queue.display();