class Node{
    //each node conatins a value and next pointer
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    //to check LL is empty
    isEmpty(){
        return this.size === 0
    }

    //find the size
    getSize(){
        return this.size;
    }
}