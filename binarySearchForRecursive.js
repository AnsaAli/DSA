//sorted array
function binarySearchRecursive(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftInx, rightIndx) {
 if (leftInx > rightIndx) {
    return -1;
  } else {
    let middleIndx = Math.floor((leftInx + rightIndx) / 2);

    if (target === arr[middleIndx]) {
      return middleIndx;
    } else if (target < arr[middleIndx]) {
      return search(arr, target, leftInx, middleIndx - 1);
    } else {
      return search(arr, target, middleIndx + 1, rightIndx);
    }
    return -1;
  }
 
}

console.log(binarySearchRecursive([1,2,3,4,5,6,7],2))