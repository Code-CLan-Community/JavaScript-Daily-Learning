// DAy 46: Strings - Escappse sequences, 


// indexing always start from zero.

let s =  "Hello World!";

// s = hell world;
// console.log(s);
// console.log(s[0]);
// console.log(s.at(s[-1]));
// s = null;

// /String Templates 

// console.log("given string "+ s);
// console.log(`given string ${s}`);

//Escape Sequence Character in strings

// \n \t \b \r   \(escape sequence)

// console.log("Hello\nworld");
// console.log("hello\tworld");

// console.log("http:\\127.0.0.1:5500\new\tab");

// console.log(`http:\\127.0.0.1:5500\new\tab`);

// escape sequence character
// console.log("http:\\\127.0.0.1:5500\\new\\tab");

//console.log(String.raw`http:\\127.0.0.1:5500\new\tab`);

//string method

s = "Hello World";

console.log(s.length);  //.property / .method()
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.replace("World", "Universe"));
console.log(s.indexOf("World"));
console.log(s.concat("good morning", " Have a nice day!"));






