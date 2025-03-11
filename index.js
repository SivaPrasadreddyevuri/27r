// // REGEX------Regular Expression
// //   It is a pattern  of  characters for searching/matching/validating input string especially  it is used in form validations 
// // Syntax=/pattern/

// // type:1(checking entire word)

// let pattern=/hello/
// let ip="hello"

// // checking inputs/ validating input  with  pattern

// let op=pattern.test(ip)   //.test() used for checking inputs.
// console.log(op)     //returns true

// // type:2(checking start and end missing single middle char)

// let pattern1=/c.t/ ;
// let pattern2=/c.l/
// let ip1="cut" ;
// let ip2="cool"
// let op1=pattern1.test(ip1);
// let op2=pattern2.test(ip2)
//  console.log(op1)           // returns true
// console.log(op2)            // returns false ,beacuse it allows only single char missing in the stat and ending char of a string


// type:3(checking starting word):

// let pattern=/^hello/   //'^' is identifies input must be starts with "hello" string only
// let ip="hello"
// let ip2="hi hello"
// let op=pattern.test(ip)
// let op2=pattern.test(ip2)
// console.log(op)        // true
// console.log(op2)       //false



// type:4(checking last word):

// let pattern=/something$/   //'$' is identifies input must be starts with "ing" string only
// let ip="something"
// let ip2="soon"
// let op=pattern.test(ip)
// let op2=pattern.test(ip2)
// console.log(op)        // true
// console.log(op2)       //false

// type:5(checking group of char):

// let pattern=/[abcde]/     // checking aleast one char in a group in a array i.e:a/b/c/d gives true other wise gives false
// let ip="abc"
// let op=pattern.test(ip)
// console.log(op)

//mentioning length for group:

// let pattern=/^[a-z]{4,10}$/;     //  "^[a-z]{4,10}$"  checks input must be 4 to 10 char of string in lowercase from a-z 
// let ip="abdgdjhgjh"
// let op=pattern.test(ip)
// console.log(op)




// let pattern=/^[a-zA-Z]{4,10}$/;     // checks input must be 4 to 10 char of string in lowercase and uppercase also from a-z 
// let ip="AAAAAAAAAA"
// let op=pattern.test(ip)
// console.log(op)

let pattern=/^[a-zA-Z][0-9]{4,10}$/;     // checks input must be 4 to 10 char of string in lowercase and uppercase, positive integers(0-9)  also from a-z 
let ip="a5555"
let op=pattern.test(ip)
console.log(op)