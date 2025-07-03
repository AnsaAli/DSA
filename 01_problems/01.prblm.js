//serach a num from an array and return its index
function findIndex(num,arr){
    for(let i=0;i < arr.length; i++){
        if(arr[i]=== num){
            return i;
        }
    }
}
let result = findIndex(5,[1,2,3,4,5,6,7,8,9]);
console.log(result); // Output: 4