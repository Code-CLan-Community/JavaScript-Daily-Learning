// Comparision operators  -> boolean(true/false)
//  > >=  < <= != == === !==

// in string comparision javascript  always compares the first not equal character only
// console.log("Joe">"Dojo")

//logical operators
//  && || !

a = 13;

x = a>10;
y = a%2 == 0;
console.log(x&&y);
// Truth Table of Logical OR ,And

//          &&  ||
// f  f     f   f
// f  t     f   t
// t  f     f   t
// t  t     t   t


// Falsey Values

//  0  None undefined "" false

console.log("hello" && null);