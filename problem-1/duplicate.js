const biriyanikhor = [ 'abul', 'babul', 'cabul' ,'dabul', 'abul', 'babul' , 'babul', 'cabul', 'arif'];
const numbers = [ 5, 53, 45, 65, 34, 5, 45, 7,7,]
function doublicat(birayanikhor){
    const dobli = [];
    for( const khor of birayanikhor){
        if( dobli.includes(khor) === false ){
            dobli.push(khor)
        }
    }
    return dobli ;
}
const dobli = doublicat(numbers);
console.log(dobli);