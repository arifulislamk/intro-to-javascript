const data = ["apple", "mango", "orange"];
const data2 = ["apple2", "mango2", "orange2"];
const data3 = ["apple3", "mango3", "orange3"];

function name(x){
    for(let i = 0; i < x.length; i++){
        console.log(x[i]);
    }
    console.log("===================================")
}

name(data);
name(data2);
name(data3);

