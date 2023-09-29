const createFunction = () => {
  const multiplyBy2 = (num) => {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();

const result = generatedFunc(3);

/*

line 1: 
  - declare a new constant 'createFunction' in global memory
  - inside createFunction, you declare a new const 'multiplyBy2', which is an inner function, with the parameter 'num' and calculate num * 2
  - then, you return 'multiplyBy2'
  
line 8: 
  - declare a new constant variable 'generatedFunc' in global memory
  - next, Javascript encounters the function invocation createFunction() and looks for it in the current scope. When it's found, it gets executed (the code within the function is run)
  - the result (return value) of the function is then assigned to the constant 'generatedFunc'
  - 'generatedFunc' now holds a reference to the 'multiplyBy2' function

line 10:
  - finally, you invoke 'generatedFunc(3)', passing 3 as the argument. Since 'generatedFunc' holds a reference to 'multiplyBy2', the reference includes not only the function's code, but also the environment in which it was created. When you call generatedFunc(3), Javascript knows that 'generatedFunc' is a function and executes it. Inside this function, it uses the 'num' parameter from the captured environment, and multiplies 3 * 2

*/