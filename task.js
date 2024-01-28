// var b = isNaN('ariful');
// var a = isNaN(2-10);
// console.log(a)
// console.log(b)

// var reminder = 119%5;
// reminder += 1;
// console.log(reminder)

// task 1st 
// const burgerPrice = 400 ;
// if (burgerPrice >= 500){
//     console.log("free coke")
// }
// else{
//     console.log("coke 30 taka")
// }
// burgerPrice >= 500 ? console.log("free coke") : console.log("coke 30 taka")

// task 2
// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.
// const weight = 65 ;
// const height = 1.74 ;
// const bmi = weight / height**2 ;
// if (bmi < 18.5){
//     console.log("you are underweight")
// }
// else if(bmi >= 18.5 && bmi <= 24.9 ){
//     console.log("You are normal")
// }
// else if ( bmi >= 25 && bmi <= 29.9 ){
//     console.log("You are overweight")
// }
// else{
//     console.log("You are obese")
// }

// task 3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// const studentMark = 50;
// if( studentMark >= 90){
//     console.log('You got A')
// }
// else if( studentMark >= 80){
//     console.log('You got B')
// }
// else if (studentMark >= 70){
//     console.log('You got C')
// }
// else if ( studentMark >=60 ){
//     console.log('You got D')
// }
// else{
//     console.log('You are Fail')
// }

// const myMark = 80;
// const friendMark = 40;
// if ( myMark >= 80) {
//     if (friendMark >= 80) {
//         console.log("Chol Bondhu Resturant jai")

//     }
//     else if (friendMark >= 60) {
//         console.log(" Bro better luck next time")
//     }
//     else if (friendMark < 60 && friendMark >= 40) {
//         console.log("Keep My friends measeage unseen")
//     }
//     else if (friendMark < 40) {
//         console.log( 'block My Friends from facebook')
//     }
// }
// else {
//     console.log(" 2 days bondhur samne jabona")
// }
// task 5
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. 
if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
// const num1 = 11;
// const num2 = 10;
// let result ;
// // if( num1 > num2 ){
// //  result= num1 * 2;
// // }
// // else {
// //     result= ( num1 + num2 ),'no';
// // }
// // console.log(result);
// result = num1 > num2 ? num1 * 2 : num1 + num2
// console.log(result);

/***
task 6
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// let ticketFare = 800 ;
// let isStudent = false ;
// let age = 40 ;
// if ( isStudent == true ){
//     let discount = ticketFare * 50 /100 ;
//     ticketFare = ticketFare - discount;
//     console.log(ticketFare);
// }
// else if(age >= 60){
//     let discount = ticketFare * 15 / 100 ;
//     ticketFare = ticketFare - discount ;
//     console.log(ticketFare);
// }
// else{
//     console.log(ticketFare);
// }