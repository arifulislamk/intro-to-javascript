function discountPrice (quntity){
    if ( quntity < 100){
        const result = quntity * 100;
        return result ;
    }
    else if ( quntity <= 200){
        const result = quntity * 90 ;
        return result ;
    }
    else if ( quntity > 200){
        const result = quntity * 70;
        return result ;
    }
}
const total = discountPrice (5020);
console.log(total);