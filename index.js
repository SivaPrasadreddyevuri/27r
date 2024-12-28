let students=[
    {id:1,s_name:"pavan",city:"hyd"},
    {id:2,s_name:"arjun",city:"sec"},
    {id:3,s_name:"meena",city:"vizag"},
    {id:4,s_name:"rahul",city:"bengalore"},
    {id:5,s_name:"sita",city:"chennai"},
    {id:6,s_name:"vijay",city:"mumbai"}
];

for(let i in students){
    console.log(students[i].s_name,students[i].city)
}
for(let i of students){
    console.log(i.s_name,i.city)
}