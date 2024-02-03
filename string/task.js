// Count how many times a string has the letter a //

// const str = 'Count how many times aaaaaa string has the letter a';
// let target = 'a';
// let count = 0 ;
// for(let i = 0; i < str.length; i++){
//     if (target == str[i]){
//         count = count + 1;
//     }
// }
// console.log(count);

const arr = [ 11, 22, '33', "44", `55`, 'price: 66'];
let total = 0;
for( let i = 0; i < arr.length; i++){
    const convertedNumber = parseInt(arr[i]);
    if( !isNaN(convertedNumber) ){
        total = total + convertedNumber ;
        
    }
}
console.log(total);
