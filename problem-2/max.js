function getmax( num1 , num2){
    if(num1 > num2){
        return num1 ;
    }
    else{
        return num2 ;
    }
}
const max1 = ( 96,500);
const max2 = (56, 600);
const max = getmax(max1,max2);
console.log(max); 