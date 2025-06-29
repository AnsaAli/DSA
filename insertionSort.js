function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nTI = arr[i];
    let j = i - 1;

    //if there are more than 1 elmnt in the sorting
    while (j >= 0 && arr[j] > nTI) {
        arr[j + 1] = arr[j];
        j = j-1
    }
    arr[j + 1] = nTI 
  }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)  