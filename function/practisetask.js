// Task-1
// Take four parameters. Multiply the four numbers and then return the result
// function task (a,b,c,d){
//     return a * b * c * d
// }
// // console.log(task(4,3,2,1));


// Task-2
// Take a number if the number is odd multiply it by 2 and
//  return the result. If the number is even divide it by two and return the result.

// function cheekNumber (number){
//     if(number % 2 === 0){
//         return number / 2 ;
//     }
//     else{
//         return number * 2 ;
//     }
// }
// console.log(cheekNumber(5));


// Task - 3
// Write a function called make_avg() which will take an array of integers and
//  the size of that array and return the average of those values.

// function make_avg(numbers){
//     const size = numbers.length ;
//     let sum = 0 ;
//     for(const number of numbers){
//         sum = sum + number ;
//     }
//     return sum / size ;
// }
// const numbers = [ 1 , 4, 10, 5];
// console.log(make_avg(numbers))

// Task-4
// Write a function called count_zero() 
// which will take a binary string (Binary string is a string which is consist of only 0 and 1)
//  as parameter and count how many 0’s are there in that string.

// function count_zero(strs){
//     const target = '0';
//     let total = 0;
//     for(const str of strs){
//         if(str === target){
//             total = total + 1 ;
//         }
//     }
//     return total
// }
// const str = '1010101010111100000';
// console.log(count_zero(str))


// Task-5
// Write a function called odd_even() which takes an integer value and
//  tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(numbers){
    if ( numbers % 2 === 0){
        return 'Even' ;
    }
    return 'Odd'
}
console.log(odd_even(257))
