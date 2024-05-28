// operators
// Assigmental 
// (Binary) Arthmetic --> + - / * % **
// Shorthand --> += -= /= %= **=
// (unaray) Inc/dec  ++ --


// (Binary) Arthmetic --> + - / * % **

let n1 =6,n2=2, op=null;
op = n1**n2;
console.log(op);

op = n1+n2;
console.log(op);

op = n1-n2;
console.log(op);

op = n1*n2;
console.log(op);

op = n1/n2;
console.log(op);

op = n1%n2;
console.log(op);

// Shorthand --> += -= /= %= **= *=

let m1 =6,sh=null;
sh = m1+=2;
console.log(sh);

sh = m1-=2;
console.log(sh);

sh = m1/=2;
console.log(sh);

sh = m1%=2;
console.log(sh);  

sh = m1*=2;
console.log(sh);

sh = m1**=2;
console.log(sh);


//Increment and decrement operator

// 1. Post Increment (i++ , a++, k--)
// it assign the value first then update the value 
// Note: Only applicable on varaiable not on constants
// Ex: 12++, 9++ invalid expression


let n = 12;

let k = n++;

console.log(k); // output will be 12 but in memory it will incremented by 1.


// 2. Pre Increment (--i, ++k, ++d)

// it updates the data and  then assign to the variable. 