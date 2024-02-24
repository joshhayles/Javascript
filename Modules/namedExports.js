// a way to export only certain parts, and as many items as you want from a given JavaScript file

export function addTWo(a, b) {
  console.log(a + b);
}

export function addThree(a, b, c) {
  console.log(a + b + c);
}

// you can also do this

export { addTWo, addThree };