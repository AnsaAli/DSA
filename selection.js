


function selectionSort(arr) {
    arr.forEach((value,i)=>{
        let min = i;
        for(let j= i+1; j< arr.length; j++){
            if(arr[j]< arr[min]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    })

    return arr;
  }
  
  const arr1 = [-6, 20, 8, -2, 4];
  let res = selectionSort(arr1);
  console.log(res);

  function selection(arr){
    for(let i=0;i< arr.length-1;i++){
        let minValueIndex = i;
        
        //find the min valueindex from the arr
        for(let j=i+1; j< arr.length; j++){
            if(arr[minValueIndex] > arr[j]){
                minValueIndex = j
            }
        }
        
        //if minValueIndex is not i then swapp
        if(minValueIndex !== i){
            [arr[i],arr[minValueIndex]] = [arr[minValueIndex], arr[i]]
        }
    }
}
const arr=[34,2,5,6,3,23]
selection(arr)
console.log('selection sort array',arr)
  