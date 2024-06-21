// create 

let arr = [12, 34, 65, 89.4,534,796, 454.54];

// Read 

console.log(arr[0]); // Accessing the array elements by indexing. 
console.log(arr[arr.length -1]); // Accessing the last element of the array - Method 1
console.log(arr.at(-1));      // Accessing the last element of the array - Method 2
console.log(arr.slice(2,6)); // creating a Sub-string 

for(let i = 0; i<arr.length;i++)
    {
        console.log(`arr[${i+1}]: ${arr[i]}` );
    }

// Update 

arr[2] = 3783;
console.log(arr);
