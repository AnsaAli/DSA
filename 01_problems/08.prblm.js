// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3
// 1 2
// 1

for(let i= 5; i > 0; i--){
    let row ='';
    for(let j=1 ; j <= i ; j++){
        row += j + ' '
    }
    console.log(row);
}

