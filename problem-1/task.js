// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit (Celsius){
     const fahrenheit = (Celsius * 9/5) +32 ;
     return fahrenheit ;

}
const celxius = celsiusToFahrenheit(0);
// console.log(celxius);


// task 2
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0
function findNumbers(numbers){
    const target = 98;
    let count = 0 ;
    for(const number of numbers){
        if( target == number){
            count = count + 1 ;
        }
    }
    return count ;
}
const numbers = [5,6,11,12,98, 5];
const findNumber = findNumbers(numbers);
// console.log(findNumber);

// task 3
// Write a function to count the number of vowels in a string.
function countVowels(stringValue){
        let count = 0 ;
        for (const string of stringValue){
            if( string === 'a' || string === 'e' || string === 'i'  || string === '0' || string === 'u'
            ){
                count = count + 1 ;
            }
        }
        return count ;
}
const stringValue =' i am a web developer and student ';
const vowels = countVowels(stringValue);
// console.log(vowels);


// task 4
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming
function longestWord(stringValue){
    let foundWord = '';
    const words = stringValue.split(' ');
    for(const word of words){
        if(word.length > foundWord.length){
            foundWord = word;
        }
    }
    return foundWord ;
}
const stringValues = "I am learning Programming to become a programmer" ;
const longest = longestWord(stringValues);
// console.log(longest) ;

// task 5
// Generate a random number between 10 to 20.
let math = Math.round(Math.random()*20) ;
console.log(math);
// if( math > 10 ){
    
// }