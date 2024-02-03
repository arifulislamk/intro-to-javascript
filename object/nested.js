const university ={
    name : 'world University Of Bangladesh',
    address : 'Sector 17, Uttara , Dhaka',
    student : 23000,
    event : ['Pitha Uthsob','bijoy dibos','21 feb'],
    unique :{
        color : 'Blue',
        result : {
            cgpa : 4.0 ,
            merit : 'top'
        }

    }
}
// university.unique.result.merit = 'low' ; //for change any value 
delete university.unique.result.merit //for delet any properties 
console.log(university.unique.result);
// console.log(university.unique.result.cgpa)