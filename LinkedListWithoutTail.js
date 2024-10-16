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

    addValue(index,value){
         const newNode = new Node(value);
         if(index === 0){
            this.prepend(value)
         }else {
            let curr = this.head;
            let currIndex = 1;
            while( curr && currIndex < index){
                currIndex++;
                curr = curr.next
            }
            if(curr === null){
                console.log('Index is invalid')
            }
           
            newNode.next = curr.next
            curr.next= newNode;
         }
    }

    findMiddle(){
        let slow = this.head;
        let fast = this.head;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next
        }
        console.log('middle elemt: ',slow.value)
    }

    removeFrom(index){
        if(index === 0){
            console.log('removed value', this.head.value)
            this.head = this.head.next
           
        }else{
            let curr = this.head;
            let currIndex = 1;
            while(curr && currIndex < index){
                currIndex++
                curr= curr.next
            }
            if(curr.next === null){
                console.log('Invalid index')
                return
            }
            console.log('removed value',curr.next.value)
            curr.next = curr.next.next
          
            
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let nextPointer = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextPointer;
        }
        this.head = prev
    }

    display(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }

}

let LL = new LinkedList();
LL.prepend(10)
LL.prepend(20);
LL.prepend(30)
LL.prepend(40);
// LL.addValue(1,40);
// LL.append(4);
// console.log(LL.head)
LL.display()
console.log('------------------')
LL.addValue(1,5);
// LL.addValue(3,40);
// LL.addValue(4,50);
// console.log(LL.head)
LL.display()
LL.findMiddle();
// console.log('------------------')
// LL.removeFrom(5)
// LL.display()
console.log('------------------reverse')
LL.reverse();
LL.display();
