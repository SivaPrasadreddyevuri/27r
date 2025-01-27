let a=["html","css","JAVASCRIPT","react","ANGULARJS"]
let b=[]
for(i=0;i<a.length;i++)
{
   if(a[i]==a[i].toUpperCase())
   {
     b[b.length]=a[i].toLowerCase()
   }
   else
   {
    b[b.length]=a[i].toUpperCase()
   }
}
console.log(b)