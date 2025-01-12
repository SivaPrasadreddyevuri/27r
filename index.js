    // let students=[
    //     {id:1,s_name:"pavan",city:"hyd"},
    //     {id:2,s_name:"arjun",city:"sec"},
    //     {id:3,s_name:"meena",city:"vizag"},
    //     {id:4,s_name:"rahul",city:"bengalore"},
    //     {id:5,s_name:"sita",city:"chennai"},
    //     {id:6,s_name:"vijay",city:"mumbai"}
    // ]
    // //by using for in and for of loops


    // //for-in
    // for(let i in students)
    // {
    //     console.log(students[i].s_name,"from",students[i].city);
    //     // console.log(i);
    // }

//for-of
//  for(let i of students){
//     console.log(i.s_name,"from",i.city)
//  }

//  for(i=0;i<=10;i++)
//  {
//     console.log(`5x${i}=${i*5}`)
//  }
//  let str="Welcome"
//  let str1=""
//  for(i=str.length-1;i>=0;i--)
// {
// str1+=str[i]
// // console.log(str1)
// }
// console.log(str1)
// st=""
// for(i=0;i<6;i++)
// {
// st+="*"
//     console.log(st)
// }
// //task1 checking strng Palindrom or not:
// let s_name="sivaavis"
// let s1="sivaavis"
// let op=""
// for(i=s_name.length-1;i>=0;i--)
// {
//     op+=s_name[i]
//     // console.log(s_name[i])
// }
// op===s1?console.log("s_name is palindrome"):console.log("not palindrome")

// //task2
// let a=["one","two","three","four"]
// let b=""
//  for(i=0;i<a.length;i++)
//  {
//     b+=a[i][1]
//  }
//  console.log(b)
   
//task3
//  let c=["one","two","three","four"]
//   for(i=0;i<c.length;i++)
//   {
//     console.log(c[i])
//     // for(i=c[i].length-1;i>=0;i--){

//     // }
//   }
// decleration of function
// function sum()
// {
//   console.log("hello")
// }
// sum()  // function invoke

// // function with parameters
// function sum(x,y)
// {
//   console.log(x+y);
// }
// sum(9,8)
// function with out parameters
// function sum()
// {
//   console.log("hello");
//   return "hi"
// }
// console.log(sum())

// // annoymous function
// // variable function
// var x=function () {

// }
// //eg:
// var x1=function(x,y)
// {
//   return x+y;
// }
// console.log(x1(6,5))
// // arrow function
// var x=()=>{

// }
// //eg:
// var x1=(x,y)=>
// {
//   return x+y;
// }
// console.log(x1(7,5))
// // arrow function with single parameter
//  var a=x=>x;
//  console.log(a(9,8))

//call back function

// function sample(x)
// {
//   x();                  // higher ordered function
//   console.log("hii")
// }
// sample(
//   function demo()
//   {                       // call back function
//     console.log("demo")
//   }
// )

function sample(x)
{
  x();                  // higher ordered function
  return "hiii"
}
console.log(sample(
  function demo()
  {                       // call back function
    console.log("demo")
  }
))







