//find the index of the the target tfrom an array, else return -1

function lineraSerach(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        return i
    }
  }
  return -1
}

console.log(lineraSerach([1,23,1,3,32,31],5))
