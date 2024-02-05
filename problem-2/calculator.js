// Make a add,subs,mult,div calculator. 

function add ( num1 , num2 ){
    const result = num1 + num2 ;
    return result ;
}
function substracs ( num1 , num2 ){
    const result = num1 - num2 ;
    return result ;
}
function multiply ( num1 , num2){
    const result = num1 * num2 ;
    return result ;
}
function divided ( num1 , num2 ){
    const result = num1 / num2 ;
    return result ;
}
// const result = multiply(5, 2);
// console.log(result)

function calculator(a,b,operator){
    if(operator === 'add' ){
        const result = add(a,b);
        return result ;
    }
    else if (operator === 'subs'){
        const result = substracs(a,b);
        return result ;
    }
    else if (operator === 'mult'){
        const result = multiply(a,b);
        return result ;
    }
    else if (operator === 'div'){
        const result = divided(a,b);
        return result ;
    }

    else {
        return 'please only add, subs, mult or div operator' ;
    }
}
const result = calculator(100 , 50, 'mult');
console.log(result);