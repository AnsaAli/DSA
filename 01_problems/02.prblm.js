//find largest number in an array
function findLargestNumber(arr) {
    let largest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if( arr[i]> largest){
            largest = arr[i];
        }
    }
    return largest;
}