// Wap a pg to 
 let n = prompt("Enter any number"); //Number()
alert(n);
alert(typeof n);

// Wap to accept Name of the User and print "Given name is Jhon"

let k = prompt("enter your name");
alert("Given name is "+ k);
// Template strings
alert(`Username is ${k}`);

//Wap a pg to accept two number and print thier sum

let a = +prompt("num1"), b=+prompt("num2");

alert(`10 + 20 = ${a+b}`);

// Wap to accpet name and 3 diffrent subject marks from the end user and calculate total percentage of it.

// output - hello veer your total score is 345 with 67.89% in the exam
// hint - percent.tofixed(2) for 2 digit after decimal

let Name = prompt("Enter Your Name");
let s1 = +prompt("maths");
let s2 = +prompt("Physics");
let s3 = +prompt("Chemistry");
let score = s1+s2+s3;
let percent = (score)/3;
alert(`Your name is ${Name} and you have scored ${score} with ${percent.toFixed(2)} in the examination`);

//Wap a p.g to convert F to celcius?

let t1 = +prompt("Enter Temperature in F");
alert(`Temperature in Celcius is ${F-32}`);

// wap to calculate the simple intrest ?

let p = +prompt("Principal");
let r = +prompt("Rate");
let t = +prompt("Time");

let Si = (p*r*t)/100;

alert(`Simple Intrest will be ${Si.toFixed(2)}`);

// Wap to accept Name, Gender and age of the person and check westher he/she is abale to vote or not.
// output : congrulations Mr. ABC you can vote
// failure output: Oh sorry Mrs. Abc can not vote

let Name1 = prompt("Enter Your Name");
let Gen = prompt("Enter your Gender (M/F) ");
let age = +prompt("Enter your age in digits ");

if(age>=18){
    if(Gen=="M")
        alert(`Congrulations Mr. ${Name1} are able to vote`);
    else
        alert(`Congrulations Mrs. ${Name1} are able to vote`);
}
else{
    if(Gen=="M")
        alert(`Oops!, Mr. ${Name1} are not able to vote`);
    else
        alert(`Oops!, Mrs. ${Name1} are not able to vote`);
}
