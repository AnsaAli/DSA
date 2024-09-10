
//O(n log n)
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  console.log("mergeSort", leftArr, rightArr);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArry = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArry.push(leftArr.shift());
    } else {
      sortedArry.push(rightArr.shift());
    }
  }
  console.log("merge", sortedArry,leftArr, rightArr);
  return [...sortedArry, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
