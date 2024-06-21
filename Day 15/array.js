// create

let arr = [12, 34, 65, 89.4, 534, 796, 454.54];

// Read by indexing

console.log(arr[0]); // Accessing the array elements by indexing.
console.log(arr[arr.length - 1]); // Accessing the last element of the array - Method 1
console.log(arr.at(-1)); // Accessing the last element of the array - Method 2

console.log(arr.slice(2, 6)); // creating a Sub-string

// Reading by using loop

for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i + 1}]: ${arr[i]}`);
}

// Update the values of array.

arr[2] = 3783;
console.log(arr);

// Updation/Maniplution of array using inbuilt methods in J.S

let x = arr.push(56, 788, 900); // insert values from last index
let y = arr.unshift(56, 788, 900); // insert values from starting(zero th index)

console.log(arr);// output of push
// [12, 34, 65, 89.4, 534, 796, 454.54, 56, 788, 900];

console.log(arr); // output of unshift
// [56, 788, 900,12, 34, 65, 89.4, 534, 796, 454.54, 56, 788, 900];

//  Removal/Deletion of elements from array

let a = arr.shift(); // delete from start 
let b = arr.pop(); // delete from end
let c = arr.slice(3,5); // delete from any where

console.log(c);
console.log(arr);