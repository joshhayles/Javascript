// you can also use '.then()' methods to handle the resolved value of the promise

// Promise.resolve is a javascript method that returns a Promise object that's resolved with a given value. Convenient for a promise that's already resolved with a specified value


function getName() {
  return Promise.resolve("Joshua H.");
}

getName().then((name) => {
  console.log(name); // Joshua H.
});