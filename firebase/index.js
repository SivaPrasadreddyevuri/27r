import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";
let signIn = document.getElementById("sign-in");
let signUp = document.getElementById("sign-up");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

signUp.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let pswrd = e.target[1].value;
  let pswrd2=e.target[2].value;
  createUserWithEmailAndPassword(auth, name, pswrd,pswrd2)
    .then((x) => {
      alert("Sign up successfully ");
      signUp.style.display = "none";
      btn2.style.display = "none";
      signIn.style.display = "inline-block";
      btn1.style.display = "inline-block"
})
    .catch((e) => {
      alert(`${e}Something Went Wrong`);
    });
});
btn2.addEventListener("click",()=>{
  btn2.style.display="none"
  signIn.style.display="inline-block"
  signUp.style.display="none"
  btn1.style.display="inline-block"

})
btn1.addEventListener("click",()=>{
  btn1.style.display="none"
  signIn.style.display="none"
  btn2.style.display="inline-block"
  signUp.style.display="inline-block"
})
signIn.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=e.target[0].value
    let pswd=e.target[1].value
    signInWithEmailAndPassword(auth,name,pswd)
    .then((x)=>{
        alert("Login Successfully")
    })
    .catch((e)=>{

    alert("error")})
})
