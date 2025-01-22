// String Method's in Js

let str = "  HelloWorld  ";
let str2 = "html";
let str3 = "css js";
let str1 = str.charAt(0);
//  //getting requride character through index value by using string methods

//let str1= str.at(-1)
// //getting from reverse by using this method

// let str1=str.slice(2,5)
// //getting substring from original string
// don't modified original and parameter1 is starting index
// and paranmeter2 is ending index

// let str1=str.slice(3)
// //from 3 index to entire

// let str1=str.slice(-9,-3)
// // it allows reverse approach also by negative index

// let str1=str.substring(3,8)
// // it is same as slice but don't allow backward approach

// let str1=str.substring(-3,5)
// // it take negative value is zero(0)

// let str1=str.substring(7)
// //(from 7th index to entire)

// let str1=str.substr(3,6)
// // returns 3rd index to 6 lengthed string
// here 2nd parameter was length of getting string
// let str1=str.substr(-6,5)

//let str1=str.toUpperCase()
// chages string exicting case to entire string Upper Case

//let str1=str.toLowerCase()
//// chages string exicting case to entire string Lower Case

//let str1=str.concat(str2,str3)
//combines both strings into one string

//let str1=str.concat(str2,str3,"js","bootstrap")
//we can also add extra conntent by using concat() method

//let str1=str.trim()
// remove empty space from both front and end

// let str1=str.trimStart()
//remove empty space strating point only

//let str1=str.trimEnd()
// removoe empty space end only

//    let str1=str.repeat(3)
// reapeating string by giving count inside paranthasis()
// console.log(str1);

// console.log(str1)

let str4 = "";
function stringConversion(str5) {
  for (i = 0; i < str5.length; i++) 
    {
    if (str5[i] == str5[i].toUpperCase()) 
    {
      str4+=str5[i].toLowerCase()
    }
     else 
    {
      str4+=str5[i].toUpperCase()
    }
  }
}

stringConversion("aAbcgDfTYuweeKree");
console.log(str4)
// for(i=0;i<string.length;i++)
// {
//     if(string[i]==string[i].toUpperCase())
//     {
//         // console.log(`${string[i]} is Upper`)
//         str4+=string[i].toLowerCase()
//     }
//     else
//     {
//         // console.log(`${string[i]} is Lower`)
//         str4+= string[i].toUpperCase()
//     }
// }
// console.log(`Changed String is ${str4}`);
