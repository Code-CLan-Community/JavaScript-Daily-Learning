// console.log(detail)
// console.log(detail.name);
// console.log(detail["age"]);

// detail.gender = "Male";
// detail["email"] = "veer.igt@gmail.com";
// console.log(detail);

// delete detail.name;
// console.log(detail);


// forof - Array & forin- Object

// let arr = [21,54,3,55,677,89,3]

// for (let i in arr) {
//     console.log(i);
// }

// forin loop in objeect 



let profile = {
    name: "jhon",
    age: 23,
    city: "New York",
    country: "USA",
};

    console.log(profile);


let arr = [1,2,3,4,5,6];
let arr2 = [...arr, 1234];

arr2[1] = 7383;
console.log(arr,arr2);

let obj = {
    name: "Jhon", age: 12, roll : 21,
};
console.log(obj);
obj.age = 23;
console.log(obj);
 console.log(arr);
 console.log(arr2);


//  dESTRUCTURING OF ARRAY 

let ark = ["Jhon" , 12 , "Bhopal"];

// let nam = arr[0];
// let age = 23;
// let cityy = arr[2];

let [nam , ,cityy] = ark;
console.log(nam,cityy);


