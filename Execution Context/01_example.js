const b = () => {
  let myVar;
  console.log('Function b is running...', myVar);
};

const a = () => {
  myVar = 2;
  b();
  console.log('Function a is running...', myVar);
};

a();
// Function b is running... undefined
// Function a is running... 2
