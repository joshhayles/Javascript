// The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined:

const myVar = null ?? 'some default string value';

console.log(myVar); // -> some default string value

const myVarToo = 23 ?? 0;

console.log(myVarToo); // -> 23