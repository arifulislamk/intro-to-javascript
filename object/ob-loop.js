const mobile = {
    brand : 'samsung',
    price : 30000,
    color : 'black',
    camera : '12mp',
    isNew : true ,
}
for (const prop in mobile){
    console.log(prop, ':', mobile[prop])
}
// anotherr way 
// const keys = Object.keys(mobile);
// console.log(keys);
// for (const key of keys){
//     console.log(key,':', mobile[key]);
// }