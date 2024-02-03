let sentace = ' I am learning web dev.';
sentace = sentace.split(' ')
// revers with loop
let reverse = '';
for (let i = 0; i<sentace.length; i++){
    reverse = sentace[i]+ ' ' + reverse ;
}
console.log(reverse);

/* reverse with for of
let revers = '' ;
for (const letter of sentace){
    revers = letter + revers ;
}
console.log(revers)
*/
// const reversed = sentace.split(' ').reverse().join(' ') ;
// console.log(reversed);
// var words = 'i am a good and hardworker';
// words = words.split(' ');
// // console.log(words);
// let rev = ' ';
// for (let i = words.length -1 ; i>=0 ; i--){
//     // console.log(words[i]);
//     rev = rev + ' ' + words[i];
//     // console.log(rev)
// }
// console.log(rev)