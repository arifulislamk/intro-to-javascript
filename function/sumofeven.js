function sumOfEven(numbers){
    let sum = 0 ;
    for(const number of numbers){
        if( number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum ;
}
const nums = [2, 3, 4, 13, 15 ,8,1];
const sumEven = sumOfEven(nums);
console.log(sumEven)