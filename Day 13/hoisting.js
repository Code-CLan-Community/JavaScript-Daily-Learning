console.log(a);
var a = 5;

// output --> undefined
// Reason --> Initilization done in hosting 
// variable are partially hoisted.
console.log(b);
console.log(c);

let b = 8;
const c = 8;

// Output
// ReferenceError: Cannot access 'b' before initialization

//  let/const are local scopic variable so it can't accessable beacuse variable are partially hoisted
sum(2,3);
function sum (a,b) {
  console.log(3+2);
}

// runs sucessfully with output 5
// reason - functions are fully hoisted