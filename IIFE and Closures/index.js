// IIFE:(Immediately Invoke Function Expression)
// -->it is self called(invoke)
// -->it is execute only single time
// -->it is not suitable for re-using

// syntax:
//   ( function(){}())

  (function(a,b){console.log(a+b)}(5,8))



//   Closures:
//  def:Inner/Child function uses Outer/Parent function variables called Closures And varible contain lexical scope

function sample(){
   let x=65           // have lexical scope 

    function inner(){
  console.log(x)           // accessing called closures
    }
    inner()
}
sample()