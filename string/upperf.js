
var words = 'i am a good and hardworker';
words = words.split(' ');
// console.log(words);
for(let i = 0; i<words.length; i++){
    // console.log(words[i]);
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() ;
}
 let converted = words.join( ' ');
console.log(converted)
console.log(words)