// Loop through an object and print the key-value pairs with their types
// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
// Input:
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(const key in myObject){
    // console.log(key);
    // console.log(myObject[key]);
    console.log('key :', key, '|', 'type :', typeof myObject[key]);
}

// const keys = Object.keys(myObject);
// for(const key of keys){
//     // console.log(key);
//     // console.log(myObject[key]);
//     console.log('key :',key, '|' , 'type :', typeof myObject[key])
// }
