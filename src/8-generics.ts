// you dont want to use Union for unknown number or type of props to your Fns
// type Params = string[] | number[] | object[];

// you'd better use Generics <T> in Fns params of one type:
const reverseFn = <T>(arr: T[]) => {
  return [...arr].reverse();
};

console.log(reverseFn([1, 2, 3, 4, 5]));
console.log(reverseFn(['hello', 'world', 'now']));
console.log(reverseFn([{ a: 1 }, { b: 2 }, { c: 3 }]));

// or in Generics <T> in Fns params of different type:
const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual(3, '3'));

const makeArray = <T, Y>(a: T, b: Y) => {
  return [a, b];
};

console.log(makeArray(2, '3'));
console.log(makeArray({ a: 1 }, '3'));
console.log(makeArray(true, 13));

// using rest for PARAMS
const foo = <T, Y>(mult: T, ...rest: Y[]) => {
  //returns nothing
};

console.log(foo(3, [1, 2, 3]));
console.log(foo(2, [1, 2, 3]));
console.log(foo('mango', ['000', '2', '3']));

export {};
