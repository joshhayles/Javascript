// async function returns a promise object vs the actual value
async function getName() {
  return "Josh Hayles";
}

console.log(getName()); // Promise { 'Josh Hayles' }

async function logName() {
  // this pauses the execution of the function and will wait for the resolution of the Promise returned by the getName() function
  const name = await getName();
  console.log(name); // Josh Hayles
}

logName();

// Promise { 'Josh Hayles' }
// Josh Hayles