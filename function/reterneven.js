function evenNumbersOnly ( numbers){
    const even = [];
    for(const number of numbers){
        if (number % 2 === 0){
            even.push(number);
        }
    }
    return even ;
}
const numbs = [ 79, 12, 45,2, 4, 54, 23, 667, 34];
const evenNumber = evenNumbersOnly(numbs);
console.log(evenNumber);