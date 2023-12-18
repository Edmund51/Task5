/* ------------------------------ TASK 5 ---------------------------------------------------
Sutvarkykite užduoties "Task 5" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
const one = 11;
const two = 22;
const three = 33;
const four = 44;
const five = 55;

let a = composition(one, four);
let b = division(four, two);
let c = subtraction(three, two);
let d = multiplication(five, two);


function composition(a, b) {
  return a + b; 
}

function division(a, b) {
  return a / b; 
}

function subtraction(a, b) {
  return a - b; 
}

function multiplication(a, b) {
  return a * b; 
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);