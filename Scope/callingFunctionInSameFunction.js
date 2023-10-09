function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();

/*

- Javascript will not touch any code (execute it) inside of the function unless that function is called (invoked)

- when it hits line 4 to increment counter, Javascript's lookup process always looks in local memory first. In this case, it looks inside the local memory of 'incrementCounter()', but the counter variable is not stored in local memory there. Therefore, it will look inside the local memory of 'outer()' because it's next in line (the one below it) in the call stack.

*/