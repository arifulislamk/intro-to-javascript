function add(price1, price2){
    const total = price1 + price2 ;
    return total ;
}
const bill = add2(40,     50);
function add2( price1, price2){
    return price1 + price2 ;
}
const bill2 = add2( 100, 500);

console.log(bill, bill2)