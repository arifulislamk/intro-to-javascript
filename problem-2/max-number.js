const numbers = [ 32, 432, 32, 465, 53,65, 34, 21, 64,23,-133];

function maxNumbers( numbers){

    let max = 0  ;
   for( let i = 0 ; i < numbers.length ; i++){
     if (numbers[i] > max){
        max = numbers[i] ;
     }
   }
   return max ;
}
const maxNumber = maxNumbers(numbers);
console.log(maxNumber)