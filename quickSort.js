//worst case  O(n^2)
//Avg case O(n logn)
function quickSort(arr) {
  //base case
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
 
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));


function quick(arr){

  let pivot = arr[0];
  let left = [];
  let right = [];

  //base case
  if(arr.length < 2) return arr;

  for(let i=1;i<arr.length;i++){
     if(arr[i] < pivot){
      left.push(arr[i])
     }else{
      right.push(arr[i])
     }
  }

  return [...quick(left), pivot, ...quick(right)]
}
const arr1=[34,2,5,6,3,23]
const an =quick(arr1)
console.log('quick sort array',an)