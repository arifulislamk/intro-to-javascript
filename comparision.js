/***Pasher bashar aunty */
// console.log( 5 === '5' )
// console.log( 10 ===  '10')

// var weather = 42 ;

// if (weather == 10 || weather <=40 ){
//     console.log('i will go university')
// }
// else{
//     console.log('i can`t go uniersity')
// }
//  -------Complex condition ----------
// const salary = 30000;
// const height = 67;
// const isBcs = true;

// if((salary > 20000 || height == 66) && isBcs == true) {
//     console.log("esho baba kobul")
// }
// else {
//     console.log("ja beta abul")
//  }

// const price = 3000 ;

// if ( price >= 5000){
//     // 10% discount for 5000 up taka
//     const discount = price * 10 / 100 ;
//     const discount = price * 10 / 100 ;
//     const payAmount = price - discount ;
//     console.log(payAmount)
// }
// else if (price >= 2500){
//     const discount = price * 5 / 100 ;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else {
//     console.log (price)
// }

const age = 45;
const price = 500;

if( age <= 12){
    const discount = price *100/100;
    const payAmount = price -discount;
    console.log(payAmount)
}
else if ( age >= 60) {
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if ( age >= 50){
    const discount = price * 25 /100 ;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}