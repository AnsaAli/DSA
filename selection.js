


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
  
  const arr = [-6, 20, 8, -2, 4];
  let res = selectionSort(arr);
  console.log(res);
  