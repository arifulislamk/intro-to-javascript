const today = new Date();
console.log(today);
const date = new Date('2062-12-27');
console.log(date)
console.log(date.getMonth());
console.log(date.getDay()) ///why here is 3 in output

console.log('----------------------')

const specificdate = new Date (2091 , 0 ,26);
console.log(specificdate)


specificdate.setMonth(10);
console.log(specificdate.toLocaleString('en-GB'))
