
function bubbleSort(arr){

    let swapped;
    do{
    swapped = false;
    arr.forEach((value,i)=>{
        if(arr[i]> arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            swapped = true
        }
    })

    }while(swapped)
        return arr
}

const arr = [-6,20,8,-4,2]
let res = bubbleSort(arr)
console.log(res)