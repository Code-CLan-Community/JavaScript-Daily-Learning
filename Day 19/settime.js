setTimeout(() => {
  console.log("Hello");
}, 6000);
console.log("World");

let a = 1;
let x = setInterval(() => {
  if (a == 5) {
    clearInterval(x);
  }
  console.log(a);
  a++;
}, 1000);

// api is given by backend and to implement api in frontend we use
// the concept of AJAX which is theoritical concept and to implement it we use fetch api/ "axios" in frontend.
 
let userapi = `https://jsonplaceholder.typicode.com/users`;
fetch(userapi)
    .then((e) => e.json())
    .then((r) => console.log(r))
    .catch((err) => console.log(err))


