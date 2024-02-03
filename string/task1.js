// Count how many times a string has the letter a //
const str = 'Count how many times a string has the leatter a' ;
let count = 0 ;
let target = 'a';

for(let i = 0; i<str.length; i++){
    if ( str[i].includes(target)){
        count = count + 1;
    }
}
console.log(count);