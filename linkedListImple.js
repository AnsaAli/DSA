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


    //add value at the begining of the list
    prepend(value){
        //create a node
        const node = new Node(value);

        //if list is empty
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
           node.next = this.head;
           this.head = node;
        }
        //increase the size
        this.size++;
    }

    //add value at the end of the list
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
           this.head = node;
           this.tail = node;
        }else{
           this.tail.next = node;
           this.tail = node;
        }
        this.size++
    }

    //to print the linked list
    print(){
        if(this.isEmpty()){
            return 'Linked list is empty';
        }

        let listValues = '';
        let curr = this.head;
        while(curr){
            listValues += `${curr.value } `
            curr = curr.next;
        }
        console.log(listValues)

    }
}

const linkedList = new LinkedList()


linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.print();

console.log(linkedList.isEmpty())
console.log(linkedList.getSize())

linkedList.append(40);
linkedList.print();

linkedList.prepend(0);
linkedList.print();