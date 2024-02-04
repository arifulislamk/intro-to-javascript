function evenAverage ( numbers){
    let count = 0 ;
    let sum = 0 ;
    for(const number of numbers){
        if( number % 2 === 0){
            sum = sum + number ;
            count = count + 1 ;
        }
    }
    const average = sum / count ;
    return ' sum ' + sum + ' count ' + count + ' averge ' + average ;
}
const numbers = [ 2, 3,44,23, 4,10];
const avarage = evenAverage(numbers);
console.log(avarage);