let arr=[1,4,5,7,8,9,[9,10]]

// shallow copy using spread operator(...):

// let scopy=[...arr]
// scopy.push("hii")


// scopy[0]="hello"
// scopy[6][0]="world"


// console.log(scopy,"copied");
// console.log(arr,"original");



//  deepcopy using parsing and string at a time:

// let deepcopy=JSON.parse(JSON.stringify(arr))

// deepcopy[6][0]="heelo"
// console.log(deepcopy,"copied");
// console.log(arr,"original");

// using lodash shallow copy and deep copy:


const _=require("lodash")

let arr1=[2,4,6,8,9,[8,9]]

// let shallowcopy=_.clone(arr1)
// shallowcopy[1]="hiii"
// console.log(shallowcopy,"copied");
// console.log(arr1,"original")


// shallowcopy[5][0]="world"
// console.log(shallowcopy,"copied");
// console.log(arr1,"original")




// let deepcopy=_.cloneDeep(arr1)
// deepcopy[3]="hello"
// console.log(deepcopy,"copied");
// console.log(arr1,"original")

// deepcopy[5][0]="world"
// console.log(deepcopy,"copied");
// console.log(arr1,"original")


