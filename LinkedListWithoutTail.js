class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    prepend(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
    }

}

let LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(3);
LL.append(4);
console.log(LL.head)