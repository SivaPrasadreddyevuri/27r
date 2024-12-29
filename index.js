let students=[
    {id:1,s_name:"pavan",city:"hyd"},
    {id:2,s_name:"arjun",city:"sec"},
    {id:3,s_name:"meena",city:"vizag"},
    {id:4,s_name:"rahul",city:"bengalore"},
    {id:5,s_name:"sita",city:"chennai"},
    {id:6,s_name:"vijay",city:"mumbai"}
];

for(let i in students){
    console.log(students[i].s_name,"from",students[i].city)
}
for(let i of students){
    console.log(i.s_name,"from",i.city)
}

// for(i=1;i<=10;i++){
//     console.log(`5x${i}=${i*5}`)
// }
// for(i=20;i>=1;i--){
//     console.log(`15x${i}=${15*i}`)
// }
// let str="welcome"
// // using for loop print each character line by line.
// // for(i=0; i<str.length;i++){
// //     console.log(str[i])
// // }
// let op=""
// for(i=str.length-1;i>=0;i--){
//   op=op+str[i];
// }
// console.log(op)
//  let o=""
//  for(i=1;i<=8;i++){
//     o+="*"
//     console.log(o) 
//  }
// console.log(o)