// async function returns a promise

async function getName() {
  return "Josh Hayles";
}

console.log(getName()); // Promise { 'Josh Hayles' }

async function logName() {
  const name = await getName();
  console.log(name); // Josh Hayles
}

logName();

// Promise { 'Josh Hayles' }
// Josh Hayles


// you can also use .then methods
// Promise.resolve is a javascript method that returns a Promise object that's resolved with a given value. Convenient for a promise that's already resolved with a specified value

function getNameTwo() {
  return Promise.resolve("Joshua H.");
}

getNameTwo().then(nameTwo => {
  console.log(nameTwo); // Joshua H.
})


// Promise { 'Josh Hayles' }
// Josh Hayles
// Joshua H.