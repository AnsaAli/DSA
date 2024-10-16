function insertionSort(arr){
    arr.forEach((value,i)=>{
        let numToInsert = arr[i];
        let sortdIndx = i-1;
        while(sortdIndx >=0 && arr[sortdIndx]> numToInsert){
           arr[sortdIndx + 1] = arr[sortdIndx];
           sortdIndx--
        }
        arr[sortdIndx+1] = numToInsert
    })
    return arr
}

const arr = [-6,20,8,-2,4]
let res = insertionSort(arr)
console.log(res)