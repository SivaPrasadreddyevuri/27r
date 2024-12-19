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
let student=prompt("Enter Your Name");
let company=prompt("Company");
let domain=prompt("domain");
let package=prompt("package");
let joindate=prompt("joindate");
let obj1={
    sn:student,
    cn:company,
    domain:domain,
    package:package,
    joindate:joindate
}
alert(`${obj1.sn}got placed in ${obj1.cn} as a ${obj1.domain}with package of ${obj1.package} and the joining date is on coming ${obj1.joindate}`)