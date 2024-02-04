function isLeapYear2(year){
    if ( year % 100 !== 0 && year % 4 ===0){
        return true ;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true ;
    }
    return false
}
console.log(isLeapYear2(2400))
console.log(isLeapYear2(2100))
console.log(isLeapYear2(2052))
console.log(isLeapYear2(1900))
console.log(isLeapYear2(2024))