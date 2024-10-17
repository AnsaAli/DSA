let stack=[];

function add(value){
    stack.push(value);
}
function remove(){
    stack.pop()
}
function peek(){
    console.log(stack[stack.length-1])
}
add(1)
add(2)
add(3)
add(4)
peek()
remove()
peek()