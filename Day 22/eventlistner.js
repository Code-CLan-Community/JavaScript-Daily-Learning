function randomColor(){
    return Math.floor(Math.random()*256);
}
const body = document.querySelector("body");
const button = document.querySelector("button");
7
button.addEventListener("click", ()=>{
    body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
});

// Write a code to take a input (name) from prompt and dsiplay display it into h1

const x = document.querySelector("h1");

const Name = prompt("Enter your name");

x.innerHTML = Name;

/////////////////////////////////////////////////////

// const container = document.querySelector(".container");
// const h = document.createElement("h1");
// h.textContent = "Hello World";
// container.appendChild(h);

window.addEventListener("load", ()=>{
    console.log("hello");
});