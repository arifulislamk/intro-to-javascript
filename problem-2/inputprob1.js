function multiply (num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return " please proved a number"
    }
    const result = num1 * num2 ;
    return result ;
}
const result = multiply (7, 7);
console.log(result)