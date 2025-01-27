let arr=[1,4,5,"siva",7,9,12] // declaring array literal approach

//declaring array via array constructer

// let arr1=new Array(1,2,3,5,"hi",5)

// // array methods:

// let str=arr.toString()// array to string
// console.log(typeof str)
// console.log(typeof arr)


// let a=[1,5,6,8,9,3,4,5,6,"hello"]
//  let b=a.at(-4)
//  console.log(b)

//  let s=a.slice(-3,-1)
//  console.log(s)
//  let s1=a.slice(3,5)
//  console.log(s1)

//  let join=a.join("-")
//  console.log(join)
//  console.log(typeof join)
//  console.log(a)

//  let removingLastElement=a.pop()
// console.log(a)
// console.log(typeof removingLastElement)

// let addingAtLast=a.push("array")
// console.log(a)

// let shift=a.shift()
// console.log(a)
// console.log(shift)

// let unshift=a.unshift("3")//add an element to array at first
// console.log(a)
// console.log(unshift)

// let splice=a.splice(6)// for giving single parameter it will return no.of elements accordingly to given parameter
// console.log(a)

// let splice2=a.splice(2,2,"hi","98")
// console.log(a)
// console.log(splice2)


    


//find() method:

// let arr1=[2,6,9,"hi","siva","Apple" ]
// // let op=arr1.find(function(x,y,arr1)
// // {
// //    return x.length>4
// // })
// // console.log(op)
// let op=arr1.findLastIndex((value,index,arr1)=>{
//     return value.length>2
// })
// console.log(op)

let arr2=["hi","hello","welcome","Done"]

// let op=arr2.map((value,index,arr2)=>{
// // console.log(arr2[1])
// console.log (value+2)
// })

// console.log(op)
// let b=arr2.map((x,y,arr2)=>{
    
//    return (x.length+3)
// })
// console.log(b)

arr2.map((x,y,arr2)=>{
     console.log(x.slice(0,-1)+x.at(-1).toUpperCase())
})




// let br=["siva","si","va"]

//  let o=br.map(function(value,index,br)
// {
//     return value+"hello"     // by using return we get new array
// })
// console.log(o)



// br.map(function(value,index,br)
// {
// console.log (value+"hello")     // by using console we get new array
// })

// let arr4=["hi","java","apple","red"]
//  let y=arr4.map(function(value,index,arr4)
//  {
//   return value.slice(0,-1)+value.at(-1).toUpperCase()
//  })
// console.log(y)