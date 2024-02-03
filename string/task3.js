// Check whether a string contains all the vowels a, e, i, o, u

const containes = 'Who would know naught of art must learn, act, and then take his ease'
let target1 = 'a';
let target2 = 'e';
let target3 = 'i';
let target4 = 'o';
let target5 = 'u';
let total = 0;
for( let i = 0; i<containes.length; i++){
    if (containes[i] == target1){
        total = total + 1
    }
}
console.log(total)