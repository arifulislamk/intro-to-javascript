const products = [
    {name : 'shampo', price: 300, quntity: 5},
    {name : 'fairlovly', price: 150, quntity: 5},
    {name : 'alta', price: 500, quntity: 5},
    {name : 'Shaban', price: 0, quntity: 0},
    {name : 'chiruni', price: 100, quntity: 5}
] ;


function totalShoping(Products){
    let total = 0 ;
    for ( const product of products){
        total = total + product.price ;
    }
    return total
}
const total = totalShoping(products);
console.log(total);