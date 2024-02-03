// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const properties = Object.values(student).length //for length use keys or values
console.log(properties);