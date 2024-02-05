// Layers Discount For Any Kind Of Products 
// If you buy above 100 we can not provided discount ;
// If you buy more than 100 you discount only 100+ product quntity each 90 taka,
// If you buy more than 200 discount 200+ quntity each 70 taka ;


function discountPrice(quntity){
    const frist100Price = 100 ;
    const second100Price = 90 ;
    const above200Price = 70 ;
    if(quntity <= 100){
        const result = 100 * frist100Price ;
        return result;
    }
    else if ( quntity <= 200){
        const frist100Total = 100 * frist100Price ;
        const remainQuantity = quntity - 100 ;
        const remaintotal = remainQuantity * second100Price ;
        const result = frist100Total + remaintotal ;
        return result ;
    }
    else if ( quntity > 200){
        const frist100Total = 100 * frist100Price ;
        const second100total = 100 * second100Price ;
        const remainQuantity = quntity - 200 ;
        const remaintotal = remainQuantity * 70 ;
        const result = frist100Total + second100total + remaintotal ;
        return result ;
    }
}
const quntity = discountPrice(250) ;
console.log(quntity);