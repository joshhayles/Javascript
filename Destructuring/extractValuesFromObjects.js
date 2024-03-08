let config = {
  myVar: "Josh",
  vizSelector: {
    vizList: ['chart1', 'chart2']
  },
  editor: {
    customFunction: 'function1',
    customFunctionTwo: 'function2'
  }
};

// extract values from objects and assign them to variables:
const {
  myVar,
  vizSelector: { vizList },
  editor: {
    customFunction,
    customFunctionTwo,
  }
} = config;

console.log(myVar); // -> Josh
console.log(vizList); // -> [ 'chart1', 'chart2' ]
console.log(customFunction); // -> function1
console.log(customFunctionTwo); // -> function2