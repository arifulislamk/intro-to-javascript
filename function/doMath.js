function doMath(num1, num2){
    const sum = num1 + num2 ;
    const diff = num1 - num2 ;
    const mult = sum * diff ;
    const result = mult / 2 ;
    return result ;
}
const result = doMath(10,5);
console.log(result);