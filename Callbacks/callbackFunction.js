// "Go and do this, then call this function when you're done."
// a callback function is a function passed as an argument to another function, and it's executed after the completion of the first function
// allows for more control over flow and execution

// example: fetching data from a server, and we want to perform an action once the data is received:

function doSomething(number, callback) {
  const result = number * 10;
  callback(result);
}

function handleResult(result) {
  console.log(`Result is: ${result}`);
}

doSomething(5, handleResult); // 50

