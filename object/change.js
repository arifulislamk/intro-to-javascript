const person = {
    name : 'Kamal',
    age : 26 ,
    profession : 'devoloper',
    salary : 30000,
    married : true,
    'fav places' : [ 'Dhaka', 'Coxbazar', 'Rangamati']
}
person.salary = 40000 ;
person['age']=35 ;
person['fav places']= ['maldives', 'singapur'];
// console.log(person['fav places']);

const keyName = 'profession';
// console.log(person[keyName]);
person[keyName] = 'student';
console.log(person)