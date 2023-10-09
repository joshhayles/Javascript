function multiplyBy2(inputNumber) {
  const doubleValue = inputNumber * 2;
  return doubleValue;
}

const output = multiplyBy2(9);
const newLabelForMultiplyBy2 = multiplyBy2;
const newOutput = newLabelForMultiplyBy2(10);

/*

line 1: 
  - declare a function 'multiplyBy2' (which is the label) and store the value (function's code) in global memory

line 6: 
  - declare a const in global memory with 'output' as the label, invoke the function 'multiplyBy2(9)' (because of the parenthesis) and create a local execution context to run the code in the function.

  - Inside the function, and its local memory, we assign the parameter 'inputNumber' the argument of 9 (that result is 9 * 2 = 18). 
  
  - 18 is now the value of 'output'

line 7: 
  - declare a const in global memory with 'newLabelForMultiplyBy2' as the label, and assigns its value to the function definition of 'multiplyBy2'. When JavaScript sees the reference to 'multiplyBy2' it will search in global memory for a matching label and use that label to find the value (on the right hand side), which is the function definition of 'multiplyBy2'

  - this now creates two labels for the same function 'multiplyBy2'

  - this is also an example of 'pass by reference' 

line 8: 
  - declare a const in global memory with 'newOutput' as the label, and assigns its value to the invoked function 'newLabelForMultiplyBy2(10)' passing in 10 as the argument. 

  - this creates a new local execution context to run the code in the function

  - javascript will look for the label 'newLabelForMultiplyBy2(10)' in global memory, and finds it as the formerly known label 'multiplyBy2'

  - inside the function, it will declare in local memory 'inputNumber' and assign it the value of 10

  - the calculation will be 10 * 2 = 20, which is stored in the variable doubleValue

*/
