// const students = [
//     { id: 1, name: 'Alice', score: 85, class: 'A' },
//     { id: 2, name: 'Bob', score: 92, class: 'B' },
//     { id: 3, name: 'Charlie', score: 78, class: 'A' },
//     { id: 4, name: 'David', score: 95, class: 'C' },
//     { id: 5, name: 'Eva', score: 89, class: 'A' },
//     { id: 6, name: 'Freddy', score: 90, class: 'C' },
//   ];

//   //find the maximum score


//   //display total score


//   let arr=[]
//   let count;
//   for(let i=0;i< students.length;i++){
//    if(students[i].class = arr){
//      count++
//    }else{
//     arr.push(students[i].class)
//    }
//    return count
//   }

//   console.log(count)

//   ///////////////
//   let obj = {}
  
//   students.forEach((a)=>{
//       if(obj[a.class]){
//           obj[a.class]++
//       }else{
//           obj[a.class]=1
//       }
//   })
  
//   console.log(obj)
// //////////////////////
// let obj = {}
//   let scoreObj = {}
  
//   students.forEach((a)=>{
//       if(obj[a.class]){
//           obj[a.class]++
//           scoreObj[a.class]+=a.score
//       }else{
//           obj[a.class]=1
//           scoreObj[a.class]=0
//       }
//   })
  
//   console.log(obj)
//   console.log(scoreObj)


//   ////-----------------------------
//   const stu = []
//   students.forEach(function(value){
//     const ss = stu.find( (val) => val.class == value.class)
//     if(ss){
//         ss.count++;
//     } else {
//         stu.push({ class: value.class, count: 1 })
//     }
// })



// console.log(stu)



// /////////////
// students.forEach(function(value){
//     const ss = stu.find( (val) => val.class == value.class)
//     if(ss){
//         ss.count++;
//         if(ss.max < value.score){
//           ss.max = value.score;
//         } 
//         ss.totalScore += value.score;
//     } else {
//         stu.push({ class: value.class, count: 1, totalScore: value.score, max: value.score })
//     }
// })

// console.log(stu)


// //answer
// {
//     "class": "C",
//     "count": 2,
//     "totalScore": 185,
//     "max": 95
// }


// let target = {
//     message: "Hello",
// };

// let handler = {
//     get: function (target, property) {
//         return property in target ? target[property] : "Property does not exist";
//     },
// };

// let proxy = new Proxy(target, handler);

// console.log(proxy.message);  // "Hello"
// console.log(proxy.nonExistentProperty); // "Property does not exist"