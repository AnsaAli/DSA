
//base code
//what we need to return 
function recursionFibonacci(n){

    //base
    if(n < 2) return n;

    return recursionFibonacci(n-1) + recursionFibonacci(n-2)
}
console.log(recursionFibonacci(0));
console.log(recursionFibonacci(1));
console.log(recursionFibonacci(2))
console.log(recursionFibonacci(3))
console.log(recursionFibonacci(4))