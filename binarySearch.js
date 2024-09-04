//find target index from a SORTED ARRAY

function binarySearch(arr, target) {
  let leftIndx = 0;
  let rightIndx = arr.length - 1;

  if (leftIndx > rightIndx) return -1;

  while (leftIndx <= rightIndx) {
    let middleIndx = Math.floor((leftIndx + rightIndx) / 2);

    if (target === arr[middleIndx]) {
      return middleIndx;
    } else if (target < arr[middleIndx]) {
      rightIndx = middleIndx - 1;
    } else {
      leftIndx = middleIndx + 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 4, 5, 7, 8, 9, 12], 1));
