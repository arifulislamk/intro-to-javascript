function dubleOrTrible(number , double){
    if ( double === true){
        const result = number * 2 ;
        return result ;
    }
    else {
        const result = number * 3;
        return result ;
    }

}
console.log(dubleOrTrible(5, false));
console.log(dubleOrTrible(50, true));
console.log(dubleOrTrible(20, true));