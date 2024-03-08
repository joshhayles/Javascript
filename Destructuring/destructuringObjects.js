// see destructuringObjectsTS.ts file for Typescript examples

// destructuring allows you to extract properties from an object and assign them to variables or parameters, assign default values, rename properties, or omit properties

// object with 3 properties:
const person = { firstname: "Josh", age: "42", hobby: "reading" };

// destructuring firstname and lastname properties and assigning default value for lastname:
const { firstname, lastname = "Hayles" } = person;

console.log(firstname) // -> Josh

// if lastname is omitted, or not present in the person object, the default value of the restructuring process will take effect:

// object without 'lastname' present:
const personTwo = { myFirstName: "Joshua", age: "42", hobby: "reading" };

// desctructure personTwo by renaming the variable 'myFirstName':
const { myFirstName: fname, } = personTwo;

console.log(fname); // -> Joshua

// desctructuring the firstname property and omitting the rest:
const personThree = { firstName: "Josh", age: "42", hobby: "reading" };

const { firstName, ...others } = personThree;

// this code extracts the 'name' property from the 'personThree' object and stores its value in the 'name' variable:
console.log(firstName); // -> Josh

// ...others collects any remaining properties of the 'personThree' object that are not destructured (age, hobby) and stores them in an object named 'others':
console.log(others); // -> { age: '42', hobby: 'reading' }