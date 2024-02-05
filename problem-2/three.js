function maxThree ( num1 , num2, num3){
    if( num1 > num2 && num1 > num3){
        return num1 ;
    }
    else if ( num2 > num1 && num2 > num3){
        return num2 ;
    }
    else{
        return num3 ;
    }
}
const num1 = 10 ;
const num2 = 152;
const num3 = 4222 ;
const max = maxThree(num1 , num2 , num3);
console.log(max)