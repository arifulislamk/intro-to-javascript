function getAge( person){
    const age = person.age ;
    return age ;
}

const person = {
    name : 'arif',
    age : 21,
    work : 'student'
}
const age = getAge(person)
console.log(age)