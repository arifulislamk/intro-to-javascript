// Count how many times a string has the letter a or A//
const stringName = 'Count how many times a string has the letter a or A AAAAAAAAA';
let sum = 0;
let target = 'a' ;
let target2 = 'A' ;
for(let i=0; i<stringName.length; i++){
    if(stringName[i] == target || stringName[i] == target2 ){
        sum = sum + 1 ;
    }
}
console.log(sum)