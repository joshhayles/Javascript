const b = () => {
  let myVar;
  console.log(myVar);
}

const a = () => {
  let myVar = 2;
  b();
  console.log(myVar);
}

let myVar = 1;
a();
console.log(myVar);

// undefined
// 2
// 1