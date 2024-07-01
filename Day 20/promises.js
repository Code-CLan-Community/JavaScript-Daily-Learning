// Try catch is used to handle sync error
// Promises are used to handle Async error

// Creating Promise
function myPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data > 100) resolve("Data is >100");
      else reject("Less than 100");
    }, 1000);
  });
}

//Using Promise

myPromise(2)
  .then((result) => {
    console.log(error);
  })
  .catch((error) => {
    console.log(error);
  });

// Example of fetch API (Predefined Promise in JS to call data from API(AJAX))

// method 1

// let userapi = `https://jsonplaceholder.typicode.com/users`;
// fetch(userapi)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Method 2 (by converting Async to SYNC)

async function getusers() {
  try {
    let userapi = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(userapi);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getusers();
