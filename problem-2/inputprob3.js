function getprice(product){
    if ( typeof product !== 'object'){
        return 'please proved a object '
    }
    const price = product.price ;
    return price ;
}
// const price = getprice( {name: 'culkanir dandi', price: 500, color: 'black'});
// const price = getprice ([32,43]);
console.log(price)
