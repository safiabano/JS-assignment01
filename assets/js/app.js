//Q1. Write a JavaScript program that accepts two numbers in two prompts and
//displays the larger one in the console.
//===========answer1================

// let num1 = +prompt("enter num1");
// let num2 = +prompt("enter num2");

// if(num1 > num2){
//     console.log(num1 + " is greater");

// }else if(num2 > num1){
//     console.log(num2 + " is greater");

// }else{
//     console.log("both numbers are equal");
// }
//===========================================Q2========================
//Q2. Write a JavaScript conditional statement to find the sign of a number. Display
//an alert box with the specified sign.
// Sample: 3
// Output : The sign is +

// Sample: -5
// Output : The sign is -
//-------------answer2===============

//  let num = +prompt("enter no:")
// if (num > 0){
//     console.log("+ sign")
// }
// else if (num < 0){
//     console.log("- sign")
// }
// else if (num === 0){
//     console.log("entered no is zero")
// }
//============Q3=================

//Q3 Write a JavaScript program that accepts five numbers in five prompts and
//displays the larger one in the console.
//=========answer2=============

let num_1 = +prompt("enter no 1:");
let num_2 = +prompt("enter no 2:"); 
let num_3 = +prompt("enter no 3:"); 
let num_4 = +prompt("enter no 4:"); 
let num_5 = +prompt("enter no 5:");

if (num_1 > num_2 && num_1 > num_3 && num_1 > num_4 && num_1 > num_5){
    console.log(num_1 + " is greatest")
}
else if(num_2 > num_1 && num_2 > num_3 && num_2 > num_4 && num_2 > num_5){
    console.log(num_2 + " is greatest")
}
else if(num_3 > num_1 && num_3 > num_2 && num_3 > num_4 && num_3 > num_5){
    console.log(num_3 + " is greatest")
}
else if(num_4 > num_1 && num_4 > num_2 && num_4 > num_3 && num_4 > num_5){
    console.log(num_4 + " is greatest")
}
else if(num_5 > num_1 && num_5 > num_2 && num_5 > num_3 && num_5 > num_4){
    console.log(num_5 + " is greatest")
}
else{
    console.log("no number is greatest you have entered 2 equal numbers")
}
//====================Q4==================
// Q4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
//=============answer 4=============

//for (i=0; i<=15; i++){
//     if (i % 2 == 0 ){
//         console.log(i + ": is even")
//     }
//     else{
//         console.log(i + ": is odd")
//     }
// }
//============Q5===============
// Q5 Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
//Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A
//=============answer 5===========

// let averageMarks=prompt("RangeGrade");
// if (averageMarks <=100  ){
//     console.log("A");
// }else{
//     (averageMarks <=90  )
//         console.log("B");

//         (averageMarks <=80  )
//         console.log("C");
       
//         (averageMarks <=70  )
//         console.log("D");

//         (averageMarks <=60  )
//         console.log("F");


//     }

//====================Q6==============
// Q6 Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

//==========answer 6=============

//for (i=1; i<=100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i + " FizzBuzz");
//     }
//     else if (i % 3 == 0){
//         console.log(i + " Fizz");
//     }
//     else if (i % 5 ==0){
//         console.log(i + " Buzz");
//     }
// }
//==================Q7================
// Q7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * 

//=====================answer 7================
//nested for loop
// for(i = 1; i<=5; i++){
//     for(j = 1; j<=i; j++ ){
//        document.write("*");
//     }
//     document.write("<br>");
// }
