// using readonly props (cannot change, push into file)...
const ages: readonly number[] = [23, 18, 34, 36, 10];
// or:
const classes: Array<number> = [1, 2, 2, 23, 45, 8542, 4];

// complex:
const streetNumbers: number | string | object | boolean = [
  65,
  98,
  31,
  654,
  'five',
  { house: '5' },
  false,
];

// Tuple usage: coords, RGB...strict type, amount and position of els in arr
const coords: [number, number] = [50.4501, 30.5234];

console.log('ages :>> ', ages);
console.log('classes :>> ', classes);
console.log('streetNumbers :>> ', streetNumbers);
console.log('coords :>> ', coords);

export {};
