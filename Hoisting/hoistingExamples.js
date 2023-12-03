// Hoisting examples

// using 'var'
//console.log(x); // => undefined
//var x = 20;
//console.log(x); // => 20

// example using all three
function example() {
  var x = 10;
  let y = 11;
  const z = 12;

  if (true) {
    var x = 13; // reassigns the x to 13 when example() is invoked
    let y = 20; // creates a NEW 'y' within this block
    const z = 16 // creates a NEW 'z' within this block
    console.log(x, y, z); // => 13 20 16
  }

  console.log(x); // => 13
  console.log(y); // => 11
  console.log(z); // => 12
}

example();
