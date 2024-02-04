function inchToFeet (inch){
    const feet = inch / 12 ;
    const nuumberOFfeet = parseInt(feet);
    const nuumberOfinch = inch % 12 ;
    return nuumberOFfeet + ' feet ' + nuumberOfinch + " inch " ; 

}
const arifulHeight = inchToFeet(70);
console.log(arifulHeight);