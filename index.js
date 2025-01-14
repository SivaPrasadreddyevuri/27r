// level 1 tasks

// Problem 1: FizzBuzz with "Hello" and "Javascript"
        // Write a program using a loop that prints the numbers from 1 to 100, but for multiples of 3 print 
        // "Hello" and for multiples of 5 print "Javascript". For numbers that are multiples of both 3 and 5, print 
        // "Hello Javascript"

        // for(i=1;i<=100;i++)
        // {
         
        // }

//problem 2: checking Year is Leap Or Not?

// function isLeapOrNot(year)
// {
//     if(year%400===0){
//         alert(` true ${year} is Leap year`)
//     }
//     else
//     {
//         alert(` false ${year} is Not a Leap Year`)
//     }
// }
// isLeapOrNot(prompt("Enter a Year for Checking Leapyear Or Not"));

// Problem 3: Calculate Factorial
// Create a function factorial that calculates the factorial of a number n.


// factorial(prompt("Enter a Positive Integer"))

// Problem 4: Print Even Numbers Up to a Given Number?


// let arr=[]
// function isEvenOrNot(input)
// {
//   if(input%2==0)
//   {
//     for(i=0;i<=input;i=i+2)
//     {
//         arr[arr.length]=i
//     }
//   }
//  return arr;
// }
// console.log(isEvenOrNot(prompt("Enter a Positive Integer")));






//Problem 5: Multiplication Table? by taking input via prompt

// function multiplicationTable()
// {
// let num=prompt("Enter Number For Getting Multiplication Table For that:")
// for(i=1;i<=10;i++)
// {
// console.log(`${num}x${i}=${i*num}`)
// }

// }
// multiplicationTable()


//Problem 6: Greet User
// Write a function greetUser that takes a name as a parameter and prints a greeting message. 
// Call the function to greet a user whose name is entered by the user. (Use `prompt` to enter the user 
// name).
   
// function wish(x)
// {
//   // console.log(`hello ${x}!`)
//   alert(`Hello ${x}!`)
// }
// wish(prompt("Enter Name"))

// DOM TASK:
// ---------------
// Create an ID-Card using DOM

let div1 = document.createElement("div");
      let pic = document.createElement("img");
      let desc = document.createElement("p");
      let clg = document.createElement("h2");
      function display()
      {
        document.body.append(div1);
      div1.style.border = "1px solid";
      div1.style.height = "500px";
      div1.style.width = "350px";
      div1.style.margin = "auto";
      desc.style.marginLeft = "15px";
      div1.style.backgroundColor = "skyblue";
      div1.style.borderRadius="60px"
      div1.style.boxShadow="-6px 10px 25px Green";
    //   div1.style.transform="translateY(20px)"

      //append all the Content
      div1.append(clg);
      div1.append(pic);
      div1.append(desc);
      //adding image 
      pic.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDRP4WH3D0p03Z8EYsBu669ZXVF_HO5S8Sw&s"
      );
      pic.style.width = "130px";
    //   pic.style.height = "px";
      pic.style.marginLeft="100px" ;
      desc.innerHTML =
        "Sur_Name:Evuri<br><br>Name:SivaPrasadReddy<br><br>Section:13B<br><br>Branch: BSc Computers<br><br>Admission Id:7093<br><br>Blood_Group: O+";
     
      desc.style.padding = "16px";
      desc.style.fontSize="18px"
      //clg styling:
      clg.innerHTML = "Vagdevi Degree College<br> Narasaraopet";
      clg.style.textAlign = "center";
      clg.style.color = "orangered";
      clg.style.textShadow = "10px 10px 10px orange";
      }
     function remove()
     {
        div1.remove();
        document.body.innerHTML="GO TO SHOW ME!!"
        document.body.style.backgroundColor="Gray"
     }












