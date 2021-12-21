// set types using type way: (USE THIS METHOD!)
//! type AddFn = (a: number, b: number) => number;

// or set types using interface:
interface IAddFn {
  (a: number, b: number): number;
}

//! You can write this way:
// const addNumbers = function (a: number, b: number): number {
//   return a + b;
// };

//* or you can write with type settled above:
// const addNumbers: AddFn = function (a, b) {
//   return a + b;
// };

//! or interface way:
const addNumbers: IAddFn = function (a, b) {
  return a + b;
};

//! Arrow Fns same way:
// const addAnotherNumbers = (a: number, b: number): number => {
//   return a + b;
// };

//* TYPE WAY:
// const addAnotherNumbers: AddFn = (a, b) => {
//   return a + b;
// };

//! interface way:
const addAnotherNumbers: IAddFn = (a, b) => {
  return a + b;
};

// function that returns nothing can have VOID in return types(or union):
const logFn = (text: string | number): void | number => {
  console.log('text :>>', text);
  return 13;
};

enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

interface iPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  //   logSize: () => void;
  logSize?(): void; // not necessary method
  getSize(): string;
  addToppings(topping: string): void;
}

const pizza: iPizza = {
  size: PizzaSize.Medium,
  toppings: ['sauce', 'bacon', 'mushrooms'],
  logSize() {
    console.log('object :>> ', this.size);
  },
  getSize() {
    return this.size;
  },
  addToppings(topping) {
    this.toppings.push(topping);
  },
};

const result = addNumbers(2, 11);
const arrowResult = addAnotherNumbers(1, 12);
const logResult = logFn('shit');
console.log('pizza :>> ', pizza);

console.log('result :>>', result);
console.log('arrowResult :>> ', arrowResult);
console.log('logResult :>> ', logResult);

export {};
