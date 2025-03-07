

// // a.then((x)=>{console.log(x)}).catch((y)=>{console.log(y)})




//  function sample()
// {
//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//             if(true){
//                 resolve("hello world")
//             }
//             else
//             {
//              reject("promise is Rejected")
//             }
            
//         }, 2400);
//     })
    
// }
// // sample().then((x)=>{console.log(x)}).catch((y)=>{console.log(y)})

//   async function deal()
//   {
//     let result=  await sample();
//     console.log(result)
//  }
//  deal()








// normal way to getting Promises result

// let a= new Promise((res,rej)=>{
//     setTimeout(() => {
//         if(true){
//             res("hello world")
//         }
//         else{
//             rej("promise is rejected")
//         }

//     }, 2000);

// })

// a.then((x)=>{console.log(x)}).catch((y)=>{console.log(y)})

// function asynchronous(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             if(true){
//                 res("hello world")
//             }
//             else{
//                 rej("promise is rejected")
//             }
    
//         }, 2000);
    
//     })
// }
// asynchronous().then((x)=>{console.log(x)}).catch((y)=>{console.log(y)})


// getting/ handling promise results by using async and await keywords:


//  async function asynchronous1()
// {
//     let  x= await asynchronous()
//     console.log(x)
// }
// asynchronous1()



let url=fetch("https://jsonplaceholder.typicode.com/posts")
  

function asynchronous2(){
    return url
}
console.log(asynchronous2)