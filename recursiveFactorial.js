
function recursiveFactorial(n){

    //base code
    if(n < 2) return 1

    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(2))
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))