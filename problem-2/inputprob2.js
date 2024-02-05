function fullname(frist, second){
    if (typeof frist !== 'string'){
        return 'frist name should be a string'
    }
    else if ( typeof second !== 'string'){
        return 'second name should be a string'
    }
    const result = frist+ ' ' + second ;
    return result ;
}
const name = fullname('Ariful','islam');
console.log(name)