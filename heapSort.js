// Function to perform heap sort on the array
function heapSort(arr) {
  let n = arr.length;

 // Step 1: Build a max-heap
  // Start heapifying from the last non-leaf node, which is calculated as Math.floor(n / 2) - 1
  // We need to heapify the tree from bottom to top to ensure that the largest elements are at the top.
  //this step will convert the arr into complete binary tree.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i); // Call heapify to create the max heap
  }

   // Step 2: Sorting the array
  // After building the max-heap, the largest element is at the root (index 0).
  // We then call heapify again to restore the heap property for the reduced array.
  for (let i = n - 1; i > 0; i--) {
     // Swap the first element (largest element) with the last element
    [arr[0], arr[i]] = [arr[i], arr[0]]; // This places the largest element at the end of the array
 // Call heapify on the reduced heap (exclude the last element, which is now sorted)
    heapify(arr, i, 0);
  }

  return arr;
}
// Function to maintain the max-heap property
function heapify(arr, n, i) {
  let largest = i;  // Assume the largest element is the root
  let left = 2 * i + 1;// Left child of the current node
  let right = 2 * i + 2;// Right child of the current node

  // Check if left child exists and is greater than the current largest
  if(left < n && arr[left]>arr[largest]){
    largest = left
  }
   // Check if right child exists and is greater than the current largest
  if(right < n && arr[right]>arr[largest]){
    largest = right
  }
  // If the largest is not the current node, swap the elements
  if(largest != i){
    [arr[i], arr[largest]] = [arr[largest],arr[i]];
    // Recursively call heapify on the affected subtree
    heapify(arr,n,largest) // Ensure the heap property is maintained in the subtree
  }
}
const arr = [-2,6,8,20,4]
let sort = heapSort(arr)
console.log(sort)

