const phones = [
    {name : 'samsung' , price: 40000, camera: '12mp', color: 'balck'},
    {name : 'xaomi' , price: 15000, camera: '12mp', color: 'balck'},
    {name : 'oppps' , price: 2000, camera: '12mp', color: 'balck'},
    {name : 'apple' , price: 100000, camera: '12mp', color: 'balck'}
]

function getchepPrice (phones){
    let min = phones[0] ;
    for( const phone of phones){
        if(phone.price < min.price){
            min = phone ;
        }
    }
    return min ;
}
const chepPhone = getchepPrice(phones);
console.log(chepPhone);