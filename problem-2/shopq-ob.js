const products = [
    {name : 'shampo', price: 300, quntity: 2},
    {name : 'fairlovly', price: 150, quntity: 1},
    {name : 'alta', price: 500, quntity: 1},
    {name : 'Shaban', price: 50, quntity: 1},
    {name : 'chiruni', price: 100, quntity: 1}
] ;

function getTotalPrice(products){
    let total = 0 ;
    for(const items of products){
        const thisitemstotal = items.price * items.quntity ;
        total = total + thisitemstotal ;
    }
    return total ;
}
const totalprice = getTotalPrice(products);
console.log(totalprice);