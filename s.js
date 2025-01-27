let a=["html","css","JAVASCRIPT","react","ANGULARJS"]
let b=[]
for(i=0;i<a.length;i++)
{
   if(a[i]==a[i].toUpperCase())
   {
   b.push(a[i].toLowerCase())
   }
   else
   {
    b.push(a[i].toUpperCase())
   }
}
console.log(b)

       //OR

      //  for(i=0;i<a.length;i++)
      //   {
      //      if(a[i]==a[i].toUpperCase())
      //      {
      //      b[b.length]=a[i].toLowerCase()
      //      }
      //      else
      //      {
      //       b[b.length]=a[i].toUpperCase()
      //      }
      //   }
      //   console.log(b)    




      // 1.What will the following code output?
   // const arr = [1, 2, 3, 4];
   // const result = arr.map((num, index, array) => array[index] * 2);
   // console.log(result);
