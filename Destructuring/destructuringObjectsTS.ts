// Assuming person is defined somewhere in the code or imported
const person: { firstname: string; age: number } = {
  firstname: "John",
  age: 30,
};

// Using an interface for destructuring:
interface Person {
  firstname: string;
  age: number;
}

const { firstname, age }: Person = person;

console.log(firstname); // -> John
