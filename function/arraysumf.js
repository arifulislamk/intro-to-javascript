function sumOfNumber (numbers){
    let sum = 0 ;
    for(const num of numbers){
        sum = sum + num ;
    }
    return sum ;
}
const numbs = [ 4, 5, 2, 1];
const sum = sumOfNumber(numbs);
console.log(sum);