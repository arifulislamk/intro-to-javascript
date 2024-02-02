// const arr = [ 11, '22', 33, '44', 55];
// let sum = 0 ;
// for ( let i= 0 ; i< arr.length; i++){
//     sum = sum + parseInt(arr[i]);
//     console.log(sum);
// }
const arr = [ 11, '22', 33, '44', 55, 'price: 70'];
let sum = 0 ;
for ( let i= 0 ; i< arr.length; i++){
    const convertedNumber = parseInt(arr[i]);
    if(!isNaN(convertedNumber)){
        sum = sum + convertedNumber ;
    }
}
console.log(sum);