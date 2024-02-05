function isArray( numbers){
    if (Array.isArray(numbers) == false ){
        return 'please proved a array'
    }
    const result = numbers[1];
    return result ;
}
const array = isArray([3,54,32,3]);
// const array = isArray({name: 'ariful', years: 24});
console.log(array);