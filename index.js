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
//   }
// while(false){
//   console.log("siva")
// }
// do{
//   console.log("prasad")
//   }
// while(false)
  //conditional loops
//simple-if

// if(true)
// {
//   console.log("hi")
// }
// //if-else
// if(true)
// {
//   console.log("true")
// }
// else{
//   console.log("false")
// }
 
// let user=prompt("admin")
// let login=true;
//  if(login==true)
//  {
//   if(user=="admin")
//     {
//       alert("welcome")
//     }
//     else{
//       alert("please Re-check User")
//     }
//  }
// else
// {
//   alert("please Login")
// }

//Switch Statement //it is compare expressions strictly both value and data type
//  let nam="SivaPrasadReddy";

// switch(nam)
// {
//   default:console.log("HI");
//   break;
//  case "reddy":console.log("SivaPrasadReddy");
//  case "prasad":console.log("prasad reddy");
// }

let arr=["siva","prasad","reddy", "evuri"]
let arr1=[]
 for(i=arr.length-1;i>=0;i--)
  {
    // console.log(arr[i])
    for(j=arr[i].length-1;j>=0;j--)
      {
        //console.log(arr[i][j])
        arr1[arr1.length]=arr[i][j]
      }
      //console.log(arr1)
    }


      console.log(arr1)


let str=""
for(i=0;i<8;i++)
{
 str+="*"
//  for(j=str.length-1;j>=0;j--)
//  {
//   str+=str[i][j]

//  }
console.log(str)
}
for(i=0;i<=20;i++)
{
  console.log(`15x${i}=${i*15}`)
}











