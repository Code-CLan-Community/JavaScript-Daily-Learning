let i = 1;
while (i <= 10) {
  if (i == 2) {
    console.log("Break...");
    break;
    // it will just simply break that particular iteration
  }
  else if (i == 4) {
    console.log("continue..");
    continue;
    // do not use the continue keyword start from the loop continue/break the chance
    console.log(i);
  }
//   else
//   console.log(i);
//   i++;
}
let k=5;
console.log((k>3)? `yes`: `no`);