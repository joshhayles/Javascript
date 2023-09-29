let num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

console.log(multiplyBy2(3), newOutput); // 6 20

/*

line 1: 
  - declare new variable 'num' in global memory

line 3: 
  - declare a function 'multiplyBy2' in global memory and 
  assigning the value of the entire function definition { ... }

line 8: 
  - declare new variable 'output' in global memory, initialized for a moment, then set equal to the result of invoking the function multiplyBy2 with the argument 'num', which is 3. 

The argument '3' fills in the parameter 'inputNumber' and goes through the function for execution, which equals 6

line 9: 

  - The multiplyBy2 function forms a closure because it accesses the 'inputNumber' parameter and the 'result' variable, both of which are from the outer lexical scope.

When you reference or use a variable within your code, the JavaScript engine looks for that variable's value starting from the current scope and then moving outward in a hierarchical manner.

*/
