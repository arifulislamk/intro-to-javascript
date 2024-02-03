const number = [ 100, 455, 6433, 523, 123, 400, 40];
let arrayPart = [ ];
for ( let i = 0; i<number.length; i++){
    if ( number[i] < 200){
        arrayPart.push(number[i])
    }
}
console.log(arrayPart)
