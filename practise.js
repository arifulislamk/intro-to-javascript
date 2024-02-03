// const numbers = [ 1, 8, 7, 5, 35, 6, 21, 4];
// let revers = numbers.reverse();
// console.log(numbers.reverse())
// let rev = [];
// for (const num of numbers){
//     rev.unshift(num);
//     console.log(rev)
// 
// let numSort = numbers.sort();
// console.log(numSort)
// let rev = []
// for (let i=numbers.length-1; i>=0; i--){
//     // console.log(numbers[i])
//     rev.push(numbers[i])
// }
// console.log(rev);
// const friendsName = [ 'bill', 'Mark',  'TimBl', 'Mask'];
// console.log(friendsName.sort())
// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: 
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let revColors = [];

// let i = colors.length -1;
// while( i >= 0 ){
//     revColors.push(colors[i]);
//     i--;
// } console.log(revColors)
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Output:
// [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumbers = [];
// let i = 0;
// while( i < numbers.length){
//     if ( numbers[i] % 2 == 0){
//         evenNumbers.push(numbers[i])
//     }
//     i++;
// }
// console.log(evenNumbers)
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Output:
// 'TomTimTinTik'
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let str = '';
// for ( let num of numbers){
//     str = str.concat(num);
// }
// console.log(str)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// Output:
// 'person working hard a am I'

// let statement = 'I am a hard working person'
// statement = statement.split(' ')
// let rev = '';
// for( let i = statement.length - 1; i>=0; i--){
//     rev = rev + ' ' + statement[i]
// }
// console.log(rev)

// const x = 'hello';
// const y = 'hello';
// if (x === y ){
//     console.log('both are same')
// }else{
//     console.log
// }
// const fruitsName = ['apple', 'banana', 'peyara', 'angur'];
// let fruit = 'anguR';
// let indexNamber = -1;
// for(let i = 0; i<fruitsName.length; i++){
//     if (fruitsName[i] === fruit){
//         indexNamber = i ;
//     }
// }
// if ( indexNamber >= 0){
//     console.log('founded index:', indexNamber)
// } else{
//     console.log('Index not founded')
// }
// let temp = fruitsName[3];
// fruitsName[3] = fruitsName[0];
// fruitsName[0] = temp ;
// console.log(fruitsName)
