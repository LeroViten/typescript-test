const logLength = <T extends { length: number }>(arg: T) => {
  console.log(arg.length);
};
console.log(logLength([1, 2, 3, 4, 5]));
console.log(logLength('qwerty'));
//! you cannot add number as arg to above Fn as it doesn't have length prop
// console.log(logLength(13)); ERROR HERE

interface IPerson {
  firstName: string;
  lastName: string;
}

const addFullName = <T extends IPerson>(person: T) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};

console.log(
  addFullName({
    firstName: 'Lero',
    lastName: 'Viten',
  })
);
console.log(
  addFullName({
    firstName: 'Lero',
    lastName: 'Viten',
    age: 36,
  })
);

export {};
