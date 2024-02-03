// Capitalize Every first Letter of each word in a String/
let letter = 'Capitalize Every first Letter of each word in a String';
letter = letter.split(' ');
for(let i = 0; i<letter.length; i++){
    letter[i] = letter[i][0].toUpperCase() + letter[i].slice(1).toLowerCase()
}
let conveted = letter.join(' ');
console.log(conveted);