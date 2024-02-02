const toDoList = [
    'Buy Groceries',
    'Complete Projects',
    'Excercise',
    'Read A Book',
    'Attend Meeting'
]
// task1
toDoList.push('Walk The Dog');
// task2

if(toDoList.includes('Attend Meeting')){
    let indexNumber = toDoList.indexOf('Attend Meeting')
    toDoList.splice(indexNumber,1)
}
// task3
let relex = toDoList.slice(2,5)

// task4
if(toDoList.includes('Buy Groceries')){
    const indexofBuy = toDoList.indexOf('Buy Groceries')
    toDoList.splice(indexofBuy,1)
}
// task5
if(!toDoList.includes('Call a friends')){
    toDoList.push('Call a Friends');
}
// for(let i=0; i<toDoList.length; i++){
//     if(toDoList.includes('Attend Meeting')){

//     }
// }
console.log(relex)
console.log(toDoList)