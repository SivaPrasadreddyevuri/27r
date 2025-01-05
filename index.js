let students=[
    {id:1,s_name:"pavan",city:"hyd"},
    {id:2,s_name:"arjun",city:"sec"},
    {id:3,s_name:"meena",city:"vizag"},
    {id:4,s_name:"rahul",city:"bengalore"},
    {id:5,s_name:"sita",city:"chennai"},
    {id:6,s_name:"vijay",city:"mumbai"}
]
//by using for in and for of loops


//for-in
for(let i in students)
{
    console.log(students[i].s_name,"from",students[i].city);
    // console.log(i);
}

//for-of
 for(let i of students){
    console.log(i.s_name,"from",i.city)
 }

 for(i=0;i<=10;i++)
 {
    console.log(`5x${i}=${i*5}`)
 }
 let str="Welcome"
 let str1=""
 for(i=str.length-1;i>=0;i--)
{
str1+=str[i]
// console.log(str1)
}
console.log(str1)
st=""
for(i=0;i<6;i++)
{
st+="*"
    console.log(st)
}





