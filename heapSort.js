function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    console.log('i',i)
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  console.log('largest',largest)
  let left = 2 * i + 1;
  console.log('left',left)
  let right = 2 * i + 2;
  console.log('right',right)

  if(left < n && arr[left]>arr[largest]){
    largest = left
  }
  if(right < n && arr[right]>arr[largest]){
    largest = right
  }
  if(largest != i){
    [arr[i], arr[largest]] = [arr[largest],arr[i]];
    console.log('swapped', [arr[i], arr[largest]] = [arr[largest],arr[i]])
    heapify(arr,n,largest)
  }
}
const arr = [-2,6,8,20,4]
let sort = heapSort(arr)
console.log(sort)