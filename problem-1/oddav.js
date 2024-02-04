function oddAverage ( numbers){
    const odd = [];
    for( const number of numbers){
        if (number % 2 === 1){
            odd.push(number)
        }
    }
    let sum = 0 ;
    for(const number of odd){
        sum = sum + number ;
    }
    const len = odd.length ;
    const average = sum / len

    return average;
}

const numbers = [ 1,2,3,4,5,6,7,5] ;
const average = oddAverage(numbers);
console.log(average)