/* 
Write a loop that goes from 1 to 100, 
but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 5; i <= 100; i++) {
    let squareRoot = Math.sqrt(i);
    if (squareRoot === Math.floor(squareRoot)) {
      break;
    }
    console.log(i); 
  }