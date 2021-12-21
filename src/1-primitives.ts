// TYPES: number, string, boolean, null, undefined, any, object;

let age: number = 5;

const name: any = 'Jane';

let id: string | number | boolean = '23';
id = 23;
id = true;

// 💩💩💩
let user: object;
user = {};

console.log('object :>> ', age);
console.log('object :>> ', name);
console.log('object :>> ', id);
console.log('object :>> ', user);

export {};
