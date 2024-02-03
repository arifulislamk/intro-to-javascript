const numbers = [ -4, -50, -100, -500, -20, -3, -7];
let maxNumber = numbers[0] ;
let minNumber = numbers[0] ;
for(let i=0; i<numbers.length; i++){
    if( maxNumber < numbers[i] ){
        maxNumber = numbers[i]
    }
    if( minNumber > numbers[i]){
        minNumber = numbers[i]
    }
}
console.log(maxNumber)
console.log(minNumber)