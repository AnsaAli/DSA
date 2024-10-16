class Node {
  //each node conatins a value and next pointer
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //to check LL is empty
  isEmpty() {
    return this.size === 0;
  }

  //find the size
  getSize() {
    return this.size;
  }

  //add value at the begining of the list
  prepend(value) {
    //create a node
    const node = new Node(value);

    //if list is empty
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    //increase the size
    this.size++;
  }

  //add value at the end of the list
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  //add value in a given index position
  insert(value, index) {
    const node = new Node(value);

    if (index < 0 || index > this.size) {
      return console.log("Invalid index");
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index > 0) {
      let prev = this.head;

      //loop must exist just before the given index
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      // index 2 > prev = 1 node.next = prev.next
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return console.log("List is empty");
    }
    const value = this.head.value;
    this.head = this.head.next;

    this.size--;

    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return console.log("List is empty");
    }

    const value = this.tail.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let prev = this.head;
      while(prev.next !== this.tail){
        prev= prev.next
      }
      prev.next = null;
      this.tail = prev
    }
    this.size--;
    return value
  }

  //remove from an index
  remove(index){
    if(index < 0 || index > this.size){
        return console.log('Index is invalid')
    }

    let removeNode;
    if(index === 0){
        this.removeFromFront()
    }else if (index > 0){
        let prev = this.head;
        for(let i =0 ; i < index - 1; i++){
            prev = prev.next
        }
        removeNode = prev.next ;
        prev.next = removeNode.next
    }
    this.size--;
    return removeNode.value
  }

  removeValue(value){
    if(this.isEmpty()){
        return console.log('List is empty')
    }

    if(this.head.value === value){
       this.head = this.head.next;
       this.size--;
       return value
    }else{
        let prev = this.head;
        while(prev.next && prev.next.value !== value){
            prev = prev.next;
        }
        if(prev.next){
            let removeNode = prev.next;
            prev.next = removeNode.next;
            this.size--;
            return removeNode
        }

        return console.log('No such value exist')
    }
  }

  reverse(){
    let prev = null;
    let curr = this.head;
    while(curr){
        let nextPointer = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextPointer
    }
    //need to change the head pointer 
    this.head = prev
  }

  //to print the linked list
  print() {
    if (this.isEmpty()) {
      return "Linked list is empty";
    }

    let listValues = "";
    let curr = this.head;
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }

  findMid(){
        let slow = this.head;
        let fast = this.head
        
        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.value)
    }
}

const linkedList = new LinkedList();

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.print();

console.log(linkedList.isEmpty());
console.log(linkedList.getSize());

linkedList.append(40);
linkedList.prepend(0);
linkedList.insert(80, 3);
linkedList.print();

linkedList.reverse();
linkedList.print()






