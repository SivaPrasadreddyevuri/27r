// // let a=prompt("enter your name")
// // console.log(a);
// a=[1,2,3,44,,5,8]
// console.log(a[a.length-1]);
// a[4]="hi";
// console.log(a)
let username=prompt("Enter Your Name");
let product=prompt("Enter Your ProductName");
let occassion=prompt("Occassion");
let price=prompt("price");
let day=prompt("day");
let platform=prompt("platform")
let obj={
    name:username,
    product:product,
    occassion:occassion,
    price:price,
    day:day,
    platform:platform

}
alert(`${obj.name} has purchased ${obj.product} which costs ${obj.price} on ${obj.day} on ${obj.occassion} in ${obj.platform}`)
//  let arr=[1,2,3,4,5,6,7,8]
// console.log(`smallest number in arr is ${arr[0]}and largest number in arr is ${arr[arr.length-1]}`)